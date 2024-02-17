---
title: Vite
comment: false
editLink: false
prev: false
next: false
---

## 简介

## 环境变量

`Vite`可以实现类似`Spring Boot`的`Properties`那样的功能.

1. 在根目录下创建`.env`、`.env.development`、`.env.production`三个配置文件
    1. `.env`是通用配置
    2. `.env.development`是`开发环境(即process.env.NODE_ENV=development)`配置
    3. `.env.production`是`生产环境(即process.env.NODE_ENV=production)`配置

2. 以`KEY=VALUE`的形式写入配置项,`KEY`必须以`VITE_`开头,如`VITE_APP_TITLE=Vite App`

```bash
# .env
VITE_APP_TITLE=Vite App
VITE_APP_BASE_URL=/vite-app/
```

3. 使用`Vite`注入到`浏览器环境`中

::::: details vite.config.ts

```ts
export default defineConfig(configEnv => {
    const viteEnv: Record<string, string> = loadEnv(configEnv.mode, process.cwd());
    return {
        define: {
            'process.env': viteEnv,
        },
        //其它配置
    }
});
```

:::::

4. 在`浏览器环境`中使用

```tsx
const UserList = memo<Props>((props) => {
    useEffect(() => {
        alert(process.env.VITE_APP_TITLE)
    }, []);
    return (<></>);
})
```

5. `typescript`支持

在根目录下新建`vite-env.d.ts`然后写入

::::: details vite-env.d.ts

```ts
interface ImportMetaEnv {
    readonly VITE_XX: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

```

:::::

现在使用`import.meta.env`引用环境变量时就可以获得类型提示了

![](https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240116/image.74gsf8o4jt80.png)

## 路径别名

对于结构复杂的项目,路径别名可以使导入语句更短且更具可读性.同时在目录结构发生变化时,也可以减少修改路径的工作量.

1. 在`vite.config.ts`中配置`resolve.alias`

::::: details vite.config.ts

```ts
const rootPath = path.resolve(process.cwd());
const srcPath = `${rootPath}/src`;
export default defineConfig(configEnv => {
    return {
        //如使用了ts装饰器且vite版本在5以上,需要添加如下配置,
       // 参考https://github.com/vitejs/vite/issues/13736#issuecomment-1633592860
        optimizeDeps: {
            esbuildOptions: {
                tsconfigRaw: {
                    compilerOptions: {
                        experimentalDecorators: true
                    }
                }
            }
        },
        resolve: {
            alias: {
                '~': rootPath,
                '@': srcPath
            }
        },
        //其它配置
    }
});
```

:::::

2. 在`tsconfig.json`中配置`compilerOptions.paths`

```json
{
  "compilerOptions": {
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```

## 代理服务器

在前端通过`axios`或者`fetch`之类的`http客户端`调用后端服务时通常都会遇到由`浏览器同源策略`抛出的`跨域`
问题,这时可以在`vite.config.ts`中配置`proxy`来解决.

1. 定义跨域相关的配置

::::: details vite-env.d.ts
```ts
export  interface ImportMetaEnv {
    // axios 基础url
    readonly VITE_AXIOS_BASE_URL: string
    // axios 代理url
    readonly VITE_AXIOS_PROXY_URL: string
}
```
:::::

::::: details .env.development
```bash
VITE_AXIOS_BASE_URL=/api
VITE_AXIOS_PROXY_URL='http://localhost:8085'
```
:::::

::::: details axios.ts
```ts
const httpClient = axios.create({
   baseURL:process.env.VITE_AXIOS_BASE_URL,
   timeout: 1000 * 10,
   responseType: "json"
});
```
:::::

2. 在`vite.config.ts`中配置`proxy`

::::: details vite.config.ts
```ts
export default defineConfig(configEnv => {
    const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv;
    return {
        server: {
            proxy: viteEnv.VITE_AXIOS_PROXY_URL ? {
                [viteEnv.VITE_AXIOS_BASE_URL]: {
                    target: viteEnv.VITE_AXIOS_PROXY_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(viteEnv.VITE_AXIOS_BASE_URL, ''),
                    configure: (proxy, options) => {
                        // 监听代理请求事件并打印
                        proxy.on('proxyReq', (proxyReq, req, res, opts) => {

                        });
                    },
                },
            } : undefined
        }
    }
});
```
:::::

3. 下面这张图展示了使用`axios`作为`http客户端`通过访问`vite dev`时创建的代理服务器来实现`跨域`访问`spring boot`服务的过程

![vite代理服务器工作流程](https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240116/vite代理服务器工作流程.6oml1hxy2ew0.svg)

## 插件
### `Unocss`集成

1. 安装依赖

```bash
pnpm i -D unocss
```

2. 在`vite.config.ts`中配置`unocss`插件

::::: details vite.config.ts
```ts
import UnoCSS from 'unocss/vite'
export default defineConfig(configEnv => {
    return {
        plugins: [
            UnoCSS(),
        ],
    }
});
```
:::::

3. 在项目入口处引入`unocss`的`css`文件

```ts
import 'uno.css'
```

:::tip
项目入口视具体项目类型或结构而定,比如`Vue`通常在`main.ts`中引入,`React`通常在`index.tsx`中引入
:::

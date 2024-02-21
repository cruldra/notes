---
title: semantic-release
comment: false
editLink: false
prev: false
next: false
---
<script setup lang="ts">
const images = [{src:'https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240108/img3.5sww72zpkyk0.png',alt:''}]

</script>



## 简介

[semantic-release](https://www.npmjs.com/package/semantic-release)是一个**自动化版本管理**和**包发布**的工具,它遵循[语义化版本控制(Semantic Versioning,简称SemVer)规范](https://semver.org/)


## 安装及配置

1. 安装基础依赖

```bash
pnpm i -D semantic-release
```

2. 项目根目录下创建配置文件`.releaserc.js`

```js
module.exports = {
    branches: ["master"],
    plugins: []
}
```

## 插件

[semantic-release](https://www.npmjs.com/package/semantic-release)依赖各种各样的[插件](https://semantic-release.gitbook.io/semantic-release/extending/plugins-list)来实现自动化流程



### semantic-release-gitmoji

[semantic-release-gitmoji](https://www.npmjs.com/package/semantic-release-gitmoji)插件用于解析`git`提交信息中的[gitmoji](https://gitmoji.carloscuesta.me/)表情符号,并根据表情符号来决定版本号的升级类型

对于这个插件的应用示例,可以参考[这个项目](https://github.com/cruldra/hichat-next.git)


### semantic-release-docker

[semantic-release-docker](https://www.npmjs.com/package/@3o2/semantic-release-docker)插件用于自动化构建`docker`镜像并发布到`docker`仓库

#### 发布到阿里云镜像仓库

1. 创建一个镜像仓库

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/img.2yy2zax3tn.webp)

2. 设置访问密码

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/img2.77da94o6n1.webp)

3. 在`.releaserc.js`中配置`semantic-release-docker`

```js

module.exports = {
    branches: ["master"],
    plugins: [
        ...
        ['@codedependant/semantic-release-docker', {
            dockerTags: ['latest', '{{version}}'],
            dockerImage: 'hichat',
            dockerFile: 'Dockerfile',
            dockerRegistry : 'registry.cn-shanghai.aliyuncs.com' ,
            dockerProject : 'dongjak' ,
        }]
    ]
}

```

`dockerTags` - 版本标记,数组中的每个标记都会发布一个对应的镜像,内容都一样,只是标记不同

![img_1](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/img_1.7smxvfja72.webp)

`dockerImage` - 对应仓库的名称⤵️

![img3](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/img3.4n7fwhombi.webp)

`dockerProject` - 创建镜像仓库时选择的命名空间⤵️

![](https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240108/image.578dbrq0jqo0.png)

---
title: Knife4j
comment: false
editLink: false
prev: false
next: false
---

## 简介

`Spring Boot3`之后使用[`Spring Doc`](https://springdoc.org/)来生成[Open API3](https://swagger.io/specification/)
规范的文档,而[`Knife4j`](https://doc.xiaominfo.com/)是基于`Spring Doc`的一个增强UI实现,可以让我们更方便的查看和测试接口.

:::tip
关于`springfox`、`springdoc`、`openapi`、`swagger`、`knife4j`这几个组件之间的关系如下:
:::

1. **Swagger** - 一套完整的规范及框架,用于生成、描述、调用和可视化`RESTful`风格的`Web`服务
    * `Swagger Ui` - 一个`HTML`5的`API`文档渲染器,可以动态地根据`Swagger`规范生成`API`文档
2. **OpenAPI** - Swagger中关于文档生成的那一套规范的继承者,目前已经发展到了第三版,也就是`OpenAPI3`
3. **Springfox** - 用于和`Spring MVC`集成,生成符合`Swagger`规范的`API`文档
4. **Springdoc** - `Springfox`的替代品,支持`OpenAPI3`规范
5. **Knife4j** - 基于`Springdoc`的增强UI实现,提供更强大的`UI`界面

## 安装

::: code-tabs#安装springboot-security

@tab:active maven

```xml
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-openapi3-jakarta-spring-boot-starter</artifactId>
    <version>4.4.0</version>
</dependency>
```

@tab gradle-kts

```bash
implementation("com.github.xiaoymin:knife4j-openapi3-jakarta-spring-boot-starter:4.4.0")
```


:::

## 配置

### 基础配置

在`application.yml`中添加如下配置:

::::: details 基础配置
```yaml
# springdoc-openapi项目配置
springdoc:
  swagger-ui:
    path: /swagger-ui.html
    tags-sorter: alpha
    operations-sorter: alpha
  api-docs:
    path: /v3/api-docs
  group-configs:
    - group: 'default'
      paths-to-match: '/**'
      packages-to-scan: com.xiaominfo.knife4j.demo.web
# knife4j的增强配置，不需要增强可以不配
knife4j:
  enable: true
  setting:
    language: zh_cn
    
```
:::::


### 修改站点标题描述等
::::: details 修改站点标题描述等
```kotlin
@Configuration
class SwaggerConfig {
    /**
     * 根据@Tag 上的排序，写入x-order
     *
     * @return the global open api customizer
     */
    @Bean
    fun orderGlobalOpenApiCustomizer(): GlobalOpenApiCustomizer {
        return GlobalOpenApiCustomizer { openApi: OpenAPI ->
            if (openApi.tags != null) {
                openApi.tags
                    .forEach(Consumer<Tag> { tag: Tag ->
                        val map: MutableMap<String, Any> =
                            HashMap()
                        map["x-order"] = RandomUtil.randomInt(0, 100)
                        tag.extensions = map
                    })
            }
            if (openApi.paths != null) {
                openApi.addExtension("x-test123", "333")
                openApi.paths.addExtension("x-abb", RandomUtil.randomInt(1, 100))
            }
        }
    }

    @Bean
    fun customOpenAPI(): OpenAPI {
        return OpenAPI()
            .info(
                Info()
                    .title("XXX用户系统API")
                    .version("1.0")

                    .description("Knife4j集成springdoc-openapi示例")
                    .termsOfService("http://doc.xiaominfo.com")
                    .license(
                        License().name("Apache 2.0")
                            .url("http://doc.xiaominfo.com")
                    )
            )
    }
}

```
:::::


## 参考

1. [神器 SpringDoc 横空出世！最适合 SpringBoot 的API文档工具来了！ - 掘金](https://juejin.cn/post/7080328458206707720)
2. [swagger-bootstrap-ui-demo: knife4j 以及swagger-bootstrap-ui 集成框架示例项目 - Gitee.com](https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-spring-boot3-demo)



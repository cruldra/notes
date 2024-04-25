---
title: ModelAttribute
comment: false
editLink: false
prev: false
next: false
---

## 简介

[@ModelAttribute](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/modelattrib-method-args.html)
用于将请求参数绑定到模型对象上

**在使用`multipart/form-data`时,`@ModelAttribute`尤其有用**

## 示例

假设前端请求如下:

![](https://cdn.jsdelivr.net/gh/cruldra/picx-images-hosting@master/image.2yy5g7kptc.webp)


1. 定义模型

```kotlin
data class AssistantSetAvatarParams(
    @field:NotBlank(message = "助手id不能为空")
    val assistant_id: String? = null,

    val file: MultipartFile? = null
)

```

2. 在控制器中使用`@ModelAttribute`

```kotlin

@RestController
@RequestMapping("/api/assistant")
class AssistantController {

    @PostMapping("/set_avatar")
    fun setAvatar(@ModelAttribute params: AssistantSetAvatarParams): String {
        return "success"
    }
}

```

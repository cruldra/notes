---
title: DEO
comment: false
editLink: false
prev: false
next: false
---

## 简介

`DEO`是`Dongjak Extensions OSS`的缩写,是一个`OSS`扩展库,目的是提供统一的`API`来使用不同厂商的`OSS`服务.

:::tip
目前仅支持[阿里云OSS](https://www.aliyun.com/product/oss)
:::


## 使用

### 添加依赖

```gradle
implementation("cn.dongjak:extensions-oss")
implementation("com.aliyun.oss:aliyun-sdk-oss")
```

### 配置存储桶(Bucket)

```yaml
# application.yml
oss:
  access-key-id: ak
  access-key-secret: sk
  bucket-name: zmesc
  endpoint: oss-cn-hangzhou.aliyuncs.com
```

可以通过`cn.dongjak.oss.ObjectStorageProperties`类访问这些配置


### 文件上传

对象存储相关操作都包含在`IObjectStorageService`接口,直接注入即可使用

```kotlin
@Service
class ImageService(
    private val ossService: IObjectStorageService,
    private val ossProps: ObjectStorageProperties
) {
    fun save(form: Form): Image {
         ossService.save(ossProps.bucketName!!, file, "used-car/${form.part}/${file.name}")
    }
}
```

## 未来计划

- [ ] 支持[腾讯云COS](https://cloud.tencent.com/product/cos)




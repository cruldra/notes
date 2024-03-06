---
title: DataSize
comment: false
editLink: false
prev: false
next: false
---

## 简介

在文件处理场景中向数据库存储文件或数据大小时,通常在数据库中用`int`来存储字节数量,而在业务层(`java bean`)中可以`hutool`
的[DataSize](https://plus.hutool.cn/apidocs/cn/hutool/core/io/unit/DataSize.html)类以便于转换和计算.

## DataSize

`DataSize`是`hutool`中的一个类,用于处理数据大小,它提供了一些方法用于转换和计算数据大小.

```kotlin
//将数字转换成DataSize对象
val dataSize = DataSize.of(8255207777, DataUnit.BYTES) 

//格式化DataSize对象
DataSizeUtil.format(dataSize.toBytes()) // 7.68GB
```

## 定义转换器

### 数据库列类型为`int`时

```kotlin
import cn.hutool.core.io.unit.DataSize
import cn.hutool.core.io.unit.DataUnit

@Converter(autoApply = true)
class DataSizeToIntJpaConverter : AttributeConverter<DataSize, Int> {
    override fun convertToDatabaseColumn(dataSize: DataSize?): Int =
        dataSize?.toBytes()?.toInt() ?: 0

    override fun convertToEntityAttribute(size: Int?): DataSize =
        DataSize.of(size?.toLong() ?: 0, DataUnit.BYTES)
}

```

### 数据库列类型为`long`时

```kotlin
@Converter(autoApply = true)
class DataSizeToLongJpaConverter : AttributeConverter<DataSize, Long> {
    override fun convertToDatabaseColumn(dataSize: DataSize?): Long =
        dataSize?.toBytes() ?: 0

    override fun convertToEntityAttribute(size: Long?): DataSize =
        DataSize.of(size ?: 0, DataUnit.BYTES)
}
```

## 使用转换器


```kotlin
@Entity
class File {
    //@Convert(converter = DataSizeConverter::class)
    var size: DataSize? = null
}

```

## 参考

* [Convert Byte Size Into a Human-Readable Format in Java | Baeldung](https://www.baeldung.com/java-human-readable-byte-size)

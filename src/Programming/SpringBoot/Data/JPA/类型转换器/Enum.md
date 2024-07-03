---
title: Enum
comment: false
editLink: false
prev: false
next: false
---

## 简介

在`SpringData JPA`中使用`枚举(enum)`类型映射数据库字段有几个好处:

1. **类型安全** - 枚举提供了一种类型安全的方式来表示固定的常量集合.使用枚举可以确保只有预定义的值能被赋予相应的字段,这样可以避免无效值的出现并且在编译时就能发现潜在错误.
2. **代码可读性** - 枚举使代码更加易读.通过使用明确命名的枚举值,代码的可读性和可维护性得到提高,因为它们比原始数值或字符串更能清楚地表达意图.
3. **重构友好** - 在代码库中重构枚举类型通常比重构分散在代码中的字符串或整数常量更加安全和简单.
4. **业务逻辑清晰** - 枚举可以将业务逻辑与数据模型紧密结合,使得业务状态和行为的表示更加集中和一致.
5. **数据一致性** - 数据库中的字段值将受到Java代码中枚举定义的约束,这有助于保持数据的一致性.
6. **易于使用查询方法** - 在`SpringData JPA`仓库中,你可以直接使用枚举类型作为查询方法的参数,而无需进行额外的转换.

## 使用

1. 创建业务枚举

```kotlin
enum class UrlType {
    PAGE,
    POPUP
}

```

2. 在实体类中使用枚举

```kotlin
@Entity
@Table(name = "zm_entrance")
class ZmEntrance : AbstractPersistable<Long>() {

    /**
     * 跳转方式
     */
    @Enumerated(EnumType.STRING)
    @Lob
    @Column(name = "url_type", nullable = false)
    var urlType: UrlType = UrlType.PAGE
}

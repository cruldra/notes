---
title: JvmName
comment: false
editLink: false
prev: false
next: false
order: 1
---

[[Kotlin] 使用 JvmName 避免相同 JVM 签名错误的技术总结 #Kotlin - Qiita](https://qiita.com/wrongwrong/items/cd4a1e2dad8367410466)
[JvmName 注解在 Kotlin 中的应用 - 技术小黑屋](https://droidyue.com/blog/2019/09/01/jvm-name-annotations-kotlin/)

```kotlin
@Entity
@Table(name = "zm_administrator")
class ZmAdministrator : AbstractPersistable<Long>(), IUser {
    @Suppress("INAPPLICABLE_JVM_NAME")
    @get:JvmName("username")
    @Column(name = "username")
    var username: String? = null

    @Suppress("INAPPLICABLE_JVM_NAME")
    @get:JvmName("password")
    @Column(name = "password")
    var password: String? = null


    override fun getPassword(): String {
        return password!!
    }

    override fun getUsername(): String {
        return username!!
    }


}

```

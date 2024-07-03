---
title: RESTful端点
comment: false
editLink: false
prev: false
next: false
---

## 简介

这个标准用于定义如何在基于`Spring Web MVC`的项目中创建符合`RESTful`风格的端点.

## 核心概念

1. **资源**：资源是指在`RESTful`端点中被操作的对象,比如用户、订单等.
2. **端点**：端点是指资源的操作入口,具体体现为`HTTP`请求的`URL`.
3. **请求方法**：`HTTP`协议定义了多种请求方法,常用的有`GET`、`POST`、`PUT`、`DELETE`、`PATCH`等.

## 创建`RESTful`端点

### 创建`Endpoints`类

格式为`$Resource$Endpoints`,比如`UserEndpoints`.

```kotlin

@RestController
@RequestMapping("/users")
class UserEndpoints (private val userService: UserService){

}

```

### 获取资源列表

1. 不使用分页

```kotlin
@GetMapping
fun list(): List<User> {
    return userService.listUsers()
}
```

2. 分页获取

```kotlin
@GetMapping
fun list(@RequestBody pagination: Pagination): List<User> {
    return userService.listUsers(pagination)
}
```

### 获取单个资源

```kotlin
@GetMapping("/{id}")
fun get(@PathVariable id: Long): User {
    return userService.getUser(id)
}
```

### 创建资源

```kotlin
@PostMapping
fun create(@RequestBody user: User): User {
    return userService.createUser(user)
}
```

### 更新资源

```kotlin
@PutMapping("/{id}")
fun update(@PathVariable id: Long, @RequestBody user: User): User {
    return userService.updateUser(id, user)
}
```

### 删除资源

```kotlin
@DeleteMapping("/{id}")
fun delete(@PathVariable id: Long) {
    userService.deleteUser(id)
}
```


### 完整示例

```kotlin
@RestController
@RequestMapping("/users")
class UserEndpoints (private val userService: UserService){

    @GetMapping
    fun listUsers(): List<User> {
        return userService.listUsers()
    }

    @GetMapping("/{id}")
    fun getUser(@PathVariable id: Long): User {
        return userService.getUser(id)
    }

    @PostMapping
    fun createUser(@RequestBody user: User): User {
        return userService.createUser(user)
    }

    @PutMapping("/{id}")
    fun updateUser(@PathVariable id: Long, @RequestBody user: User): User {
        return userService.updateUser(id, user)
    }

    @DeleteMapping("/{id}")
    fun deleteUser(@PathVariable id: Long) {
        userService.deleteUser(id)
    }

}

```

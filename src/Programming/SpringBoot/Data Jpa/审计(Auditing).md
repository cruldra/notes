---
title: 审计(Auditing)
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

在`SpringData JPA`中,[`审计(Auditing)`](https://docs.spring.io/spring-data/jpa/reference/auditing.html)
指的是跟踪[`实体(Entity)`](https://www.baeldung.com/jpa-entities)对象生命周期并作出响应的过程.

[`审计(Auditing)`](https://docs.spring.io/spring-data/jpa/reference/auditing.html)
通常用于跟踪数据的历史变化,比如记录用户何时创建了一个记录以及最后一次更新该记录的时间和用户

## 安装及配置

1. 添加依赖

::: code-tabs#defineProps

@tab:active Gradle Kts

```kotlin
dependencies {
  implementation("org.springframework.boot:spring-boot-starter-data-jpa")
}
```

@tab Maven

```xml

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

:::

2. 在配置类上添加注解`@EnableJpaAuditing`

```kotlin

@EnableJpaAuditing
@SpringBootApplication
class HiChatApiApplication

fun main(args: Array<String>) {
    runApplication<HiChatApiApplication>(*args)
}

```

3. 在实现类上添加注解`@EntityListeners(AuditingEntityListener::class)`

```java
@Entity
@EntityListeners(AuditingEntityListener.class) // 添加这个注解来激活审计事件
public class YourEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreatedDate
    private Instant createdAt;

    @CreatedBy
    private String createdBy;

    @LastModifiedDate
    private Instant lastModifiedAt;

    @LastModifiedBy
    private String lastModifiedBy;

    // 其他字段和方法
}
```

## 审计注解

`审计注解`用于自动响应实体生命周期事件并记录相关信息

### @CreatedDate

`@CreatedDate`注解用于标记一个字段,该字段将在实体被持久化时自动填充当前时间

```java
@Entity
@EntityListeners(AuditingEntityListener.class) // 添加这个注解来激活审计事件
public class YourEntity {
    
        @CreatedDate
        private Instant createdAt;
    
    }
}
```

### @CreatedBy

`@CreatedBy`注解用于标记一个字段,该字段将在实体被持久化时自动填充当前用户的用户名

```java
@Entity
@EntityListeners(AuditingEntityListener.class) // 添加这个注解来激活审计事件
public class YourEntity {
    
        @CreatedBy
        private String createdBy;
    
    }
}
```

### @LastModifiedDate

`@LastModifiedDate`注解用于标记一个字段,该字段将在实体被更新时自动填充当前时间

```java
@Entity
@EntityListeners(AuditingEntityListener.class) // 添加这个注解来激活审计事件
public class YourEntity {
    
        @LastModifiedDate
        private Instant lastModifiedAt;
    
    }
}
```

### @LastModifiedBy

`@LastModifiedBy`注解用于标记一个字段,该字段将在实体被更新时自动填充当前用户的用户名

```java
@Entity
@EntityListeners(AuditingEntityListener.class) // 添加这个注解来激活审计事件
public class YourEntity {
    
        @LastModifiedBy
        private String lastModifiedBy;
    
    }
}
```

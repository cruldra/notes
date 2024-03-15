---
title: TransactionSynchronizationManager
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[TransactionSynchronizationManager](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/support/TransactionSynchronizationManager.html)
是`Spring`框架中用于管理当前线程事务状态和资源绑定的核心类,它协调事务传播行为并提供事务同步回调机制.

## 绑定资源

1. 在事务开始时,将数据库连接或其他资源绑定到当前线程,以便在事务范围内共享和重用资源.这样可以避免在事务内多次获取和释放资源,提高性能并确保事务的一致性.

```java
public void doInTransaction() {
    // 获取数据库连接
    Connection connection = DataSourceUtils.getConnection(dataSource);
    try {
        // 将数据库连接绑定到当前线程
        TransactionSynchronizationManager.bindResource(dataSource, new ConnectionHolder(connection));
        
        // 在事务范围内执行数据库操作
        // ...
        
    } finally {
        // 解绑数据库连接
        TransactionSynchronizationManager.unbindResource(dataSource);
        // 释放数据库连接
        DataSourceUtils.releaseConnection(connection, dataSource);
    }
}
```

-------------------

2. 在一些特定的场景下,需要将自定义的资源绑定到当前线程,以便在事务范围内共享和访问.


```java
public void doSomething() {
    // 获取自定义资源
    MyResource resource = new MyResource();
    // 将自定义资源绑定到当前线程
    TransactionSynchronizationManager.bindResource(MyResource.class, resource);
    
    try {
        // 在事务范围内访问和使用自定义资源
        // ...
        
    } finally {
        // 解绑自定义资源
        TransactionSynchronizationManager.unbindResource(MyResource.class);
    }
}
```

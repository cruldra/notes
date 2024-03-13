---
title: sql方言
comment: false
editLink: false
prev: false
next: false
---

## 简介

`sql方言`是指对标准`sql`的扩展,不同的数据库厂商会对`sql`进行扩展,以适应自家的产品.几种主流的`sql`方言如下:

1. `T-SQL`: `Microsoft SQL Server`的`sql`方言.
2. `PL/SQL`: `Oracle`的`sql`方言.
3. `PL/pgSQL`: `PostgreSQL`的`sql`方言.
4. `MySQL`: `MySQL`的`sql`方言.


## 异常处理

`mysql`中创建异常处理的语法如下,它是[DECLARE ... HANDLER Statement](https://dev.mysql.com/doc/refman/8.0/en/declare-handler.html)语法的一部分:

```sql
DECLARE EXIT HANDLER FOR <SQLEXCEPTION>
    BEGIN
    -- 异常处理代码
    END
    
-- <SQLEXCEPTION> 代表异常类型
```


## 事务处理

:::tip
事务是一系列的`SQL`语句,它们作为一个整体被执行,即所有的语句都成功执行,或者都不执行.
:::

`mysql`中创建一个新事务的语法如下:

```sql
START TRANSACTION
    [transaction_characteristic [, transaction_characteristic] ...]

transaction_characteristic: {
    WITH CONSISTENT SNAPSHOT
  | READ WRITE
  | READ ONLY
}

BEGIN [WORK]
COMMIT [WORK] [AND [NO] CHAIN] [[NO] RELEASE]
ROLLBACK [WORK] [AND [NO] CHAIN] [[NO] RELEASE]
SET autocommit = {0 | 1}
```

### 示例1:一个简单的事务

```sql
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_user`(IN `user_id` INT)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        -- 事务出现异常时回滚
        ROLLBACK;
    END;

    START TRANSACTION;
        -- 事务过程
    COMMIT;
END
```

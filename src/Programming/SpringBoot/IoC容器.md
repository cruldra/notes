---
title: IoC容器
comment: false
editLink: false
prev: false
next: false
---

## 什么是`IoC`

`IoC`是`Inversion of Control`的缩写,即`控制反转`,也叫`依赖注入`(Dependency Injection, `DI`),是`Spring`框架的核心功能点之一.

## 为什么需要`IoC`

可以看一个经典的例子,在使用`Java`的`JDBC`时,我们需要手动加载驱动,然后获取`Connection`对象,最后关闭连接,如下:

```java
public class EmployeeDAO {
    private static final String DRIVER = "com.mysql.jdbc.Driver";
    private static final String URL = "jdbc:mysql://localhost:3306/employees";
    private static final String USERNAME = "user";
    private static final String PASSWORD = "pass";

    public List<Employee> findAllEmployees() {
        List<Employee> employees = new ArrayList<>();
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        try {
            Class.forName(DRIVER);
            conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
            stmt = conn.createStatement();
            rs = stmt.executeQuery("SELECT * FROM employee");

            while (rs.next()) {
                Employee employee = new Employee(/* ... */);
                // ...设置employee属性...
                employees.add(employee);
            }
        } catch (Exception e) {
            // ...处理异常...
        } finally {
            // ...关闭资源...
        }
        return employees;
    }
    // ...其他数据库操作...
}
```

上面的代码存在几个问题:

1. **代码重复**: 每个数据库操作方法都需要重复创建连接、执行语句和关闭资源的代码
2. **紧密耦合**: `EmployeeDAO`类直接依赖于`MySQL`的驱动和`JDBC API`,这使得切换数据库或者引入连接池变得困难


接下来再看看引用`IoC`会怎么样

```java

@Repository
public class EmployeeDAO {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public EmployeeDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Employee> findAllEmployees() {
        return jdbcTemplate.query(
            "SELECT * FROM employee",
            (rs, rowNum) -> new Employee(/* ... */)
        );
    }
    // ...其他数据库操作...
}
```

可以看到`EmployeeDAO`不再负责创建和管理数据库连接,我们把获取连接的这个过程委托给`Spring IoC`容器来做.这样做的好处是:

1. **减少样板代码**: 在我们需要访问数据库时,使用`@Autowired`注入一个新的`JdbcTemplate`对象即可,不需要再手动创建连接、执行语句和关闭资源
2. **松耦合**: `EmployeeDAO`可以与任何数据库协同工作,只要提供相应的`JdbcTemplate`配置即可

:::tip
总结一下就是: **`IoC`是一种设计模式,它用来协助管理对象的生命周期,使代码更关注于业务逻辑,使得代码变得更加模块化、灵活和易于测试**
:::


## 参考

* [Inversion of Control and Dependency Injection with Spring | Baeldung](https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring)

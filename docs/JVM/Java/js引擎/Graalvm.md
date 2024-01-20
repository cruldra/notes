---
title: Graalvm
comment: false
editLink: false
prev: false
next: false
order: 1
---


## 安装

```xml
<dependency>
    <groupId>org.eclipse.dirigible</groupId>
    <artifactId>dirigible-engine-javascript-graalvm</artifactId>
    <version>6.3.16.5</version>
</dependency>
```

## 获取js变量

```java
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Value;

public class JavaScriptParser {
    public static void main(String[] args) {
        try (Context context = Context.create()) {
            String script = "var x = 10; var y = 5; var z = x + y;z;";
            Value result = context.eval("js", script);
            System.out.println(result.asInt());
        }
    }
}


```
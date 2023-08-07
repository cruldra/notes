---
title: Nashorn
comment: false
editLink: false
prev: false
next: false
order: 1
---


## 简介


::: tip
 
java11中已经被弃用,在java15中已经被移除,可以使用[Graalvm](./Graalvm.md)代替

:::

## 获取js变量

```java
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class JavaScriptParser {
    public static void main(String[] args) {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("nashorn");

        try {
            engine.eval("var x = 10; var y = 5; var z = x + y; z;"); //返回Integer
            engine.eval("{id:'1'}");//返回 ScriptObjectMirror
        } catch (ScriptException e) {
            e.printStackTrace();
        }
    }
}

```

## 参考

* [Nashorn alternative for Java 11 - Stack Overflow](https://stackoverflow.com/questions/58179771/nashorn-alternative-for-java-11)
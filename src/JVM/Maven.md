---
title: Maven
comment: false
editLink: false
prev: false
next: false
---

## 简介

## 插件

### depgraph-maven-plugin

[Depgraph Maven Plugin](https://ferstl.github.io/depgraph-maven-plugin/graph-mojo.html)用于生成依赖图

```xml
<plugin>
    <groupId>com.github.ferstl</groupId>
    <artifactId>depgraph-maven-plugin</artifactId>
    <version>4.0.3</version>
    <configuration>
        <graphFormat>puml</graphFormat>
        <outputFileName>dependency-graph</outputFileName>
        <showVersions>true</showVersions>
    </configuration>
    <executions>
        <execution>
            <id>create-dependency-graph</id>
            <phase>package</phase>
            <goals>
                <goal>graph</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

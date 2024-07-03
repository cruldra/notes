---
title: Junit
comment: false
editLink: false
prev: false
next: false
---


```kotlin

dependencies {
     testImplementation(platform("org.junit:junit-bom:5.10.2"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")

}

tasks.test {
    useJUnitPlatform()
    testLogging {
        events("passed", "skipped", "failed")
    }
}
```

## 参考

* [junit-team/junit5-samples: Collection of sample applications using JUnit 5.](https://github.com/junit-team/junit5-samples)

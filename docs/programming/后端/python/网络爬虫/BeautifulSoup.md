---
title: BeautifulSoup
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 安装

```pip install selenium```

::: tip
如果安装的很慢，可以[使用国内镜像](../pip.md#使用国内镜像)
:::

## 和Selenium配合

::: tip
`BeautifulSoup`库仅能解析静态HTML代码,但[`Selenium`](./Selenium.md)可以,所以可以把它两结合起来,静态的部分用`BeautifulSoup`解析,动态的部分用`Selenium`解析,例如:

```python
from bs4 import BeautifulSoup
from selenium import webdriver

# 创建Chrome浏览器实例
driver = webdriver.Chrome()

# 打开网页
driver.get('https://www.example.com')

# 解析网页内容
soup = BeautifulSoup(driver.page_source, 'html.parser')

# 关闭浏览器
driver.quit()
```
:::

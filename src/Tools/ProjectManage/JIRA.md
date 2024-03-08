---
title: JIRA
comment: false
editLink: false
prev: false
next: false
---

## 简介

## 插件

`JIRA`现在已经无法直接通过插件商店来安装插件,可以手动安装插件,具体步骤如下:

1. 在[插件市场](https://marketplace.atlassian.com/)找到适用`JIRA Server`的插件,然后在插件详情页面右下角下载`jar`包

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.60tzlz5vhk.webp)

2. 将下载的`jar`包上传到`JIRA`服务器的`/var/jira//plugins/installed-plugins`目录下
3. 重启`JIRA`服务
4. 找到插件`id`

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.lvh3jtuh0.webp)

5. 使用下面的命令生成许可证:

```bash
docker exec jira java -jar /var/agent/atlassian-agent.jar \                 INT ✘  21:11:20  
    -p com.okapya.jira.checklist \
    -m cruldra@gmail.com \
    -n cruldra@gmail.com \
    -o https://cruldra.com \
    -s BF6U-FWP5-4TAW-4149
```

<CommandBuilder :editors='[
{
"label": "服务器id",
"field": "serverId",
"type": "text",
"defaultValue": "BF6U-FWP5-4TAW-4149"
},
{
"label": "插件id",
"field": "pluginId",
"type": "text"
}
]' cmdTemplate="docker exec jira java -jar /var/agent/atlassian-agent.jar \
-p {pluginId} \
-m cruldra@gmail.com \
-n cruldra@gmail.com \
-o https://cruldra.com \
-s {serverId}"/>

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.7w6kelxoua.webp)

6. 最后把许可证粘贴到`JIRA`的插件许可证页面即可


## SmartCommits

https://help.gitkraken.com/git-integration-for-jira-data-center/smart-commits-docs-gij-self-managed/

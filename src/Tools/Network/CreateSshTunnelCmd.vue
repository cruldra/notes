<script lang="ts" setup>
</script>

<template>
  <CommandBuilder :editors='[
  {
    "label": "本地端口",
    "placeholder": "对这个端口的访问会被转发给下面这个远程端口👇",
    "field": "localPort",
    "type": "number"
  },
  {
    "label": "远程服务端口",
    "placeholder": "对本地端口的访问会被转发给这个端口",
    "field": "remoteServicePort",
    "type": "number"
  },
  {
    "label": "远程服务主机",
    "placeholder": "远程服务端口所在的主机,通常是localhost",
    "field": "remoteServiceHost",
    "type": "text",
    "defaultValue": "localhost"
  },
  {
    "label": "ssh用户",
    "placeholder": "通常是root",
    "field": "sshUser",
    "type": "text",
    "defaultValue": "root"
  },
  {
    "label": "ssh主机",
    "placeholder": "通常和远程服务主机一样",
    "field": "sshHost",
    "type": "text"
  },
  {
    "label": "ssh端口",
    "placeholder": "通常是22",
    "field": "sshPort",
    "type": "number",
    "defaultValue": 22
  },
]' cmdTemplate="ssh -L {localPort}:{remoteServiceHost}:{remoteServicePort} {sshUser}@{sshHost} -p {sshPort} -N"
                  :templates='[
{
"name": "mysql",
"description":"访问远程内网中的mysql服务",
"value":{
"localPort":3306,
"remoteServicePort":3306
}
}
]'/>
</template>

<style scoped>

</style>

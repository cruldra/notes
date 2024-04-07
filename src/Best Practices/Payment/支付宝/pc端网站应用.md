---
title: pc端网站应用
comment: false
editLink: false
prev: false
next: false
---

## 简介

`pc`端网站应用接入支付宝支付的流程如下图所示:

![支付宝pc网站支付.svg](../assets/%E6%94%AF%E4%BB%98%E5%AE%9Dpc%E7%BD%91%E7%AB%99%E6%94%AF%E4%BB%98.svg)

## 准备工作

要在`pc`
端网站上接入支付宝支付,需要先[注册](https://b.alipay.com/page/settle-b/guide)
一个商户账号,然后[创建网页应用](https://open.alipay.com/develop/pm/create?templateId=6-bcb9-7250e6fd2c431487669730456&from=payappsite)

应用创建好以后在`开发设置`中配置好`密钥`和`回调地址`

![](https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240112/image.72fq93ksfmo0.png)

## 沙箱环境

支付宝要求应用审核通过后才能正式使用,开发过程中我们可以使用[沙箱环境](https://open.alipay.com/develop/sandbox/app)
来模拟支付宝的支付流程.

![](https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240112/image.5h0rtmw2oko0.png)

:::warning
使用沙箱环境需要配套对应的[客户端](https://open.alipay.com/develop/sandbox/tool)
,不然用正式版的支付宝客户端扫沙箱环境下生成的二维码会出现`二维码已失效,请刷新重试`
:::

## 对接

准备好相关材料后就可以开始正式编写代码来对接了,对接之前先确认下所需要的参数:

1. **支付网关** - 一个`url`,也就是谁来处理你发起的支付请求
2. **APPID** - 应用ID,不同的应用可能会有不同的支付流程,多个应用共用商户的相关资质
3. **应用私钥** - 用于和`支付宝公钥`一起保证交易的安全
4. **支付宝公钥** - 用于和`应用私钥`一起保证交易的安全

接下来引入`alipay-sdk-java`依赖:

```gradle
implementation("com.alipay.sdk:alipay-sdk-java:4.38.183.ALL")
```

### 发起支付请求

::::: details 发起支付请求到支付宝网关

```kotlin
class AlipayTests {

    private val objectMapper = ObjectMapperBuilder.build()

    @Test
    fun test() {
        val client = DefaultAlipayClient(
            "https://openapi-sandbox.dl.alipaydev.com/gateway.do", //网关地址,这里是沙箱环境提供的,正式环境需要更换
            "商户id",
            "应用私钥",
            "json",
            "utf-8",
            "支付宝公钥",
            "RSA2"
        );

        val request = AlipayTradePagePayRequest()

        val bizContent = mapOf(
            "out_trade_no" to UUID.randomUUID().toString(),
            "total_amount" to "1",
            "subject" to "测试",
            "product_code" to "FAST_INSTANT_TRADE_PAY"
        )

        request.bizContent = objectMapper.writeValueAsString(bizContent)
        val response = client.pageExecute(request)
        println(response.body)
    }
}
```

:::::

### 引导用户进入支付页面

请求提交成功后,支付宝会返回一个包含自提交表单的`html`页面,我们需要将这个页面返回给用户,让用户跳转到这个页面进行支付.

::::: details 支付宝网关返回的页面示例

```html

<form name="punchout_form" method="post"
      action="https://openapi-sandbox.dl.alipaydev.com/gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=dWN5Vc%2B%2BoppYaXc6VI2KeDMJ0%2FgYZ%2FbP6vAFswnPu2cTV1AoM54yTZ8XoDxWpEXHRqWfKVXyIZ%2FreeNdINd6tx5e3t4zkRmCmufFM2Th5yOGfSyGUInj98lTGznv5Q85dpP%2BNblvNsjNA3CDfeuatO6IzD8YljdZH6tNaMSfLyYF4N4i3anMLqdEQ39GjGqHPCotH9uboQkWaTYfxU0%2Br%2FSj9K1uwDKVNEE03%2FhN1M5ODJf%2FsXvI9l%2FTNev2h8jaBMW%2FneKp380AxtV61AgDUp9EDaWRFumxPQfoWld0acr85Wgq3DoumDZCzZHNZuoVi66Ml7ZPOJxOfpQytWk6ww%3D%3D&version=1.0&app_id=9021000133696987&sign_type=RSA2&timestamp=2024-01-12+20%3A54%3A44&alipay_sdk=alipay-sdk-java-4.38.183.ALL&format=json">
    <input type="hidden" name="biz_content"
           value="{&quot;out_trade_no&quot;:&quot;ed885859-e660-46ff-a820-8c6501ee3d35&quot;,&quot;total_amount&quot;:&quot;1&quot;,&quot;subject&quot;:&quot;测试&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}">
    <input type="submit" value="立即支付" style="display:none">
</form>
<script>document.forms[0].submit();</script>
```

:::::

在前端把上面返回的`html`页面渲染出来

```ts
subscriptionService.pcWebPay(params.gateway, {
    amount: params.price,
    subject: params.plan,
}).then((res) => {
    const paymentWindow = window.open('', '_blank');
    if (paymentWindow) {
        paymentWindow.document.write(res.html!!);
    }
})
```

### 回调

用户在支付宝支付页面完成支付后,支付宝会将支付结果通知给商户应用,商户应用需要对支付结果进行验证、入库及展示等操作.

```kotlin
AlipayTradePagePayRequest request = new AlipayTradePagePayRequest();  
request.setNotifyUrl(alipayConfig.getNotifyUrl());  //支付成功由支付宝异步通知应用网关
request.setReturnUrl(alipayConfig.getReturnUrl()); //支付成功后向用户展示支付结果的页面的地址
```

关于`notifyUrl`和`returnUrl`的区别可以参考[支付宝官方文档](https://opendocs.alipay.com/open/270/105902)
和[poe-setNotifyUrl和setReturnUrl的区别](https://poe.com/chat/1xa79mxvm666ybiojri)

## 参考

* [SpringBoot 集成支付宝的各种应用场景__ddz的技术博客_51CTO博客](https://blog.51cto.com/loveddz/6150371)
* [SpringBoot集成支付宝支付 - 少走弯路就看这篇 - 掘金](https://juejin.cn/post/7244498421283881021#heading-4)

---
title: openai成本计算
comment: false
editLink: false
prev: false
next: false
---

## gpt4-turbo成本

| token类型 | token数量 | 价格(美元)	 | 价格(人民币) | 单价(美元) | 单价(人民币)  |
|---------|---------|---------|---------|--------|----------|
| 输出      | 100万    | 30      | 215     |        | 0.000215 |
| 输入      | 100万    | 10      | 72      |        | 0.000072 |

    1元=4629个tokens
	1元=4629*0.8=3703.2个汉字

------------

### 计算规则

1. **1美元等于多少token?**

$\text{tokens per USD} = \frac{1,000,000 \text{ tokens}}{30 \text{ USD}} = 33,333\text{ tokens}$

------------

2. **1人民币等于多少token?**

$\text{tokens per CNY} = \frac{\text{tokens per USD}}{7.2} = \frac{33,333.\overline{3}}{7.2} = 4629 \text{ tokens}$

------------

3. **1人民币相当于多少个汉字?**

$\text{汉字 per CNY} = \text{tokens per CNY} \times 0.8 = 4629.58 \times 0.8 \approx 3703.66\text{ 汉字}$

------------

4. **一篇`1万个汉字`的论文需要多少钱?**

$\text{Cost in CNY} = \frac{10,000 \text{ 汉字}}{3703.66 \text{ 汉字 per CNY}} = \frac{10,000}{3703.66} \approx 2.70
\text{ CNY}$

------------

6. **在保证`30%`收益的情况下每万(汉字)费用**

$\text{Total Cost with Profit} = \frac{10,000 \text{ 汉字}}{3703.66 \text{ 汉字 per CNY}} \times 1.30 =
\frac{10,000}{3703.66} \times 1.30 \approx 3.51 \text{ CNY}$

------------

7. **在保存`30%`收益的情况下,用户每支付1人民币,我该给他多少个token?**

$\text{tokens per CNY with profit} = \frac{\text{tokens per CNY}}{1.30} = \frac{4629.58}{1.30} \approx 3561.215 \text{
tokens}$

------------

### 价格表

#### 按固定30%利润计算

| 价格(CNY) | token数 | 汉字数    |
|---------|--------|--------|
| 1       | 3561   | 2920   |
| 10      | 35610  | 29200  |
| 20      | 71220  | 58400  |
| 50      | 178050 | 146000 |
| 100     | 356100 | 292000 |
| 200     | 712200 | 584000 |

$D = P \times (1 - r)$
## 计算折扣价

假设原价为$P$,打折后的价格为$D$,折扣率为$r$(**以小数表示,比如20%的折扣率为0.2**),则:

1. 从原价计算折扣价
$D = P \times (1 - r)$

比如原价`100`元,打`8`折,则打折后的价格为`100 * (1 - 0.2) = 80`元

2. 从折扣价计算原价
$P = \frac{D}{1 - r}$

比如打`8`折后的价格为`80`元,则原价为$\frac{80}{1 - 0.2} = 100$元

## 参考

* [定价方案命名](/Solutions/Standardization/%E5%AE%9A%E4%BB%B7%E5%91%BD%E5%90%8D%E6%96%B9%E6%A1%88.html)

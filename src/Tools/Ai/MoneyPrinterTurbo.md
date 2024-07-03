---
title: MoneyPrinterTurbo
comment: false
editLink: false
prev: false
next: false
---


## 简介

    提供视频的主题或关键词,全自动生成视频文案、素材、字幕、背景音乐等,然后合成一个高清的短视频.

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.4g49h9zyn4.webp)

## 安装

1. 需要先安装[conda](/Programming/Python/Conda.html)
2. 使用以下命令安装

```bash
git clone https://github.com/harry0703/MoneyPrinterTurbo.git
cd MoneyPrinterTurbo
conda create -n MoneyPrinterTurbo python=3.10
conda activate MoneyPrinterTurbo
D:\AppData\Conda\envs\MoneyPrinterTurbo\python.exe -m pip install --upgrade pip
pip install -r requirements.txt
```

3. 安装[ImageMagick](https://imagemagick.org/archive/binaries/ImageMagick-7.1.1-29-Q16-x64-static.exe)


## 配置

1. 根目录下的`config.example.toml`复制一份改成`config.toml`
2. 申请[Pexels密钥](https://www.pexels.com/zh-cn/api/)
3. 把申请好的密钥放在`config.toml`中的`pexels_api_key`字段中

```toml
# Pexels密钥可以免费创建但有速度限制,所以可以多注册几个账号
pexels_api_keys = ["key1","key2"]
```

4. 配置`llm`供应商、密钥以及代理等

```toml
# 供应商
llm_provider="openai"
# 密钥
openai_api_key = ""
# 代理
openai_base_url = "http://"
```

5. 配置`ImageMagick`的安装路径

```toml
# ImageMagick安装路径
imagemagick_path = "C:/Program Files/ImageMagick-7.1.1-Q16/magick.exe"
```

## 启动

1. 在项目根目录下运行以下命令

```bash
cd D:\Workspace\PycharmProjects\MoneyPrinterTurbo
conda activate MoneyPrinterTurbo
.\webui.bat
```

<VidStack   src="https://zmesc.oss-cn-hangzhou.aliyuncs.com/bandicam/bandicam%202024-03-29%2010-54-25-808.mp4" />

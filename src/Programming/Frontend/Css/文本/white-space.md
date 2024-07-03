---
title: white-space
comment: false
editLink: false
prev: false
next: false
---

## 简介

[white-space](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space#%E5%BD%A2%E5%BC%8F%E5%AE%9A%E4%B9%89)
属性用于控制==元素内文本的空白字符的处理方式和文本的换行行为==

这个属性干两件事:

1. **空白字符处理** - 决定是否合并文本中的空格和制表符
2. **换行处理** - 决定文本是否应在到达容器边界时换行

::: sandpack#react-ts justify-content 属性 [  theme=dark]

@file /App.tsx

```tsx 
import {useCallback, memo, useState} from "react";

export default () => {
    const [whiteSpace, setWhiteSpace] = useState("normal");
    const [tip, setTip] = useState("normal: 默认处理方式,合并空白字符,换行符被当作换行处理")
    return (
        <>
            <div style={{
                display: "flex",
                columnGap: "10px",
            }}>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                }}>
                    <button onClick={useCallback(() => {
                        setWhiteSpace("normal")
                        setTip("normal: 默认处理方式,合并空白字符,换行符被当作换行处理")
                    }, [])}>normal
                    </button>
                    
                        <button onClick={useCallback(() => {
                            setWhiteSpace("nowrap")
                            setTip("nowrap: 合并空白字符,但是不允许换行")
                        }, [])}>nowrap
                        </button>
                        
                        <button onClick={useCallback(() => {
                            setWhiteSpace("pre")
                            setTip("pre: 保留空白字符,但是不允许换行")
                        }, [])}>pre
                        </button>
                        
                            <button onClick={useCallback(() => {
                                setWhiteSpace("pre-wrap")
                                setTip("pre-wrap: 保留空白字符,允许换行")
                            }, [])}>pre-wrap
                            </button>
                            
                            <button onClick={useCallback(() => {
                                setWhiteSpace("pre-line")
                                setTip("pre-line: 合并空白字符,但是保留换行符")
                            }, [])}>pre-line
                            </button>
                            
                            <button onClick={useCallback(() => {
                                setWhiteSpace("break-spaces")
                                setTip("break-spaces: 保留空白字符,允许换行")
                            }, [])}>break-spaces
                            </button>
                            
                            
                            
                    
                </div>
                <div style={{
                    display: "flex",
                    width: "200px",
                    height: "200px",
                    backgroundColor: "lightblue",
                    whiteSpace
                }}>
                     But       ere she from the church-door stepped She smiled and told us why: 'It was a wicked woman's curse,' Quoth she, 'and what care I?' She smiled, and smiled, and passed it off Ere from the door she stept—
                </div>
            </div>
           <span style={{
            color: "green",
            }}>{tip}</span>
        </>
    );
}
```

:::


## 和[word-break](./word-break.md) 的区别

* `white-space`属性用于控制==元素内文本的空白字符的处理方式和文本的换行行为,注意是整个文本==
* `word-break`属性用来指定如何==对特定的单词进行换行处理==

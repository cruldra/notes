// 导出一个函数，该函数接收一个markdown-it实例作为参数
import MarkdownIt from "markdown-it";
import StateInline from "markdown-it/lib/rules_inline/state_inline";

/**
 * 用于表示Markdown文本的解析状态.
 *
 * 这个类包含了解析过程中需要的各种信息,例如当前的解析位置、源字符串、解析结果等
 */
type StateInlineExt  = StateInline & {

    /**
     * 源字符串，即需要解析的Markdown文本。
     */
    src:string
    /**
     * 当前的解析位置，是一个指向src的索引。
     */
    pos:number
    //解析的结束位置，通常是src.length。
    posMax:number
}
module.exports = function (md: MarkdownIt): void {
    // 在markdown-it的内联解析规则链中添加一个新的规则
    md.inline.ruler.before('emphasis', 'myPlugin', (state: StateInlineExt, silent: boolean) => {
        // 定义一些变量
        let start: number = state.pos,
            marker: number = state.src.charCodeAt(start);

        // 如果silent参数为真，函数就会返回false
        if (silent) return false;
        // 如果当前字符不是冒号（Unicode编码为0x3A），函数就会返回false
        if (marker !== 0x3A) return false;

        // 检查从当前位置开始的源字符串是否以:::开始
        const match: RegExpMatchArray | null = state.src.slice(start).match(/^:::/);
        if (!match) return false;

        // 如果不在silent模式下，函数就会在解析结果中添加一个h1标签
        if (!silent) {
            state.push('h1_open', 'h1', 1);
            const textToken = state.push('text', '', 0);
            textToken.content= 'Hello World';
            state.push('h1_close', 'h1', -1);
        }

        // 更新当前的解析位置，并返回true，表示规则已经成功应用
        state.pos += match[0].length;
        return true;
    });
}

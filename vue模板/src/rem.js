// 基准大小
const baseSize = 75
// 设置 rem 函数
function setRem () {
    // 设置页面根节点字体大小 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    let baseSS = baseSize * Math.min(document.documentElement.clientWidth / 750, 2)
    window.document.documentElement.style.fontSize = (baseSS < 100 ? baseSS : 100) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = () => setRem()

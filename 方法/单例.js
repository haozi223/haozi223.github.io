module.exports = function A (name) {
    // 如果已存在对应的实例
    if (typeof A.instance === 'object')
        return A.instance
    else {
        //否则正常创建实例
        this.name = name
        //此处可用来挂方法，比如this.func=function,name可传进方法，发布订阅也可

        // 缓存
        A.instance = this
        return A.instance
    }

}
// var a1 = new A
// var a2= new A
// console.log(a1 === a2)//true
//消除单例，this指向的单例为null就好，或者A.instance=null

//作用，避免重复实例对象，减少不必要内存消耗,提高运行效率
//缺点，扩展困难
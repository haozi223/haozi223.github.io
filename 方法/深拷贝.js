module.exports = function copy (obj) {
    //es3兼容性方法，循环子项拷贝
    var ret, b;
    if ((b = (obj instanceof Array)) || obj instanceof Object) {
        ret = b ? [] : {};
        for (var k in obj) {
            if ((obj[k] instanceof Array) || (obj[k] instanceof Object)) ret[k] = copy(obj[k])
            else ret[k] = obj[k]
        }
    }
    return ret;
}

/*
常用深拷贝：JSON.stringify(Object)转换成字符串，JSON.parse(String)转换成对象

引用深拷贝：A = Object.create(Object);A的原型链挂有被复制的对象，对A的使用将直接使用被复制对象的值，对A的修改不会修改挂在其原型链上的对象。
           当然，被复制的对象被修改，如果A没有对使用的值做过修改，A的使用值也会根据其一起修改，属于子改父不变；父改，子有变更，子不变，否则会变
*/
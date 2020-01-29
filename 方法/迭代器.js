module.exports = function (arrfunc) {
    //arrfunc是个数组，假设其是个方法组，按照顺序依次执行，最大区别为这个可以控制，类似安装程序
    //arrfunc是数据的话，可把next和previous调整成子项数据输出
    var index = 0;
    return {
        hasnext () {
            return index < arrfunc.length
        },
        hasprevious () {
            return index > 1
        },
        next () {
            if (this.hasnext()) {
                arrfunc[index++]();
            }
        },
        previous () {
            if (this.hasprevious()) {
                arrfunc[--index - 1]();
            }
        },
        reset () {
            index = 0
        },
        examine () {
            return index
        }
    }
}
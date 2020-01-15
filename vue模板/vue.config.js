module.exports = {
    publicPath: './',//修改HTML内文件路径，由'/'变为'./'
    assetsDir: 'matter',//相对于index.html的引用文件的目录
    devServer: {
        overlay: {     //发生错误时浏览器输出错误或警告
            warnings: true,
            errors: true
        },
        proxy: {
            '/elm': {    // search为转发路径
                target: 'http://localhost:5500',  // 目标地址
                ws: true, // 是否代理websockets
                changeOrigin: true   // 设置同源  默认false，是否需要改变原始主机头为目标URL,               
            }
        }
    },
    lintOnSave: true,//保存时是否启用eslint检查书写，默认true
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({//这里是配置项，详见官方文档
                        rootValue: 37.5, // 换算的基数
                        selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*'],
                    }),
                ]
            }
        }
    }
}
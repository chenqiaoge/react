const path = require('path');
const webpack = require('webpack');
// 插件都是一个类，所以命名时尽量用大写开头
const HTMLWebpackPlugin = require('html-webpack-plugin');//打包html模板用
// 拆分css样式的插件，（默认是一style内联方式引入的，这可以变为link外联方式引入，也可以拆为多个css）
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// 打包前清空dists目录先
let CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    
    output: {
        publicPath:'/',
        filename: 'bundle.js', //打包后文件的名称
        path: path.resolve('dists') //打包后文件位置的目录，绝对路径
    },
    resolve:{
        // 设置别名
        alias:{
            pages:path.join(__dirname,'src/pages')
        },
        // 省略后缀
        extensions:['.js','.jsx','.json','.css','.scss','.less']
    },
    module: {
        rules: [{
                test: /\.css$/, //解析css
                use:ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback:'style-loader',
                    use:['css-loader','postcss-loader']
                })
                // use: ['style-loader', 'css-loader', 'postcss-loader'] //从右向左解析
            },
            {
                test: /\.scss$/,
                use:ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback:'style-loader',
                    use:['css-loader','postcss-loader', 'sass-loader']
                })
                // use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                        outputPath: 'images/' // 图片打包后存放的目录
                    }
                }]
            },
            {
                test: /\.html?$/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                include: /src/, //只转化src目录下的js
                exclude: /node_modules/ //排除掉node_modules,优化打包速度

            }
        ]
    }, //处理对应模块
    plugins: [
        // 通过new一下这个类来使用插件
        new HTMLWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            template: './src/index.html',
            hash: true, //会在打包好的bundle.js后面加上hash串
        }),
        new webpack.HotModuleReplacementPlugin(), //热更新(代码改变时自动编译)
        // 拆分后后会把css文件放到dist目录下的styles.css
        new ExtractTextWebpackPlugin('styles.css'),
        new CleanWebpackPlugin('dists')
    ], //对应插件
    devServer: {
        port: 3001,
        // open: true,
        hot: true,  //开启热更新，还需要配置其他的才可以
        overlay: true,
        historyApiFallback: true
    }, //开发服务器配置
    mode: 'development',
    // ？？？没看出来生效
    devtool:'inline-source-map'
}
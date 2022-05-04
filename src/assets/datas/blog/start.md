## this is my first MD SPACE

package.json
```js
  "scripts": {
  	...//
    "start": "webpack-dev-server --config ./build/webpack.dev.js",
    "build": "webpack --config ./build/webpack.prod.js",
  }
```

webpack.dev.js
```js
const path = require('path');
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GeneraterAssetPlugin = require('generate-asset-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',      // 模式，表示dev环境
    entry: './src/index.js',  // 入口文件
    // module: {},               // 让 webpack 能够去处理那些非 JavaScript 文件
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                // 处理html文件中的img图片（负责引入img，从而能被url-loader进行处理）
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    esModule: false,
                }
            },
            {
                // 基于正则匹配处理哪些文件
                test: /\.(css)$/i,
                // 控制使用哪个加载器loader（有顺序的：数组从右到左执行）
                use: [
                    "style-loader", // 把编译好的css插入到页面的HEAD中（内嵌式样式）
                    "css-loader" // 编译@import/url()这种语法的
                ]
            }
        ]
    },
    plugins: [ // 插件
        new HtmlWebpackPlugin({   // 向dist文件中自动添加模版html
            template: 'src/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true, // 干掉空格
                removeComments: true, // 干掉注释
                removeAttributeQuotes: true, // 干掉双引号
                removeEmptyAttributes: true // 干掉空属性
            }
        }),
        // new CleanWebpackPlugin(), // 打包后先清除dist文件，先于HtmlWebpackPlugin运行
        new ProgressBarPlugin({
            format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('./src/data'),// 打包的静态资源目录地址
                    to: 'src/data' // 打包到dist下面的static
                },
                {
                    from: path.resolve('./buildmin'),// 打包的静态资源目录地址
                    to: 'buildmin' // 打包到dist下面的static
                },
                {
                    from: path.resolve('./script'),// 打包的静态资源目录地址
                    to: 'script' // 打包到dist下面的static
                },
                {
                    from: path.resolve('./src/img'),// 打包的静态资源目录地址
                    to: 'src/img' // 打包到dist下面的static
                },
                {
                    from: path.resolve('./test'),// 打包的静态资源目录地址
                    to: 'test' // 打包到dist下面的static
                },
            ],
        })
    ],
    output: {
        filename: 'bundle.js',  // 打包后文件名称
        path: path.resolve(__dirname, '../dist'), // 打包后文件夹存放路径
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        compress: true,
        host: "test.zhuxingyun.com",
        port: 9000,
        historyApiFallback: true,
    },
}
```
webpack.prod.js
```js
const path = require('path');
const chalk = require("chalk");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",  // 只要在生产模式下， 代码就会自动压缩，自动启用 tree shaking
    devtool: "cheap-module-source-map",
    entry: {                  // 入口文件
        main: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                // 处理html文件中的img图片（负责引入img，从而能被url-loader进行处理）
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    esModule: false,
                }
            },
            {
                // 基于正则匹配处理哪些文件
                test: /\.(css)$/i,
                // 控制使用哪个加载器loader（有顺序的：数组从右到左执行）
                use: [
                    "style-loader", // 把编译好的css插入到页面的HEAD中（内嵌式样式）
                    "css-loader" // 编译@import/url()这种语法的
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true, // 干掉空格
                removeComments: true, // 干掉注释
                removeAttributeQuotes: true, // 干掉双引号
                removeEmptyAttributes: true // 干掉空属性
            }
        }),
        new CleanWebpackPlugin(), // 打包后先清除dist文件，先于HtmlWebpackPlugin运行
        new ProgressBarPlugin({
            format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('./src/data'),// 打包的静态资源目录地址
                    to: 'src/data' // 打包到dist下面的static
                },
                {
                    from: path.resolve('./buildmin'),// 打包的静态资源目录地址
                    to: 'buildmin' // 打包到dist下面的static
                },
                {
                    from: path.resolve('./script'),// 打包的静态资源目录地址
                    to: 'script' // 打包到dist下面的static
                },
                {
                    from: path.resolve('./src/img'),// 打包的静态资源目录地址
                    to: 'src/img' // 打包到dist下面的static
                },
            ],
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    }
}
```
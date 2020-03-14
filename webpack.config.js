const path = require('path'); // подключаем path к конфигу вебпак
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Подключили к проекту плагин
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = { // module.exports — это синтаксис экспорта в Node.js
    // указали первое место куда заглянет webpack — файл index.js в папке src
    entry: { main: './src/jscode/index.js',
             about:'./src/jscode/about.js',
             analysis: './src/jscode/analysis.js'
    }, 
    output: { // указали в какой файл будет собирться весь js и дали ему имя
        path: path.resolve(__dirname, 'dist'), // переписали точку выхода, используя утилиту path
        filename: 'js/[name].[chunkhash].js',
        publicPath: isDev ? '/' : '/diploma/',
    },
    module: {
        rules: [{ // тут описываются правила
                test: /\.js$/, // регулярное выражение, которое ищет все js файлы
                use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
                exclude: /node_modules/ // исключает папку node_modules
            },
            {
                test: /\.css$/, // применять это правило только к CSS-файлам
                use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 'css-loader', 'postcss-loader'] // к этим файлам нужно применить пакеты, которые мы уже установили
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                     'file-loader?name=images/[name].[ext]', // указали папку, куда складывать изображения
                     {
                         loader: 'image-webpack-loader'
                     },
                    ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: `file-loader?name=fonts/[name].[ext]`
            }
        ]
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            // Означает, что:
            inject: false, // стили НЕ нужно прописывать внутри тегов
            hash: true, // для страницы нужно считать хеш
            template: './src/index.html', // откуда брать образец для сравнения с текущим видом проекта
            filename: 'index.html' // имя выходного файла, то есть того, что окажется в папке dist после сборки
        }),
        new HtmlWebpackPlugin({
            // Означает, что:
            inject: false, // стили НЕ нужно прописывать внутри тегов
            hash: true, // для страницы нужно считать хеш
            template: './src/about.html', // откуда брать образец для сравнения с текущим видом проекта
            filename: 'about.html' // имя выходного файла, то есть того, что окажется в папке dist после сборки
        }),
        new HtmlWebpackPlugin({
            // Означает, что:
            inject: false, // стили НЕ нужно прописывать внутри тегов
            hash: true, // для страницы нужно считать хеш
            template: './src/analysis.html', // откуда брать образец для сравнения с текущим видом проекта
            filename: 'analysis.html' // имя выходного файла, то есть того, что окажется в папке dist после сборки
        }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        })    
    ]    
}
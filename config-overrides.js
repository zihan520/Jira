const path = require("path");
const {
    override,
    fixBabelImports,
    addWebpackAlias
} = require('customize-cra');
const version = new Date().getTime() + Math.random() * 100
const isEnvProduction = process.env.NODE_ENV === 'production'
const alter_config= ()=>(config, env)=>{
    const oneOf_loc= config.module.rules.findIndex(n=>n.oneOf)
    config.module.rules[oneOf_loc].oneOf=[    //例如要增加处理less的配置
        {
            test: /\.less$/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                    },
                },
                {
                    loader: 'less-loader'
                }
            ],
        },
        ...config.module.rules[oneOf_loc].oneOf
    ]
    config.output = {
        path: path.resolve(__dirname, 'build'),
    　　// filename应该比较好理解，就是对应于entry里面生成出来的文件名
    　　filename: 'bundle.js',

    　　// 为了做代码的异步加载,所有文件都以/代替根目录转换，即输入/就会自动转为根目录
    　　// “publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值,解决Link标签里的to用绝对路径问题
    　　publicPath:'/',
    　　// chunkname我的理解是未被列在entry中，却又需要被打包出来的文件命名配置。
    　　// 在按需加载（异步）模块的时候,CommonJS的方式异步加载模块：require.ensure() API，

    　　//异步加载的模块是要以文件形式加载哦，所以这时生成的文件名是以chunkname配置的，生成出的文件名，同时解决缓存问题
    　　chunkFilename: 'static/js/[name]_[chunkhash:8]_chunk.'+version+'.js'
      }
    console.log(config)
    return config;
}

module.exports= override(
    alter_config(),   //将自定义配置组合进来
    addWebpackAlias({  //增加路径别名的处理
        '@': path.resolve('./src')
    }),
    fixBabelImports('import', {  //antd UI组件按需加载的处理
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    })
)
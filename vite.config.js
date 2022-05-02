import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
const mdPlugin = require('vite-plugin-markdown')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdPlugin.plugin({
      mode: ['html']
    })
  ],
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      "@": path.resolve(__dirname, "src"),
      "@v": path.resolve(__dirname, "src/views"),
    }
  },
  server: {
    port: 8001, // 本地服务端口
    // host: "test.zhuxingyun.com",
    open: true, //在服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径名。
    strictPort: true, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    proxy: { // 代理 
      // 字符串简写写法
      // '/foo': 'http://test.zhuxingyun.com/',
      // 选项写法
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      // http://test.zhuxingyun.com:8000/team/666/design/3u9ufduf?tid=7478327e2f9440ec9ec0988698e8fc2a
      // http://test.zhuxingyun.com:8000/team/666?tid=7478327e2f9440ec9ec0988698e8fc2a
      // 正则表达式写法
      // '/team/': {
      //   target: 'http://test.zhuxingyun.com:8000',
      //   changeOrigin: true,
      //   rewrite: (path) => {
      //     let res = ''
      //     const pathArr = path.split('/');
      //     const len = pathArr.length;
      //     function onHasDesgin() {
      //       for (let i = 4; i < len; i++) {
      //         if (pathArr[i]) {
      //           res += '/' + pathArr[i];
      //         }
      //       }
      //       return res
      //     }
      //     function unoHasDesgin() {
      //       for (let i = 2; i < len; i++) {
      //         if (pathArr[i]) {
      //           res += '/' + pathArr[i];
      //         }
      //       }
      //       return res
      //     }
      //     const methodMap = {
      //       true: onHasDesgin,
      //       false: unoHasDesgin
      //     };
      //     const bool = path.indexOf('/design/') > -1;
      //     return methodMap[bool]();
      //   }
      // }
    },
    // 打包配置
    build: {
      target: 'modules',
      outDir: 'dist', //指定输出路径
      assetsDir: 'assets', // 指定生成静态资源的存放路径
      minify: 'terser', // 混淆器，terser构建后文件体积更小
      chunkSizeWarningLimit: 500000
    }
  }
})

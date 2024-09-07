import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts', // 入口文件
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES Module 格式
      sourcemap: true
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs', // CommonJS 格式
      sourcemap: true
    }
  ],
  plugins: [
    resolve(), // 使 Rollup 能够查找外部模块
    commonjs(), // 将 CommonJS 模块转换为 ES6
    typescript({ useTsconfigDeclarationDir: true }) // TypeScript 插件
  ],
  external: [] // 如果有外部依赖，可以在这里指定
};

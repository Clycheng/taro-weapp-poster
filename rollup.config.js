import RollupBabel from '@rollup/plugin-babel';

// babel配置
const babelOptions = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  babelHelpers: 'bundled',
  extensions: ['.js', '.jsx'],
  exclude: '**/node_modules/**',
};

export default {
  // 核心选项
  input: './index.js',
  plugins: [RollupBabel(babelOptions)],
  output: {
    file: './dist/index.js', // 必须
  },
};

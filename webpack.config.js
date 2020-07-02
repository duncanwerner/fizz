const path = require('path');
const webpack = require('webpack');
const package = require('./package.json');

/*
let mode = 'development';
if (process.env.NODE_ENV === 'production'){
  console.info('production build');
  mode = 'production';
}
*/

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'fizz.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // new webpack.BannerPlugin({
    //  banner: `v${package.version}. Copyright 2020 Structured Data, LLC. All rights reserved. CC-ND: https://treb.app/license`,
    // }),
    {
      apply: (compiler) => {
        compiler.hooks.beforeCompile.tap('BeforeCompilePlugin', () => {
          console.info('\nstarting build...')
        });
        /*
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
          PostBuild();
        });
        */
      }
    }
  ]
};

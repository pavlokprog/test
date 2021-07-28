// =============================
// Imports
// =============================

// External dependencies
import webpack from 'webpack';
import path from 'path';
import appRootDir from 'app-root-dir';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// Env
import './src/config/private/webpack-env';

// Config
import envConfig from './src/config/private/environment';
import projConfig from './src/config/private/project';
import { SourceMap } from 'module';

// =============================
// Config
// =============================

const isProd = process.env.NODE_ENV === 'production';

export default {
  entry: [
    'react-hot-loader/patch',
    path.resolve(appRootDir.get(), projConfig.clientBundle.srcEntryFile),
  ],
  output: {
    path: path.resolve(appRootDir.get(), projConfig.clientBundle.outputPath),
    filename: 'bundle.js',
    publicPath: isProd
      ? projConfig.clientBundle.webPath
      : `http://${envConfig.host}:${envConfig.clientDevServerPort}${
        projConfig.clientBundle.webPath
      }`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!asn1\.js)/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: [['latest', { es2015: { modules: false } }], 'react'],
          plugins: [
            'transform-object-rest-spread',
            'transform-es2015-destructuring',
            'transform-class-properties',
          ],
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: new RegExp(`\\.(${projConfig.bundleAssetTypes.join('|')})$`, 'i'),
        loader: 'file-loader',
        query: {
          publicPath: isProd
            ? projConfig.clientBundle.webPath
            : `http://${envConfig.host}:${envConfig.clientDevServerPort}${
              projConfig.clientBundle.webPath
            }`,
          emitFile: true,
        },
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
        include: path.resolve(appRootDir.get(), 'src/shared/assets/images'),
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        exclude: path.resolve(appRootDir.get(), 'src/shared/assets/images'),
        query: {
          publicPath: isProd
            ? projConfig.clientBundle.webPath
            : `http://${envConfig.host}:${envConfig.clientDevServerPort}${
              projConfig.clientBundle.webPath
            }`,
          emitFile: true,
        },
      },
      {
        test: /\.csv$/,
        loader: 'file-loader',
        include: path.resolve(appRootDir.get(), 'src/shared/assets/files'),
        query: {
          publicPath: isProd
            ? projConfig.clientBundle.webPath
            : `http://${envConfig.host}:${envConfig.clientDevServerPort}${
              projConfig.clientBundle.webPath
            }`,
          emitFile: true,
          name: '[name].[ext]',
        },
      },
    ],
  },
  devtool: 'source-map',
  // Files to be resolved when imported
  resolve: {
    extensions: ['.js'],
  },
  node: {
    fs: 'empty',
    dns: 'mock',
    net: 'mock',
  },
  devServer: {
    port: envConfig.clientDevServerPort,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: false,
    }),

  ],
};

b1

{
    SourceMap,
    lskdf,
    skdfn,
}


import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
// @ts-ignore
import * as rhTransformer from 'react-hot-ts/lib/transformer';
import { Configuration } from 'webpack';
import { Configuration as DevConfiguration } from 'webpack-dev-server';

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const configuration: Configuration & DevConfiguration = {
  mode,
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  devtool: mode === 'development' ? 'source-map' : undefined,
  entry: {
    app: [path.resolve(__dirname, './src/index.tsx')],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/i,
        use: {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: {
              before: [rhTransformer({})],
            },
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

export default configuration;

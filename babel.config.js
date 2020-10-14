// eslint-disable-next-line @typescript-eslint/no-var-requires
const isCI = require('is-ci');

const isProd = process.env.NODE_ENV === 'production';
const isLocalDev = !isProd && !isCI && !!process.env.LOCAL_DEV;

const enableIE11 =
  process.env.ENABLE_IE11 || process.env.NODE_ENV === 'production';

const defaultTargets = [
  '>5%',
  'last 2 Chrome versions',
  'last 2 ChromeAndroid versions',
  'last 2 Edge versions',
  'last 2 Firefox versions',
  'last 2 iOS versions',
];

module.exports = {
  compact: false, // No need to compact; Terser will do that
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        targets: enableIE11
          ? [...defaultTargets, 'IE >= 11']
          : isLocalDev
          ? ['last 2 Chrome versions']
          : defaultTargets,
        exclude: enableIE11
          ? []
          : ['transform-for-of', 'transform-async-to-generator'],
      },
    ],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    '@babel/plugin-transform-react-display-name',
    '@babel/plugin-transform-react-jsx',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    ['import', { libraryName: 'antd', style: true }].concat(
      isLocalDev
        ? [require.resolve('react-refresh/babel')]
        : ['babel-plugin-lodash']
    ),
  ],
  inputSourceMap: true,
};

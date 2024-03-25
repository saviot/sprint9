module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 11'],
        },
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
};

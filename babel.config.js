module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@Entity': './src/Entity',
        '@controllers': './src/controllers',
        '@views': './src/views',
        '@stream': './src/stream',
        '@routes': './src/routes',
        '@upload': './src/upload',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}

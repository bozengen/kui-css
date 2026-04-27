const isProduction = process.env.NODE_ENV === 'production'

export default {
  plugins: [
    (await import('postcss-import')).default,
    (await import('autoprefixer')).default,
    ...(isProduction ? [(await import('cssnano')).default({ preset: 'default' })] : []),
  ]
}

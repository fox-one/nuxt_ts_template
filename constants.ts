export const isProduct = process.env.APP_ENV === 'prod'

export const HOST = isProduct
  ? 'https://api.fox.one/api/v2'
  : 'https://dev.fox.one/api/v2'

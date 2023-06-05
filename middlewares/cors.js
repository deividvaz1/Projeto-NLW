const corsMiddleware = (req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://projeto-nlw-five.vercel.app/',
  )
  next()
}

export default corsMiddleware

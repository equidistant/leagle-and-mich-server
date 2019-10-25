import express from 'express'
import compression from 'compression'
import path from 'path'
import dotenv from 'dotenv'
import imageRatio from './image-ratio'
import imageSize from './image-size'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

const app = express()

app.use(compression())
app.use('/ratios', imageRatio)
app.use('/sizes', imageSize)
app.use('/images', express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT, () => console.log(`HTTP server running on port ${process.env.PORT}`))

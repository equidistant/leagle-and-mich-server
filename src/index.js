import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

const app = express()

app.use('/image', express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT, () => console.log(`HTTP server running on port ${process.env.PORT}`))

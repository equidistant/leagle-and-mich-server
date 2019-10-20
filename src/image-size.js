import express from 'express'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import imageSize from 'image-size'

const readDir = promisify(fs.readdir)
const sizeOf = promisify(imageSize)
const router = express.Router()

router.get('/:folderName', async (req, res, next) => {
  const galleryPath = path.join(__dirname, `public/${req.params.folderName}`)
  const images = await readDir(galleryPath)
  const ratios = []
  for (let i = 0; i < images.length; i++) {
    const { width, height } = await sizeOf(`${galleryPath}/img${i}.jpg`)
    ratios.push(width / height)
  }
  res.setHeader('Access-Control-Allow-Origin', '*')
  return res.status(200).send(ratios)
})

export default router

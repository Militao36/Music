import { Request, Response } from 'express'
import fs from 'fs'
import { promisify } from 'util'
import { resolve } from 'path'

const getStat = promisify(fs.stat)

const streamAudio = async (req: Request, res: Response) => {
  const filePath = resolve(__dirname, 'music', '604e1ba87b09a252ce2b5f8d14b8e393')
  const stat = await getStat(filePath)

  // informações sobre o tipo do conteúdo e o tamanho do arquivo
  res.writeHead(200, {
    'Content-Type': 'audio/mp3',
    'Content-Length': stat.size,
    'Accept-Ranges': 'bytes'
  })

  const stream = fs.createReadStream(filePath)

  // só exibe quando terminar de enviar tudo
  stream.on('end', () => console.log('acabou'))

  // faz streaming do audio
  return stream.pipe(res)
}

export default streamAudio

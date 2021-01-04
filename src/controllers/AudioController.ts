import AudioStream from '@stream/core'
import { Request, Response } from 'express'

export class AudioController {
  stream(req: Request, res: Response) {
    return AudioStream(req, res)
  }
}

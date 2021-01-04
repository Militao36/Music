import { Track } from '@models/Track'
import AudioStream from '@stream/core'
import { upload } from '@upload/core'
import { Request, Response } from 'express'

export class TrackController {
  stream(req: Request, res: Response) {
    return AudioStream(req, res)
  }

  upload(req: Request, res: Response) {
    try {
      const track = new Track(req.body)
      return res.json(track)
    } catch (error) {

    }
  }
}

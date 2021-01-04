import { Track } from '@models/Track'
import AudioStream from '@stream/core'
import { Request, Response } from 'express'

export class TrackController {
  view(req: Request, res: Response) {
    return res.render('index')
  }

  stream(req: Request, res: Response) {
    try {
      const trackId = req.params.id
      return AudioStream(req, res, trackId)
    } catch (error) {
      return res.status(500).json({
        error: 'SERVE_ERROR'
      })
    }
  }

  upload(req: Request, res: Response) {
    try {
      const track = new Track(req.body)
      track.trackId = req.file.filename
      return res.json(track)
    } catch (error) {
      return res.status(500).json({
        error: 'SERVE_ERROR'
      })
    }
  }
}

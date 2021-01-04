import { TrackController } from '@controllers/TrackController'
import { upload } from '@upload/core'
import { Router } from 'express'
const router = Router()

const Audio = new TrackController()

router.get('/stream', Audio.stream)
router.post('/upload', upload.single('track'), Audio.upload)

export { router }

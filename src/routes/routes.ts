import { AudioController } from '@controllers/AudioController'
import { Router } from 'express'
const router = Router()

const Audio = new AudioController()
router.get('/stream', Audio.stream)

export { router }

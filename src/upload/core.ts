import multer from 'multer'
import { resolve } from 'path'

const upload = multer({
    dest: (resolve(__dirname, '..', 'stream', 'music'))
})

export { upload }

import express from 'express'

import mocks from '../../mocks'
import { auth } from '../middlewares'
import { send as wSend } from '../socket'

const router = express.Router()

router
    .get('/', (req, res, next) => {
        // DISABLED
        // wSend(req.method, req.baseUrl, mocks)
        res.status(200)
            .json(mocks)
    })
    .post('/', auth, (req, res, next) => {
        console.log('Body received', req.body)
        res.status(201)
            .json(req.body)
    })

router.get('/:singer', (req, res, next) => {
    const songsBySinger = mocks
        .filter(item => item.singer.toLowerCase() === req.params.singer.toLowerCase())
    // DISABLED
    // wSend(req.method, req.baseUrl, songsBySinger)

    res.status(200)
        .json(songsBySinger )
})

export default router
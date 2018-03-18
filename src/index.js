import express from 'express'

import config from './config'
import router from './router'
import { connect } from './socket'

let _server

const server = {
    start() {
        const app = express()

        config(app)
        router(app)

        _server = app.listen('9000', () => {
            // DISABLED - connect to websocket
            // connect()

            //
            const address = _server.address()
            const host = address.address === '::'
                ? 'localhost'
                : address
            const port = app.locals.config.PORT

            if (process.env.NODE_ENV !== 'test') {
                console.log(`Server listening http://${host}:${port}`)
            }
        })

        return _server

    },

    close() {
        _server.close()
    }
}

export default server

if (!module.parent) {
    server.start()
}
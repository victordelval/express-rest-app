import request from 'supertest'

import server from '../src'
import mocks from '../mocks'

describe('Music', () => {

    let instance

    beforeEach(() => {
        instance = server.start()
    })

    afterEach(() => {
        server.close()
        instance = null
    })

    describe('/GET /music', () => {
        it('it should GET all', () => {
            request(instance)
                .get('/music')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    if (err) throw err
                })
        })
    })

    describe('/GET /music/Extremoduro', () => {
        const expected = mocks.filter(item =>
            item.singer.toLowerCase() === 'Extremoduro'.toLowerCase()
        )

        it('it should GET filter', () => {
            request(instance)
                .get('/music/Extremoduro')
                .expect('Content-Type', /json/)
                .expect(200, expected)
                .end((err, res) => {
                    if (err) throw err
                })
        })
    })

    // Auth route
    describe('/POST /music', () => {
        it('it should POST', () => {
            const body = {
                song: 'Necesito droga y amor',
                singer: 'Extremoduro',
                album: 'Somos unos animales'
            }

            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.kdm7AfAcrf5KDIg4E6D8TOYW-_JshJeDo4oYqxHJ9aU'

            request(instance)
                .post('/music')
                .set('AUthorization', `JWT ${token}`)
                .send(body)
                .expect(201, body)
                .end((err, res) => {
                    if (err) throw err
                })
        })
    })

})
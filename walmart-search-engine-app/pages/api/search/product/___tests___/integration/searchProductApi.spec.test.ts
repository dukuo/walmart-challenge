import * as http from 'http'
import fetch from 'isomorphic-unfetch'
import listen from 'test-listen'
import { setupWorker, rest } from 'msw'
import { apiResolver } from 'next-server/dist/server/api-utils'

import { nakedHandler as handler } from '../../[search]'

describe('Integration tests for api/search/product endpoint', () => {
    let server: any
    let url: any

    beforeAll(async done => {
        server = http.createServer((req: any, res: any) =>
            apiResolver(req, res, undefined, handler))

        url = await listen(server)

        done()
    })

    afterAll(done => {
        server.close(done)
    })

    it('should respond 200 OK', async () => {
        expect.assertions(1)

        let response = await fetch(url)
        expect(response.status).toBe(200)

        return server.close()
    })
})

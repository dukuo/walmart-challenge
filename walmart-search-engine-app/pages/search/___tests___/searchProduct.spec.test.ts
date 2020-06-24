import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
    render,
    fireEvent,
    waitFor,
    screen
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AppBar from '../../../components/AppBar'
import { API_SEARCH_PRODUCT } from '../../../constants/router'

const server = setupServer(
    rest.get(API_SEARCH_PRODUCT, (req, res, ctx) => {
        return res(ctx.json([]))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe('Search Page unit testing', () => {

    
    
    it.todo('should render')
    it.todo('should contain <AppBar />')
})

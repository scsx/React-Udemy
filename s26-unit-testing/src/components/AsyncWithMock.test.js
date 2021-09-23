import { render, screen } from '@testing-library/react'
import AsyncWithMock from './AsyncWithMock'

describe('AsyncWithMock component', () => {
    test('renders posts if request is OK', async () => {
        // We're replacing the browser's fetch function with our own mock function
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return [{ id: 'p1', title: 'A post example' }]
            }
        })
        render(<AsyncWithMock />)

        const listEls = await screen.findAllByRole('listitem')
        expect(listEls).not.toHaveLength(0)
    })
})

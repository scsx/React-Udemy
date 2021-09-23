import { render, screen } from '@testing-library/react'
import Async from './Async'

describe('Async component', () => {
    test('renders posts if request is OK', async () => {
        render(<Async />)

        const listEls = await screen.findAllByRole('listitem')
        expect(listEls).not.toHaveLength(0)
    })
})

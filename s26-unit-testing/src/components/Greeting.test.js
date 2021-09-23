import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Greeting component', () => {
    test('renders Hello World', () => {
        render(<Greeting />)
        const helloWorldElement = screen.getByText('Hello World!')
        expect(helloWorldElement).toBeInTheDocument()
    })

    test('renders "unchanged" if button was NOT clicked', () => {
        render(<Greeting />)
        const pEl = screen.getByText('unchanged', { exact: false })
        expect(pEl).toBeInTheDocument()
    })

    test('renders "changed" if button was clicked', () => {
        // Arrange
        render(<Greeting />)
        // Act
        const btnEl = screen.getByRole('button')
        userEvent.click(btnEl)
        // Assert
        const pEl = screen.getByText('changed', { exact: false })
        expect(pEl).toBeInTheDocument()
        
        const pElGone = screen.queryByTestId('p1')
        expect(pElGone).not.toBeInTheDocument()
        expect(pElGone).toBeNull()
    })
})

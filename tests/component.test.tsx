import { render, screen } from '@testing-library/react'

const Button = () => <button data-testid="btn">Example button</button>

describe('Button', () => {
  it('should render button', () => {
    render(<Button />)

    const btn = screen.getByTestId('btn')

    expect(btn).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>', () => {
  it('should render the reading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /esqueleto/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('shoud render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})

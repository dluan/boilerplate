import { render } from '@testing-library/react'

import Title from '.'

describe('<Title/>', () => {
  it('should render the reading', () => {
    const { container } = render(<Title />)

    expect(container.firstChild).toMatchSnapshot()
  })
})

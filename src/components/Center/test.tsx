import { render } from '@testing-library/react'

import Center from '.'

describe('<Center/>', () => {
  it('should render the reading', () => {
    const { container } = render(<Center />)

    expect(container.firstChild).toMatchSnapshot()
  })
})

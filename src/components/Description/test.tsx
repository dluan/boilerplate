import { render } from '@testing-library/react'

import Description from '.'

describe('<Description/>', () => {
  it('should render the reading', () => {
    const { container } = render(<Description />)

    expect(container.firstChild).toMatchSnapshot()
  })
})

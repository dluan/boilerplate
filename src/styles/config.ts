import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      background: '#06092b'
    },
    fontSizes: {
      normal: '1.6rem',
      h1: '4.5rem',
      h2: '3.5rem'
    }
  }
})

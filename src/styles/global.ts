import { globalCss } from './config'

export const globalStyles = globalCss({
  ':root': {
    fontSize: '10px'
  },
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box'
  },
  'hmtl, body': {
    fontFamily: 'Arial',
    color: 'white'
  },
  body: {
    background: '$background',
    color: 'white'
  }
})

import { globalCss } from './config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box'
  },
  'hmtl, body': {
    fontFamily: 'Arial',
    color: 'white',
    height: '100vh'
  },
  body: {
    background: '$background',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  }
})

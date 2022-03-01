import type * as Stitches from '@stitches/react'
import { styled } from 'styles/config'

const StyledTitle = styled('h2', {
  fontSize: '$h2',
  variants: {
    align: {
      center: {
        textAlign: 'center',
        width: '100%'
      }
    }
  }
})

type TitleProps = Stitches.VariantProps<typeof StyledTitle> & {
  children: React.ReactNode
}

const Title = ({ children, ...props }: TitleProps) => (
  <StyledTitle {...props}>{children}</StyledTitle>
)

export default Title

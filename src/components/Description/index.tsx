import type * as Stitches from '@stitches/react'
import { styled } from 'styles/config'

const StyledDescription = styled('p', {
  fontSize: '$normal',
  variants: {
    align: {
      center: {
        textAlign: 'center',
        width: '100%'
      }
    }
  }
})

type DescriptionProps = Stitches.VariantProps<typeof StyledDescription> & {
  children: React.ReactNode
}

const Description = ({ children, ...props }: DescriptionProps) => (
  <StyledDescription {...props}>{children}</StyledDescription>
)

export default Description

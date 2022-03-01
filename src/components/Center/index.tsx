import { styled } from 'styles/config'

const StyledCenter = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

type CenterProps = {
  children: React.ReactNode
}

const Center = ({ children }: CenterProps) => (
  <StyledCenter>{children}</StyledCenter>
)

export default Center

import { styled } from 'styles/config'

type TitleProps = {
  children: React.ReactNode
}

const H1 = styled('h1', {
  color: '$purple500'
})

const Title = ({ children }: TitleProps) => <H1>{children}</H1>

export default Title

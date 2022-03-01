import Center from 'components/Center'
import Description from 'components/Description'
import Title from 'components/Title'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Title align="center">Boilerplate of Next JS</Title>
      <Description align="center">
        TypeScript, ReactJS, NextJS, Styled Components e Chakra UI
      </Description>
      <Center>
        <Image
          src="/img/hero-illustration.svg"
          alt="Um desenvolvedor de frente para uma tela com código."
          width={'300rem'}
          height={'300rem'}
        />
      </Center>
    </>
  )
}

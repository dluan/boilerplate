import Center from 'components/Center'
import Description from 'components/Description'
import Title from 'components/Title'
import Image from 'next/image'
import { HomeProps } from 'pages'
import { GraphCMSImageLoaderWithSVG } from 'utils/loaderImage'

const Home = ({ title, subtitle, image }: HomeProps) => {
  return (
    <>
      <Title align="center">{title}</Title>
      <Description align="center">{subtitle}</Description>
      <Center>
        <Image
          src={image}
          alt="Um desenvolvedor de frente para uma tela com código."
          width={'300rem'}
          height={'300rem'}
          loader={GraphCMSImageLoaderWithSVG}
        />
      </Center>
    </>
  )
}

export default Home

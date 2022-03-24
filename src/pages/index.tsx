import { initializeApollo } from 'graphql/apollo-config'
import {
  GetDataDocument,
  GetDataQuery,
  GetDataQueryVariables
} from 'graphql/generated'
import Home from 'templates/Home'

export type HomeProps = {
  title: string
  subtitle: string
  image: string
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const {
    data: { data }
  } = await apolloClient.query<GetDataQuery, GetDataQueryVariables>({
    query: GetDataDocument,
    variables: {
      id: 'cl117fbrl1h2c0bkf80sjk4s5'
    }
  })

  return {
    props: {
      title: data?.title,
      subtitle: data?.subtitle,
      image: data?.image.url
    }
  }
}

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

import { gql } from '@apollo/client'

export const GET_DATA = gql`
  query getData($id: ID) {
    data(where: { id: $id }, stage: PUBLISHED) {
      image {
        url
      }
      title
      subtitle
    }
  }
`

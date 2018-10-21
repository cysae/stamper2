import React from 'react'
import { graphql } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { withNamespaces } from 'react-i18next'
import { compose } from 'recompose'

const VerifyPage = () => {
  return (
    <div>
      <h2>Verify</h2>
    </div>
  )
}

const VERIFY_HASH_QUERY = gql`
  query verifyHash($hash: String!) {
    verifyHash(hash: $hash)
  }
`

export default compose(
  graphql(VERIFY_HASH_QUERY, {
    name: 'verifyHash',
    options: props => ({
      fetchPolicy: 'network-only',
      variables: { hash: props.match.params.hash }
    }),
  }),
  withNamespaces(),
)(VerifyPage)

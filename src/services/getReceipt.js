import 'react'
import { graphql } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { compose, mapProps } from 'recompose'
import handleErrorAndLoading from './handleErrorAndLoading.js'

const RECEIPT_QUERY = gql`
  query receiptQuery($stamperyId: ID!) {
    getReceipt(stamperyId: $stamperyId ) {
      btc,
      btcIsPending,
      eth,
      ethIsPending,
      certificate
    }
  }
`

export default (WrappedComponent) => {
  return compose(
    graphql(RECEIPT_QUERY, {
      name: 'getReceipt',
      options: props => ({
        variables: {
          stamperyId: props.match.params.stamperyId
        }
      })
    }),
    mapProps(props => {
      const { getReceipt, ...rest } = props
      return {
        ...rest,
        loading: getReceipt.loading,
        error: getReceipt.error,
        receipt: getReceipt.getReceipt
      }
    }),
    handleErrorAndLoading,
  )(WrappedComponent)
}

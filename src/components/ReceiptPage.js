import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import  { gql } from 'apollo-boost'

class ReceiptPage extends Component {
  render() {
    console.log('render', this.props)
    return (
      <div> Receipt </div>
    )
  }
}

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
export default graphql(RECEIPT_QUERY, {
  name: 'getReceipt',
  options: props => ({
    variables: {
      stamperyId: props.match.params.stamperyId
    }
  })
})(ReceiptPage)

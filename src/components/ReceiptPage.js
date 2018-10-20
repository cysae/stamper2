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
  query receiptQuery {
    getReceipt(stamperyId: "1234" ) {
      eth,
      ethIsPending,
      certificateUrl
    }
  }
`
export default graphql(RECEIPT_QUERY, {
  name: 'getReceipt',
  options: {
    fetchPolicy: 'network-only'
  },
})(ReceiptPage)

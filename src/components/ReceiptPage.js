import React, { Component } from 'react'
import getReceipt from '../services/getReceipt.js'

class ReceiptPage extends Component {
  render() {
    console.log('render', this.props)
    return (
      <div> Receipt </div>
    )
  }
}

export default getReceipt(ReceiptPage)

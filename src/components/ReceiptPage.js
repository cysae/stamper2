import React, { Component } from 'react'
import getReceipt from '../services/getReceipt.js'
import getUser from '../services/getUser.js'
import { Document } from 'react-pdf'
import { Card, Row, Col, Divider } from 'antd'
import { compose } from 'recompose'

class ReceiptPage extends Component {
  render() {
    const myStyle = {
      textAlign: 'center'
    }
    console.log('render', this.props)
console.log('Time format -->', this.props.me.files[0].stampedAt)
    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Receipt" bordered={false}><Document file={`data:application/pdf;base64${this.props.receipt.certificate}`} /></Card>
          </Col>
          <Col span={12}>
            <Card title="Technical Details" bordered={false}>
              <Row>
                <Card type="inner" bordered={false}>
                  <Col span={4}>
                    <p>Main Hash</p>
                  </Col>
                  <Col span={20}>
                    {this.props.receipt.hash}
                  </Col>
                </Card>
              </Row>

              <Row>
                <Card type="inner" title="ETHEREUM PROOF" bordered={false}>
                  {this.props.receipt.ethIsPending ?
                    (
                      <div>
                        <Col span={4}>
                          <p>Pending</p>
                        </Col>
                        <Col span={20}>
                          <p>Estimated time: {this.props.me.files[0].stampedAt}</p>
                        </Col>
                      </div>
                    ) : (
                      <p>Ready</p>
                    )
                  }
                </Card>
              </Row>
              <Row>
                <Card type="inner" title="BITCOIN PROOF" bordered={false}>
                  {this.props.receipt.ethIsPending ?
                    (
                      <div>
                        <Col span={4}>
                          <p>Pending</p>
                        </Col>
                        <Col span={20}>
                          <p>Estimated time: {this.props.me.files[0].stampedAt}</p>
                        </Col>
                      </div>
                    ) : (
                      <p>Ready</p>
                    )
                  }
                </Card>
              </Row>
{/*
              <Row>
                <Card type="inner" title="ETHEREUM PROOF" bordered={false}>
                  <Col span={4}>
                    {
                      this.props.receipt.ethIsPending ?
                        (<p>Pending</p>) : (<p>Ready</p>)
                    }
                  </Col>
                  <Col span={20}>
                    {this.props.receipt.eth}
                  </Col>
                </Card>
              </Row>
              <Row>
                <Card type="inner" title="BITCOIN PROOF" bordered={false}>
                  <Col span={4}>
                  {
                    this.props.receipt.btcIsPending ?
                      (<p>Pending</p>) : (<p>Ready</p>)
                  }
                  </Col>
                  <Col span={20}>
                    {this.props.receipt.btc}
                  </Col>
                </Card>
              </Row>
*/}
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default compose(
  getReceipt,
  getUser,
)(ReceiptPage)

import React, { Component } from 'react'
import getUser from '../services/getUser.js'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import { withNamespaces } from 'react-i18next'
import { compose } from 'recompose'

class FilePage extends Component {
  /* componentWillReceiveProps(nextProps) {
   *   if (this.props.location.key !== nextProps.location.key) {
   *     this.props.getMe.refetch()
   *   }
   * } */

  render() {
    const { me: { files }, t } = this.props

    const columns = [
      {
        title: 'Nombre',
        dataIndex: 'filename',
        key: 'filename',
        render: (filename, record) => <a to={record.url} download>{filename}</a>
      },
      {
        title: 'Fecha del sello',
        dataIndex: 'stampedAt',
        key: 'stampedAt',
      },
      {
        title: 'Hash',
        dataIndex: 'hash',
        key: 'hash'
      },
      {
        title: t('Receipt'),
        key: 'receipt',
        render: (text, record) => <Link to={`receipt/${record.stamperyId}`}>ver recivo</Link>
      }
    ]

    return (
      <div>
        <h2>Lista de archivos</h2>
        <p>Haz click en el nombre del archivo que deseas descargar</p>
        <Table
          columns={columns}
          dataSource={files}
          rowKey="id"
        />
      </div>
    )
  }
}

export default compose(
  getUser,
  withNamespaces(),
)(FilePage)

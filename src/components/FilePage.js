import React, { Component } from 'react'
import getUser from '../services/getUser.js'
import  { Link }  from 'react-router-dom'
import { Table } from 'antd'
//import Post from '../components/Post'
//import Docs from '../components/Docs'
//import {
//  NavLink,
//  Link,
//  BrowserRouter as Router,
//  Route,
//  Switch,
//  Redirect,
//} from 'react-router-dom'

class FilePage extends Component {
  /* componentWillReceiveProps(nextProps) {
   *   if (this.props.location.key !== nextProps.location.key) {
   *     this.props.getMe.refetch()
   *   }
   * } */

  render() {
    const { me: { files } } = this.props
console.log(files)
    const columns = [
      {
        title: "Nombre",
        dataIndex: "filename",
        key: "filename",
        render: (filename, record) => <a href={record.url} download>{filename}</a>
      },
      {
        title: "Fecha del sello",
        dataIndex: "stampedAt",
        key: "stampedAt",
      },
      {
        title: "Hash",
        dataIndex: "hash",
        key: "hash"
      },
      {
        title: " ",
        key: "receipt",
        render: (text, record) => <a href={"receipt/" + record.stamperyId}>ver recivo</a>
      }
    ];

    return (
      <div>
        <h2>Lista de ficheros</h2>
        {/*<p>Haz click en el nombre del fichero que deseas descargar</p>*/}
        <Table
          columns={columns}
          dataSource={files}
          rowKey="id"
        />
      </div>
    )
  }
}

export default getUser(FilePage)

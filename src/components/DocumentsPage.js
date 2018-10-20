import React, { Component } from 'react'
import getUser from '../services/getUser.js'
//import Post from '../components/Post'
//import Docs from '../components/Docs'
import {
//  NavLink,
  Link,
//  BrowserRouter as Router,
//  Route,
//  Switch,
//  Redirect,
} from 'react-router-dom'

class FilePage extends Component {
  /* componentWillReceiveProps(nextProps) {
   *   if (this.props.location.key !== nextProps.location.key) {
   *     this.props.getMe.refetch()
   *   }
   * } */

  render() {
    const { me: { files } } = this.props

    return (
      <div>
        {files.map(({filename, url}, i) => (
          <a key={i} href={url} download>{filename}</a>
        )
        )}
      </div>
    )
  }
}

export default getUser(FilePage)

import React, { Component, Fragment } from 'react'
//import Post from '../components/Post'
//import Docs from '../components/Docs'
import { graphql } from 'react-apollo'
import {
//  NavLink,
  Link,
//  BrowserRouter as Router,
//  Route,
//  Switch,
//  Redirect,
} from 'react-router-dom'
import  { gql } from 'apollo-boost'

class DocumentsPage extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.documentsQuery.refetch()
    }
  }

  render() {
    if (this.props.documentsQuery.loading) {
      return (
        <div className="flex w-100 h-100 items-center justify-center pt7">
          <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
        </div>
      )
    }

    return (
      <Fragment>
        <div className="flex justify-between items-center">
          <h1>Documents</h1>
        </div>
        {this.props.documentsQuery.documents &&
          this.props.documentsQuery.documents.map(document => (
            // <Docs //Post
            //   key={document.id}
            //   doc={document} //post={document}
            //   refresh={() => this.props.documentsQuery.refetch()}
            //   //isDocument={!document.isPublished}
            // />
                    // someday something like <Link to="/"+{this.props.document.actualFileSite}
            <ul  key={document.id}>
              <Link to={`/documents/${document.name}`}>{document.name}</Link>
            </ul>
          ))}
        {this.props.children}
      </Fragment>
    )
  }
}

// const FILES_QUERY = gql`
//   query FilesQuery {
//     files {
//       id
//       name
//     }
//   }
// `

const DOCUMENTS_QUERY = gql`
  query DocumentsQuery {
    documents {
      id
      name
      owner {
        name
      }
    }
  }
`

export default graphql(DOCUMENTS_QUERY, {
  name: 'documentsQuery', // name of the injected prop: this.props.feedQuery...
  options: {
    fetchPolicy: 'network-only',
  },
})(DocumentsPage)

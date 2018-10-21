import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { compose } from 'recompose'

class CreateFile extends Component {
  state = {
    name: '',
  }

  _uploadFile = (event) => {
    const files = event.target.files
    const file = files[0]
    console.log('file', file)
    this.props.uploadMutation({
      variables: {
        file
      }
    }).catch(error => {
      console.log(error)
    })
    this.props.history.push(`/files`)
  }

  render() {
    return (
      <div className="pa4 flex justify-center bg-white">
        <form>
          <h1 className="pa4 flex justify-center">Subir archivo</h1>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
                this._uploadFile(event)
            }}
            onClick={(event) => {
                event.target.value = null
            }}
          />
          <a className="f6 pointer" onClick={this.props.history.goBack}>
            Cancelar
          </a>
        </form>
      </div>
    )
  }
}

{/*const CREATE_DOCUMENT_MUTATION = gql`
  mutation CreateDocumentMutation($name: String!) {
    createDocument(name: $name) {
      id
      name
    }
  }
`*/}

const UPLOAD_MUTATION = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(
      file: $file
    ) {
      id
    }
  }
`
/*
graphql(CREATE_DOCUMENT_MUTATION, {
  name: 'createDocumentMutation', // name of the injected prop: this.props.createCompanyMutation...
}),
*/
export default compose(
  graphql(UPLOAD_MUTATION, {
    name: 'uploadMutation', // name of the injected prop: this.props.createCompanyMutation...
  }),
  withRouter
)(CreateFile)

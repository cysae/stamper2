import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { compose } from 'recompose'

class CreateDocument extends Component {
  state = {
    name: '',
  }

/*
  handlePost = async e => {
    e.preventDefault()
    const { name } = this.state
    await this.props.createDocumentMutation ({
      variables: { name },
    })
    this.props.history.push('/documents')
  }
*/

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
    this.props.history.push(`/documents`)
  }

  render() {
    return (
      <div className="pa4 flex justify-center bg-white">
        <form>
        {/*onSubmit={this.handlePost}> NOT NEEDED, AS WELL AS handlePost() */}
          <h1 className="pa4 flex justify-center">Upload Document</h1>
{/*
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="Document Name"
            type="text"
            value={this.state.name}
          />
          <input
            className={`pa3 bg-black-10 bn ${this.state.name &&
              'dim pointer'}`}
            disabled={!this.state.name}
            type="submit"
            value="Create"
          />
*/}
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
            Cancel
          </a>
        </form>
      </div>
    )
  }
}

const CREATE_DOCUMENT_MUTATION = gql`
  mutation CreateDocumentMutation($name: String!) {
    createDocument(name: $name) {
      id
      name
    }
  }
`

const UPLOAD_MUTATION = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(
      file: $file
    ) {
      id
    }
  }
`

export default compose(
  graphql(CREATE_DOCUMENT_MUTATION, {
    name: 'createDocumentMutation', // name of the injected prop: this.props.createCompanyMutation...
  }),
  graphql(UPLOAD_MUTATION, {
    name: 'uploadMutation', // name of the injected prop: this.props.createCompanyMutation...
  }),
  withRouter
)(CreateDocument)

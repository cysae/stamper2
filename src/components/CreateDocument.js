import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import  { gql } from 'apollo-boost'

class CreateDocument extends Component {
  state = {
    name: '',
  }
  handlePost = async e => {
    e.preventDefault()
    const { name } = this.state
    console.log('submit')
    await this.props.createDocumentMutation ({
      variables: { name },
    })
    console.log('aftersubmit',name)
    this.props.history.replace('/documents')
  }

  render() {
    return (
      <div className="pa4 flex justify-center bg-white">
        <form onSubmit={this.handlePost}>
          <h1>Upload Document</h1>
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
          {" "}    {//{this.props.history.push("/documents")}
        }
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

const CreateDocumentWithMutation = graphql(CREATE_DOCUMENT_MUTATION, {
  name: 'createDocumentMutation', // name of the injected prop: this.props.createCompanyMutation...
})(CreateDocument)

export default withRouter(CreateDocumentWithMutation)

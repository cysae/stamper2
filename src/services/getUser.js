import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { compose, branch, renderComponent, mapProps } from 'recompose'

const Loading = () => (
  <div>Loading...</div>
)
const Error = () => (
  <div>Error....</div>
)

const renderWhileLoading = (component) => compose(
  branch(
    props => props.loading,
    renderComponent(component)
  )
)

const renderIfError = (component) => compose(
  branch(
    props => {
      if(props.error !== undefined) {
        console.error(props.error)
        return true
      }
      return false
    },
    renderComponent(component)
  )
)

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      files {
        id
        stamperyId
        filename
        url
        hash
        stampedAt
      }
    }
  }
`

export default (WrappedComponent) => {
  return compose(
    graphql(ME_QUERY, {
      name: 'getMe', // name of the injected prop: this.props.feedQuery...
      options: {
        fetchPolicy: 'network-only',
      },
    }),
    mapProps(props => {
      const { getMe, ...rest } = props
      return {
        ...rest,
        loading: getMe.loading,
        error: getMe.error,
        me: getMe.me
      }
    }),
    renderWhileLoading(Loading),
    renderIfError(Error),
  )(WrappedComponent)
}

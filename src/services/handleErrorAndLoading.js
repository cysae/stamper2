import React from 'react'
import { compose, branch, renderComponent } from 'recompose'


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

export default (WrappedComponent) => {
  return compose(
    renderWhileLoading(Loading),
    renderIfError(Error),
  )(WrappedComponent)
}

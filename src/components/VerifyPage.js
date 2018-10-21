import React from 'react'
import { Link } from 'react-router-dom'
import { withNamespaces } from 'react-i18next'

const VerifyPage = () => {
  return (
    <div>
      <h2>Verify</h2>
      <input type="text" />
      <br />
      <input type="file" />
      <br />
      <Link to="/verify/BAE7DB512AF26A15EFC6AA966D13272FC10D85AA9A1E4559496FBF6EB84DAA29">
        verify
      </Link>
    </div>
  )
}

export default withNamespaces()(VerifyPage)

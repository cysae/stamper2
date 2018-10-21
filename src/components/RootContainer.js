import React, { Component, Fragment } from 'react'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import CreateFile from './CreateFile'
import FilePage from './FilePage'
import VerifyPage from './VerifyPage'
import VerifyHashPage from './VerifyHashPage'
import ReceiptPage from './ReceiptPage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import PageNotFound from './PageNotFound'
import LogoutPage from './LogoutPage'
import { AUTH_TOKEN } from '../constant'
import { isTokenExpired } from '../helper/jwtHelper'
import { graphql } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { withNamespaces } from 'react-i18next' // translate
import i18n from '../i18n'
import { compose } from 'recompose'

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  return token ? (
    <Route {...rest} render={matchProps => <Component {...matchProps} />} />
  ) : (
    <Redirect to="/login" />
  )
}

class RootContainer extends Component {
  constructor(props) {
    super(props)
    this.refreshTokenFn = this.refreshTokenFn.bind(this)

    this.state = {
      token: props.token,
    }
  }

  refreshTokenFn(data = {}) {
    const token = data.AUTH_TOKEN

    if (token) {
      localStorage.setItem(AUTH_TOKEN, token)
    } else {
      localStorage.removeItem(AUTH_TOKEN)
    }

    this.setState({
      token: data.AUTH_TOKEN,
    })
  }

  bootStrapData() {
    try {
      const token = localStorage.getItem(AUTH_TOKEN)
      if (token !== null && token !== undefined) {
        const expired = isTokenExpired(token)
        if (!expired) {
          this.setState({ token: token })
        } else {
          localStorage.removeItem(AUTH_TOKEN)
          this.setState({ token: null })
        }
      }
    } catch (e) {
      console.log('')
    }
  }

  //verify localStorage check
  componentDidMount() {
    this.bootStrapData()
  }

  render() {
    return (
      <Router>
        <Fragment>
          {this.renderNavBar()}
          {this.renderRoute()}
        </Fragment>
      </Router>
    )
  }

  renderNavBar() {
    const { t } = this.props
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }

    return (
      <nav className="pa3 pa4-ns">
        {this.props.data &&
          this.props.data.me &&
          this.props.data.me.email &&
          this.state.token && (
            <Fragment>
              <Link className="link dim black b f6 f5-ns dib mr3" to="/" title="Feed">
                Stamper
              </Link>
              <NavLink
                className="link dim f6 f5-ns dib mr3 black"
                activeClassName="gray"
                exact={true}
                to="/files"
                title={t('Files')}
              >
                {t('Files')}
              </NavLink>
              <NavLink
                className="link dim f6 f5-ns dib mr3 black"
                activeClassName="gray"
                exact={true}
                to="/verify"
                title={t('Verify')}
              >
                {t('Verify')}
              </NavLink>
              <div>
                <button onClick={() => changeLanguage('en')}>en</button>
                <button onClick={() => changeLanguage('es')}>es</button>
                <button onClick={() => changeLanguage('fr')}>fr</button>
                Language: {i18n.language}
              </div>
            </Fragment>
          )}
        {this.state.token ?
          (
            <div
              onClick={() => {
                this.refreshTokenFn &&
                  this.refreshTokenFn({
                    [AUTH_TOKEN]: null,
                  })
                window.location.href = '/'
              }}
              className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
            >
              Cerrar sesión
            </div>
          ):(
            <h2>Acceder</h2>
          )
        }
        {this.props.data &&
          this.props.data.me &&
          this.props.data.me.email &&
          this.state.token && (
            <Fragment>
              <Link
                to="/upload"
                className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
              >
                + Subir archivo
              </Link>
            </Fragment>
          )}
      </nav>
    )
  }

  renderRoute() {
    return (
      <div className="fl w-100 pl4 pr4">
        <Switch>
          <ProtectedRoute
            token={this.state.token}
            path="/files"
            component={FilePage}
          />
          <ProtectedRoute
            token={this.state.token}
            path="/upload"
            component={CreateFile}
          />
          <ProtectedRoute
            token={this.state.token}
            path="/receipt/:stamperyId"
            component={ReceiptPage}
          />
          <Route exact path="/verify" component={VerifyPage} />
          <Route path="/verify/:hash" component={VerifyHashPage} />
          <Route
            token={this.state.token}
            path="/login"
            render={props => <LoginPage refreshTokenFn={this.refreshTokenFn} />}
          />
          <Route
            token={this.state.token}
            path="/signup"
            render={props => (
              <SignupPage refreshTokenFn={this.refreshTokenFn} />
            )}
          />
          <Route path="/logout" component={LogoutPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      email
      name
    }
  }
`

export default compose(
  graphql(ME_QUERY, {
    options: {
      errorPolicy: 'all',
    },
  }),
  withNamespaces(),
)(RootContainer)

// export default withNamespaces()(Component)

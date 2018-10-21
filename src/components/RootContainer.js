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
import { Layout, Menu, Select, Row, Col, Button } from 'antd'
const { Header, Content, Footer } = Layout
const Option = Select.Option

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
        <Layout>
          <Header>
            <Row type="flex" justify="space-between">
              <Col>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['myFiles']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="myFiles">
                    <Link to="/files">My Files</Link>
                  </Menu.Item>
                  <Menu.Item key="verify">
                    <Link to="/verify">Verify</Link>
                  </Menu.Item>
                  <Menu.Item key="upload">
                    <Link to="/upload">Upload</Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  style={{ lineHeight: '64px' }}
                >
                <Select
                  defaultValue={i18n.language}
                  onChange={(lng) => this.changeLng(lng)}
                  style={{width: 120}}
                >
                  <Option value="en">English</Option>
                  <Option value="es">Español</Option>
                  <Option value="fr">Français</Option>
                </Select>
                  <Menu.Item
                    onClick={() => {
                        this.refreshTokenFn &&
                        this.refreshTokenFn({
                          [AUTH_TOKEN]: null,
                        })
                        window.location.href = '/'
                    }}
                  >
                    Cerrar sesión
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Header>
          <Content>
            {this.renderRoute()}
          </Content>
          <Footer>
            CYSAE ©2018
          </Footer>
        </Layout>
      </Router>
    )
  }

  changeLng = (lng) => {
    i18n.changeLanguage(lng)
  }

  renderNavBar() {
    return (
      <nav className="pa3 pa4-ns">
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

import auth0 from 'auth0-js';
import history from './history';
import { access } from 'fs';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'polaristlx.auth0.com',
    clientID: 'V1HUqhiPTJRaYhN3EKZdNK9gSm1QUDOo',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  // for external user profile:
  userProfile = {}

  login = () => {
    this.auth0.authorize();
  }

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if(authResult) {
        console.log(authResult);        
        
        localStorage.setItem('access_token', authResult.accessToken)
        localStorage.setItem('id_token', authResult.id_token)

        let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
        localStorage.setItem('expiresAt', expiresAt)        

        // for external user profile:
        this.getProfile()

        setTimeout(() => {
          history.replace('/authcheck')
        // 200 to 2000, as this needs to be a bit longer to give a chance for the external profile to save to Redux store:
        }, 2000);
      } else {
        console.log(err)        
      }
    })
  }

  // extracting user profile data
  getAccessToken = () => {
    if(localStorage.getItem('access_token')) {
      const accessToken = localStorage.getItem('access_token')
      return accessToken
    } else {
      return null
    }
  }

  getProfile = () => {
    let accessToken = this.getAccessToken()
    if(accessToken) {
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if(profile) {
          this.userProfile = { profile }
        }
      })
    }
  }
  // end of extracting user profile data

  logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expiresAt')
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    return new Date().getTime() < expiresAt
  }
}
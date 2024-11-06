import { User } from 'firebase/auth';
import React, { Component, createContext } from 'react'

export const AuthContext = createContext({
  user: null,
  setUser: (user: User | null) => {}
});

export default class AuthContextProvider extends Component<any, any> {
  state = {
    user: null,
    setUser: null
  }

  setUser = (user: any) => {
    this.setState({user})
  }
  render() {
    return (
      <AuthContext.Provider value={{...this.state, setUser: this.setUser}}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

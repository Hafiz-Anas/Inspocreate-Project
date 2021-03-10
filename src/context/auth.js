import React, { Component,createContext } from 'react'

export const AuthContext = createContext({
    state:null,
    actions: {
        updateState:()=>{}
    }
});

export class AuthContextProvider extends Component {
    state = null

    updateState = (state) => {
        this.setState(state)
    }
    render() {
        const context = {
            state:this.state,
            actions: {
                updateState:this.updateState
            }
        }
        return (
            <AuthContext.Provider value={context}>{this.props.children}</AuthContext.Provider>
        )
    }
}

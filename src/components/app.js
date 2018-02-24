import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

injectTapEventPlugin();

class App extends Component {
    constructor(){
        super();
        this.state = {
            drawerOpened: false
        }
    }

    signOut() {
        firebaseApp.auth().signOut();
    }


    render () {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title='Welcome to North marriage lawn' onLeftIconButtonTouchTap={() => this._toggleDrawer()} />
                    this is Dashboard app
                    <button onClick={ () => this.signOut() }>Sign Out</button>
                    <FlatButton label='Logout' onTouchTap={ () => this.signOut() } />
                </div>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, null) (App);
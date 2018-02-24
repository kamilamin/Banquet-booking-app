import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

const form_heading = {
    textAlign: 'center',
    fontSize: '200%'
};

const form_login = {
    border: '1px solid #eee',
    padding: '4%',
    marginLeft: '10%',
    boxShadow: '10px 10px 50px #eee'
};

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }
    // signIn(){
    //     console.log('this.state', this.state);
    //     const { email, password } = this.state;
    //     firebaseApp.auth().signInWithEmailAndPassword(email, password)
    //         .catch(error => {
    //             this.setState({error})
    //         })
    // }
    render(){
        return (
            <div style={{margin: '5%'}}>
                <div>
                    <h1 style={{marginBottom: '5%', textAlign: 'center'}}>Welcome to banquet app</h1>
                </div>
                <div style={form_login}>
                    <h2 style={form_heading}>SIGN IN</h2>
                    <input className="form-control" type="text" placeholder='Email Address' onChange={event => this.setState({email: event.target.value})} style={{marginBottom: '5px'}} required />
                    <input className='form-control' type="password" placeholder='Password' onChange={event => this.setState({password: event.target.value})} required />
                    <button className='btn btn-primary btn-block' type='button' onClick={ () => this.signIn() } style={{marginTop: '5px'}}>Sign In</button>
                    <div style={{marginTop: '5px'}}>
                                
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;
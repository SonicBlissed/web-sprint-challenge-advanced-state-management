import React, { Component, useReducer, useEffect } from "react";
import {connect} from 'react-redux'
import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
import {getSmurf} from './actions';
import {reducer, initialState} from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App(props) {

const [state, dispatch] = useReducer(reducer, initialState);

useEffect(() => {
  getSmurf();
  console.log('test useEffect')
}, []);


    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <p className="navbar-brand">Smurf Village Database</p>
        </nav>
        <main>
          <AddForm dispatch={dispatch}/>
          <SmurfDisplay formData={state} dispatch={dispatch}/>
        </main>
      </div>
    );}

    const mapStateToProps = state => {
      return {
        smurf:state.smurfs,
      }
    }

export default connect(mapStateToProps, {getSmurf})(App);
import React, {useEffect} from 'react';
import Header from "./Header";
import './App.css';
import Home from "./Home";
import Login from './Login';
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom' ;
import {auth} from './firebase';
import {useStateValue} from "./StateProvider";
function App() {
    const [{user}, dispatch]=useStateValue();
    useEffect(()=>{
        const unsubscribed =auth.onAuthStateChanged((authUser)=>{
            if (authUser){
                dispatch({
                    type : 'SET_USER',
                    user : authUser

                })

            }else {
                dispatch({
                    type : 'SET_USER',
                    user : null

                })

            }
        });
        return ()=>{
            unsubscribed();

        }

    },[]);
    console.log(user);


  return (

      <Router>
          <div className="app">
              <Switch>

                  <Route path="/login">

                      <Login/>
                  </Route>
                  <Route path="/">
                      <Header/>
                      <Home/>
                  </Route>

              </Switch>
          </div>
      </Router>


  );
}

export default App;

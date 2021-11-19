import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import SignupScreen from './screens/SignupScreen.js';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        // console.log('Not logged in')
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch])
  return (
    <div className="app">
      {
        !user ? (<Login />) : (
          <Router>
            <Routes>
              <Route path="/signup" element={<SignupScreen />} />
            </Routes>
            <Routes>
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          </Router>
        )
      }

    </div>
  );
}

export default App;

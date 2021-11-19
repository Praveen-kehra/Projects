import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase';
import {useNavigate} from 'react-router-dom';

function ProfileScreen() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Navbar />
      <div className="profile-body">
        <h2>Edit Profile</h2>
        <div className="profile-info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profile-details">
            <h2>{user.email}</h2>
            <div className="profile-plans">
              <h3>Plans</h3>
              <button
                onClick={() => {
                  auth.signOut();
                  navigate('/');
                }}
                className="profile-screen-signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen

import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

import { UserContext } from "../contexts/UserProvider.jsx"
import { PAGE_TRANSITION, PAGE_VARIANT_BASIC } from '../constants';

const Profile = () => {
  const { getUserInfo } = useContext(UserContext);
  const userInfo = getUserInfo();
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={ PAGE_TRANSITION }
      variants={ PAGE_VARIANT_BASIC }>
      <Layout classNamePage="with-navbar">
        <NavBar />
        <div className="profileWrapper">
          <div className="headerSection">
            <div className="profilePhoto">
              <img src={ userInfo.avatar } />
            </div>
            <div>
              <h1>Justin augustin</h1>
              <div className="userInformation">
                <div><img src="./location.svg" /> <span>California</span></div>
                <div><img src="./email.svg" /> <span>justina@gmail.com</span></div>
                <a>Edit Profile</a>
              </div>
            </div>
          </div>
          <div className="profileListActions">
            <section>
              <p>wallet</p> <img src="./arrowRightBlue.svg" />
            </section>
            <section>
              <p>shipping address</p> <img src="./arrowRightBlue.svg" />
            </section>
            <section>
              <p>support</p> <img src="./arrowRightBlue.svg" />
            </section>
            <section>
              <p>sign out</p>
            </section>
          </div>
        </div>
      </Layout>
    </motion.div>
  );
};

export default Profile;

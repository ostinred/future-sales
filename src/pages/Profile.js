import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

import { UserContext } from '../contexts/UserProvider.jsx';
import { PAGE_TRANSITION, PAGE_VARIANT_BASIC } from '../constants';
import { NavLink } from 'react-router-dom';
import { PROFILE_PAGE } from '../router/routes';

const Profile = () => {
  const { getUserInfo } = useContext(UserContext);
  const userInfo = getUserInfo();
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_BASIC}>
      <Layout>
        <main>
          <div className="profileWrapper">
            <div className="headerSection">
              <div className="profilePhoto">
                <img src={userInfo.avatar} alt="" />
              </div>
              <div>
                <h1>Justin augustin</h1>
                <div className="userInformation">
                  <div>
                    <img src="./location.svg" alt="" /> <span>California</span>
                  </div>
                  <div>
                    <img src="./email.svg" alt="" />{' '}
                    <span>justina@gmail.com</span>
                  </div>
                  <NavLink to={PROFILE_PAGE}>Edit Profile</NavLink>
                </div>
              </div>
            </div>
            <div className="profileListActions">
              <section>
                <p>wallet</p> <img src="./arrowRightBlue.svg" alt="" />
              </section>
              <section>
                <p>shipping address</p>{' '}
                <img src="./arrowRightBlue.svg" alt="" />
              </section>
              <section>
                <p>support</p> <img src="./arrowRightBlue.svg" alt="" />
              </section>
              <section>
                <p>sign out</p>
              </section>
            </div>
          </div>
        </main>
        <NavBar />
      </Layout>
    </motion.div>
  );
};

export default Profile;

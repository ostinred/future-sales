import React from 'react';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Notification from '../components/Notification';

import {
  NOTIFICATIONS,
  PAGE_TRANSITION,
  PAGE_VARIANT_RIGHT,
} from '../constants';

const Notifications = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_RIGHT}>
      <Layout>
        <Header back={true} title="Notifications" />

        <main className="notification-wrapper">
          {NOTIFICATIONS.map((x) => (
            <Notification {...x} />
          ))}
        </main>
      </Layout>
    </motion.div>
  );
};

export default Notifications;

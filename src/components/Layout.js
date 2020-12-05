import React from 'react';
import Header from './Header';

const Layout = ({ children, classNamePage }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <section className={`${classNamePage}`}>{children}</section>
    </div>
  );
};

export default Layout;

import React from 'react';

const Layout = ({ children, classNamePage }) => {
  return (
    <div className="page-wrapper">
      
      <section className={`${classNamePage}`}>{children}</section>
    </div>
  );
};

export default Layout;

import { v4 } from 'uuid';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Categories = () => {
  return (
    <div className="categories">
      {CATEGORIES.map(({ name, icon }) => (
        <NavLink key={v4()} to={name} className="category">
          <div className="category-icon">
            <i className={icon} />
          </div>
          <p>{name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;

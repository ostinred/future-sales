import React from 'react';
import {useHistory} from "react-router-dom";

const BackButton = () => {
  const history = useHistory();
  const onBackClick = () => history.goBack();

  return (
    <div className='backButton' onClick={onBackClick}>
      <i className="icon-arrow-left" />
    </div>
  );
};

export default BackButton;

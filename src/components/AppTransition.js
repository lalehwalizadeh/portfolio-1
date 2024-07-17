import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
const AppTransition = () => {
  const [showPage, setShowPage] = useState(false);

  const handleClick = () => {
    setShowPage(!showPage);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle Page</button>
      <CSSTransition
        in={showPage}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div className="page">Content of the page</div>
      </CSSTransition>
    </div>
  );
};

export default AppTransition;

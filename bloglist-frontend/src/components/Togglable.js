import React, { useState, useImperativeHandle } from 'react';

import { Button } from '@material-ui/core';

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });
  const buttonStyle = {
    marginTop: 15,
    marginLeft: 15,
  };

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button
          style={buttonStyle}
          variant="contained"
          onClick={toggleVisibility}
        >
          {props.buttonLabel}
        </Button>
      </div>
      <div style={showWhenVisible} className="togglableContent">
        {props.children}
        <Button
          style={buttonStyle}
          variant="outlined"
          onClick={toggleVisibility}
        >
          cancel
        </Button>
      </div>
    </div>
  );
});

Togglable.displayName = 'Togglable';

export default Togglable;

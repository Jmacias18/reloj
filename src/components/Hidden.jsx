// Hidden.jsx
import React from 'react';

const Hidden = ({ isHidden, children }) => {
  return (
    <div style={{ display: isHidden ? 'none' : 'block' }}>
      {children}
    </div>
  );
};

export default Hidden;
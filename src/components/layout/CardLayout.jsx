import React from 'react';

const CardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default CardLayout;
import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = (props) => (
  <Header {...props}>
    <img src="/images/braiins-os.svg" alt="" />
  </Header>
);

export default CustomHeader;

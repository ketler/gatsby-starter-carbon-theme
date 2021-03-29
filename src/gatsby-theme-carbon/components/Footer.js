import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      Braiins OS+ is an autotuning firmware that enables miners to customize what they do with their ASICs and achieve a more efficient W/TH output at any power consumption setting.
    </p>
    <p>
      <a href="https://braiins.com/os/plus" target="_blank">
        Learn more
      </a>

    </p>
    <p></p>
        <p>
      Last updated: {buildTime}
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
  secondCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
};



const FooterLogo = () => (
  <img src="/images/braiins.svg" alt="" />
);

const CustomFooter = () => <Footer links={links} Content={Content} Logo={FooterLogo} />;

export default CustomFooter;

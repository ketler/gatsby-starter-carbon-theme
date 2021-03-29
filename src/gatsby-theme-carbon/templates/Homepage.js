import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/braiins-os-plus.jpg';

const FirstLeftText = () => <p>Quick introduction</p>;

const FirstRightText = () => (
  <p>
    Braiins OS+ is an autotuning firmware that enables miners to customize what they do with their ASICs and achieve a more efficient W/TH output at any power consumption setting. It does this by finding the optimal frequencies for every individual chip, giving more work to high quality chips and less to low quality chips.
    <a
      className={calloutLink}
      href="https://braiins.com/os/plus" target="_blank">
      Learn more →
    </a>
  </p>
);

const SecondLeftText = () => <p>Download Braiins OS+</p>;

const SecondRightText = () => (
  <p>
Increase efficiency with Braiins OS+
    <a
      className={calloutLink}
      href="https://braiins.com/os/plus/download" target="_blank">
      Download it today →
    </a>
  </p>
);

const BannerText = () => <h1>Braiins OS+ Documentation</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#6B50FF"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;

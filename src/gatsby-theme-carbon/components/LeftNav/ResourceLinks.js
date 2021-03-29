import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Braiins OS+',
    href: 'https://braiins.com/os/plus',
  },
  {
    title: 'Telegram',
    href: 'https://t.me/BraiinsOS',
  },
  {
    title: 'Support Ticket',
    href: 'https://help.slushpool.com/en/support/tickets/new',
  },
  {
    title: 'Mining Insights',
    href: 'https://insights.braiins.com',
  },
  {
    title: 'Braiins Blog',
    href: 'https://braiins.com/blogm',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;

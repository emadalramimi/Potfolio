import React from 'react';
import { Helmet } from 'react-helmet';

import { BackToTop } from '../../common/components/UIElements';
import {
  ContributionsGraph,
  Introduction,
  Details,
  Experience
} from './components';

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About Emad Al Ramimi | AI & Machine Learning</title>
        <meta name="description" content="Computer Scientist, AI Developer, and Innovator" />
        <meta property="og:title" content="About Emad Al Ramimi" />
        <meta property="og:description" content="Computer Scientist, AI Developer, and Innovator" />
      </Helmet>
      <Introduction />
      <ContributionsGraph />
      <Experience />
      <Details />
      <BackToTop />
    </React.Fragment>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Hero, Content } from './components';
import { BackToTop } from '../../common/components/UIElements';
import useHttpClient from '../../common/hooks/http-hook';

const Home = () => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/project/projects`
        );
        setProjects(responseData);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  return (
    <>
      <Helmet>
        <title>Emad Al Ramimi | Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio! I'm Emad Al Ramimi, a passionate AI Developer and Machine Learning Specialist."
        />
      </Helmet>
      <Hero />
      <Content projects={projects} isLoading={isLoading} />
      <BackToTop />
    </>
  );
};

export default Home;

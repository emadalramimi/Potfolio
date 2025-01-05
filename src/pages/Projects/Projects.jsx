import React, { useEffect, useState, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { BackToTop } from '../../common/components/UIElements';
import { Projects as ProjectsGrid } from '../Work/components';
import useHttpClient from '../../common/hooks/http-hook';

const Projects = () => {
  const { isLoading, error, sendRequest, show } = useHttpClient();
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
    <Fragment>
      <Helmet>
        <title>Projects | Portfolio</title>
        <meta 
          name="description" 
          content="Check out my latest projects and work." 
        />
        <meta 
          property="og:title" 
          content="Projects | Portfolio" 
        />
        <meta 
          property="og:description" 
          content="Check out my latest projects and work." 
        />
      </Helmet>
      
      <ProjectsGrid projects={projects} isLoading={isLoading} error={error} show={show} />
      
      <BackToTop />
    </Fragment>
  );
};

export default Projects;

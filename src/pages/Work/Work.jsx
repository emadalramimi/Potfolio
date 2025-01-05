import React, { useEffect, useState, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import { BackToTop } from '../../common/components/UIElements';
import { Projects, SkillsGrid } from './components';
import { SkillFilterProvider } from './components/SkillsGrid';
import useHttpClient from '../../common/hooks/http-hook';

const Work = () => {
  const { isLoading, error, sendRequest, show } = useHttpClient();
  const [projects, setProjects] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const view = searchParams.get('view') || 'skills';

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
        <title>{view === 'skills' ? 'Skills' : 'Projects'} | Portfolio</title>
        <meta 
          name="description" 
          content={view === 'skills' ? 'Explore my technical skills and expertise.' : 'Check out my latest projects and work.'} 
        />
        <meta 
          property="og:title" 
          content={`${view === 'skills' ? 'Skills' : 'Projects'} | Portfolio`} 
        />
        <meta 
          property="og:description" 
          content={view === 'skills' ? 'Explore my technical skills and expertise.' : 'Check out my latest projects and work.'} 
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/work_og_cli-eLMr5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652255031"
        />
        <meta property="twitter:title" content="Rakesh Potnuru's Work" />
        <meta property="twitter:description" content="Get to know what I do." />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/work_og_cli-eLMr5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652255031"
        />
      </Helmet>
      
      <SkillFilterProvider>
        {view === 'skills' && <SkillsGrid />}
        {view === 'projects' && <Projects projects={projects} isLoading={isLoading} error={error} show={show} />}
      </SkillFilterProvider>
      
      <BackToTop />
    </Fragment>
  );
};

export default Work;

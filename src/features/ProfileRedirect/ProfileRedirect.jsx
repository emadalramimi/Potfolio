import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useHttpHook from '../../common/hooks/http-hook';
import { ErrorModal } from '../../common/components/UIElements';
import './ProfileRedirect.scss';

const ProfileRedirect = () => {
  const [profileLink, setProfileLink] = useState('');
  const { profile } = useParams();
  const { isLoading, error, sendRequest, show } = useHttpHook();

  useEffect(() => {
    const fetchProfileLink = async () => {
      try {
        const responseData = await sendRequest(
          `${
            process.env.REACT_APP_BACKEND_URL
          }/profile/${profile.toLocaleLowerCase()}`
        );
        setProfileLink(responseData.profileLink);
        window.location.href = responseData.profileLink;
      } catch (err) {}
    };
    fetchProfileLink();
  }, [sendRequest, profile]);

  return (
    <Fragment>
      <Helmet>
        <title>
          {profileLink ? `${profile} | Emad` : 'Profile Not Found'}
        </title>
        <meta
          name="description"
          content={
            profileLink ? `Follow me on ${profile}` : 'Profile Not Found'
          }
        />
        <meta
          property="og:title"
          content={profileLink ? profile : 'Profile Not Found'}
        />
        <meta
          property="og:description"
          content={
            profileLink ? `Follow me on ${profile}` : 'Profile Not Found'
          }
        />
        
        <meta
          property="twitter:title"
          content={profileLink ? profile : 'Profile Not Found'}
        />
        <meta
          property="twitter:description"
          content={
            profileLink ? `Follow me on ${profile}` : 'Profile Not Found'
          }
        />
        
      </Helmet>
      <ErrorModal show={show} error={error} />
      <div className="profile-redirect">
        {isLoading && (
          <p className="loader">
            Redirecting to <span style={{ color: 'red' }}>{profile}</span> ...
          </p>
        )}
        {!profileLink && !isLoading && (
          <p>
            Profile Not Found! Maybe I do not exist on{' '}
            <span style={{ color: 'red' }}>{profile}</span> ?
          </p>
        )}
      </div>
    </Fragment>
  );
};

export default ProfileRedirect;

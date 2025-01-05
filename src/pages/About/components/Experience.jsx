import React from 'react';
import { Container, Stack } from 'react-bootstrap';

import { Company } from '../../../assets/images';
import './Experience.scss';

const ExperienceItem = (props) => {
  return (
    <div className="experience__content__item">
      <Stack direction="horizontal" gap={5}>
        <div className="experience__content__item__img">
          <img
            src={props.companyImgUrl ? props.companyImgUrl : Company}
            alt={props.company}
          />
        </div>
        <div className="experience__content__item__details mt-3">
          <h3>{props.company}</h3>
          <h5>{props.position}</h5>
          <span className="type">
            <span
              style={{
                backgroundColor:
                  props.endDate === 'Present' ? 'rgb(51, 255, 0)' : '#ff0000'
              }}
            />{' '}
            {props.type}
          </span>
          <p>
            {props.startDate} - {props.endDate}
          </p>
        </div>
      </Stack>
    </div>
  );
};

const Experience = () => {
  return (
    <div id="experience">
      <Container>
        <div className="experience">
          <h2>Professional Experience</h2>
          <div className="experience__content">
            <ExperienceItem
              company="Matterz Company"
              type="Full Time"
              position="Application & Web Developer"
              startDate="2023"
              endDate="Present"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Rent-Way"
              type="Internship"
              position="Web Developer Intern"
              startDate="Aug 2019"
              endDate="Sep 2019"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Innovators Course, Oman"
              type="Mentorship"
              position="Mentor & Facilitator"
              startDate="Jul-Nov 2023"
              endDate="Nov 2023"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Embedded Systems & IoT"
              type="Internship"
              position="Technology Intern"
              startDate="Aug 2019"
              endDate="Sep 2019"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;

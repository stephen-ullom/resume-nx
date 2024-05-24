import { FunctionComponent } from 'react';

import Experience from './experience/experience.component';
import Introduction from './introduction/introduction.component';
import Project from './project/project.component';

import applicantData from '../../data/applicant.yaml';
import coverLetterData from '../../data/cover-letter.yaml';
import resumeData from '../../data/resume.yaml';
import DataList from '../shared/data-list/data-list.component';
import { ApplicantData, CoverLetterData, ResumeData } from './resume.types';
import Section from '../shared/section/section.component';

import './resume.component.scss';

const resume = resumeData as ResumeData;
const applicant = applicantData as ApplicantData;
const coverLetter = coverLetterData as CoverLetterData;

const Resume: FunctionComponent = () => (
  <div className="resume">
    <Introduction
      name={applicant.name}
      jobTitle={coverLetter.job_title}
      introduction={resume.introduction}
    />

    <div className="content">
      <main>
        <Section title="Experience">
          {resume.experience.map((experience) => (
            <Experience
              key={experience.company}
              company={experience.company}
              positions={experience.positions}
            />
          ))}
        </Section>

        <Section title="Volunteering">
          {resume.volunteering.map((experience) => (
            <Experience
              key={experience.company}
              company={experience.company}
              positions={experience.positions}
            />
          ))}
        </Section>
      </main>

      <aside>
        <Section title="Skills">
          {resume.skills.map((skill) => (
            <Project
              key={skill.category}
              title={skill.category}
              description={skill.items.join(', ')}
            />
          ))}
        </Section>

        <Section title="Projects">
          {resume.projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
            />
          ))}
        </Section>

        <Section title="Contact">
          <DataList
            list={[
              { name: 'Email', value: applicant.email },
              { name: 'Phone', value: applicant.phone },
              { name: 'Location', value: applicant.location },
            ]}
          />
        </Section>
      </aside>
    </div>

    <footer>Made with React</footer>
  </div>
);

export default Resume;

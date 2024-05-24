import { FunctionComponent } from 'react';

import './project.component.scss';

export interface ProjectProperties {
  title: string;
  description: string;
}

const Project: FunctionComponent<ProjectProperties> = ({
  title,
  description,
}) => (
  <section className="project">
    <h3>{title}</h3>
    <p>{description}</p>
  </section>
);

export default Project;

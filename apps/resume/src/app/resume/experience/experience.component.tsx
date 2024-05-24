import { FunctionComponent } from 'react';

import { PositionData } from '../resume.types';

import './experience.component.scss';

export interface ExperienceProperties {
  company: string;
  positions: PositionData[];
}

const Experience: FunctionComponent<ExperienceProperties> = ({
  company,
  positions,
}) => (
  <section className="experience">
    <h3>{company}</h3>

    {positions.map((position) => (
      <div key={position.title} className="position">
        <h4>
          {position.title}
          <span className="time-frame">
            {position.start_date} - {position.end_date}
          </span>
        </h4>

        {position.description?.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    ))}
  </section>
);

export default Experience;

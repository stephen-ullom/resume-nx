import { FunctionComponent, ReactNode } from 'react';

import './section.component.scss';

export interface SectionProperties {
  title: string;
  children: ReactNode;
}

const Section: FunctionComponent<SectionProperties> = ({ title, children }) => (
  <section className="section">
    <h2 className="title">{title}</h2>
    <div className="items">{children}</div>
  </section>
);

export default Section;

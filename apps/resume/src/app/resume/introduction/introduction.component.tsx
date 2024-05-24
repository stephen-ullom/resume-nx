import { FunctionComponent } from "react";

import "./introduction.component.scss";

interface IntroducionProperties {
  name: string;
  jobTitle: string;
  introduction: string;
}

const Introduction: FunctionComponent<IntroducionProperties> = ({
  name,
  jobTitle,
  introduction,
}) => (
  <section className="introduction">
    <div className="flex">
      <h1 className="name">{name}</h1>
      <h2 className="job-title">{jobTitle}</h2>
    </div>

    <p className="body">{introduction}</p>
  </section>
);

export default Introduction;

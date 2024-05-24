import { FunctionComponent } from "react";

import "./list.component.scss";

export interface ListProperties {
  items?: string[];
}

const List: FunctionComponent<ListProperties> = ({ items }) => (
  <ul className="list">
    {items?.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default List;

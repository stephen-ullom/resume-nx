import { FunctionComponent } from "react";

import "./data-list.component.scss";

export interface DataListProperties {
  list: {
    name: string;
    value: string;
  }[];
}

const DataList: FunctionComponent<DataListProperties> = ({ list }) => (
  <dl className="data-list">
    {list.map((item) => (
      <div key={item.name} className="row">
        <dt>{item.name}</dt>
        <dd>{item.value}</dd>
      </div>
    ))}
  </dl>
);

export default DataList;

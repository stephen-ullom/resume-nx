import { FunctionComponent, ReactNode } from 'react';

import './page.component.scss';

export interface PageProperties {
  children: ReactNode;
  backgroundColor?: string;
}

const Page: FunctionComponent<PageProperties> = ({
  children,
  backgroundColor,
}) => {
  return (
    <div
      className="page"
      style={{ backgroundColor: backgroundColor ?? 'white' }}
    >
      {children}
    </div>
  );
};

export default Page;

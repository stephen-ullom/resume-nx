import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { routeFromName } from '../pages.component';

import './page-controls.component.scss';

export interface PageControlsProperties {
  pageNames: string[];
}

const PageControls: FunctionComponent<PageControlsProperties> = ({
  pageNames,
}) => {
  let currentIndex = 0;
  let nextPage;

  const location = useLocation();
  const pages = pageNames.map((name) => {
    return { name, route: routeFromName(name) };
  });
  const currentPage = pages.find((page) => page.route === location.pathname);

  if (currentPage) currentIndex = pages.indexOf(currentPage);

  if (pages[currentIndex + 1]) {
    nextPage = pages[currentIndex + 1];
  } else {
    nextPage = pages[0];
  }

  if (currentPage?.name) document.title = currentPage.name;

  const print = () => {
    window.print();
  };

  return (
    <div className="page-controls">
      <button onClick={print} className="print-button" type="button">
        Print
      </button>
      <div className="divider"></div>
      <Link to={nextPage.route} className="page-link">
        {nextPage?.name}
      </Link>
    </div>
  );
};

export default PageControls;

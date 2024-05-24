import { FunctionComponent, ReactNode } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import PageControls from './page-controls/page-controls.component';
import Page from './page/page.component';

export interface PagesProperties {
  pages: {
    name: string;
    component: ReactNode;
  }[];
}

export function routeFromName(name: string) {
  return '/' + name.replace(' ', '-').toLowerCase();
}

export const Pages: FunctionComponent<PagesProperties> = ({ pages }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={routeFromName(pages[0].name)} />}
        />

        {pages.map((page, index) => (
          <Route
            key={index}
            path={routeFromName(page.name)}
            element={<Page>{page.component}</Page>}
          ></Route>
        ))}
      </Routes>
      <PageControls pageNames={pages.map((page) => page.name)} />
    </BrowserRouter>
  );
};

export default Pages;

import { Pages } from '@resume-nx/pages';
import { FunctionComponent } from 'react';

import Resume from './resume/resume.component';

import './app.component.scss';

export const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Pages
        pages={[
          {
            name: 'Resume',
            component: <Resume />,
          },
          {
            name: 'Cover Letter',
            component: <Resume />,
          },
        ]}
      />
    </div>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './Components/App';

const AppParent = () => {
  return (
    <BrowserRouter>
      <App />
      {/* <Switch> */}
        {/* <Route path="/:reference" children={ <App /> } /> */}
        {/* <Route path="/" children={ <App/> } /> */}
      {/* </Switch> */}
    </BrowserRouter>
  );
}

ReactDOM.render(
  <AppParent />,
  document.getElementById('root')
);

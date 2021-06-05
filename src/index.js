import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Menu, JsonEditor } from './Components/App';

const App = () => {
  const [ currentRef, setCurrentRef ] = React.useState(null);

  return (
    <BrowserRouter>
      {
        currentRef === null ? <Menu setCurrentRef={setCurrentRef} />
                            : <JsonEditor reference={currentRef} />
      }
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

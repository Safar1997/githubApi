import React, { useEffect, useState } from 'react';
import ListOfProjects from './components/ListOfProjects';
import Navigation from './components/Navigation';
import './App.css';
import * as API from './servise/api';

import 'antd/dist/antd.css';

const App = () => {
  const [list, setList] = useState();

  useEffect(
    () => {
      API.getProjects().then((data) => setList(data));
    },
    [],
  );

  // API.getProjects().then(console.log);
  return (
    <>
      <Navigation />
      <div style={{ padding: '40px', display: 'flex', maxWidth: '1440px' }}>
        <div style={{ flexGrow: '1' }}>
          <ListOfProjects data={list} />
        </div>
      </div>
    </>
  );
}

export default App;

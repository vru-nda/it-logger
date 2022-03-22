import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    //intialize Materilize js
    M.AutoInit();
  });
  return (
    <div className='App'>
      <h1>Hey there</h1>
    </div>
  );
};

export default App;

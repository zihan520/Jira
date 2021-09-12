import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { ProjectList } from './screens/project-list';
// import PIndex  from './screens/PIndex'
import {TsReactTest} from './screens/TryUseArray';
import {useAuth} from 'context/auth-context';
import UnauthenticatedApp from './unauther-app';
import {AuthenticatedApp} from './authenticated-app';
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user?<AuthenticatedApp/>:<UnauthenticatedApp />}
    </div>
  );
}

export default App;

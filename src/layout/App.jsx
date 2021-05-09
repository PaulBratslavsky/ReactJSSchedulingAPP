import React from 'react'

import Dashboard from "../components/Dashboard/Dashboard";
import MainView from "../components/MainView/MainView";
import Navigation from "../components/Navigation/Navigation";

function App() {
  const [showForm, setShowForm] = React.useState(false)
  return (
    <div id="main-app-container">
      <Navigation setShowForm={setShowForm} />
      <MainView>
        <Dashboard showForm={showForm} setShowForm={setShowForm} />
      </MainView>
    </div>
  );
}

export default App;

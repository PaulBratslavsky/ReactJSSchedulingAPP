import React from "react";

import Dashboard from "../components/Dashboard/Dashboard";
import MainView from "../components/MainView/MainView";
import Navigation from "../components/Navigation/Navigation";

function App() {
  const [showForm, setShowForm] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  function handleSelectedEvent(event) {
    setSelectedEvent(event);
    setShowForm(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null)
    setShowForm(true)
  }

  function handleCloseForm() {
    setSelectedEvent(null)
    setShowForm(false)
  }


  console.log(selectedEvent, "SELECTED");

  return (
    <div id='main-app-container'>
      <Navigation setShowForm={handleCreateFormOpen} />
      <MainView>
        <Dashboard
          showForm={showForm}
          handleCloseForm={handleCloseForm}
          handleSelectedEvent={handleSelectedEvent}
          selectedEvent={selectedEvent}
        />
      </MainView>
    </div>
  );
}

export default App;

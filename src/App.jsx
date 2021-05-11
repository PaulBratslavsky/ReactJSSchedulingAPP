import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Events from "./pages/Events";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Posts from "./pages/Posts";

function App() {
  const [showForm, setShowForm] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  function handleSelectedEvent(event) {
    setSelectedEvent(event);
    setShowForm(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setShowForm(true);
  }

  function handleCloseForm() {
    setSelectedEvent(null);
    setShowForm(false);
  }

  return (
    <div id='main-app-container'>
      <Layout handleCreateFormOpen={handleCreateFormOpen}>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/events' exact>
              <Events
                showForm={showForm}
                handleCloseForm={handleCloseForm}
                handleSelectedEvent={handleSelectedEvent}
                selectedEvent={selectedEvent}
              />
            </Route>
            <Route path='/events/:id'>
              <EventDetails />
            </Route>
            <Route path='/posts' exact>
              <Posts />
            </Route>
            <Route path='/posts/:id'>
              <h1>Posts</h1>
            </Route>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;

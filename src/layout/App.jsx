import Dashboard from "../components/Dashboard/Dashboard";
import MainView from "../components/MainView/MainView";
import Navigation from "../components/Navigation/Navigation";

function App() {
  return (
    <div id="main-app-container">
      <Navigation />
      <MainView>
        <Dashboard />
      </MainView>
    </div>
  );
}

export default App;

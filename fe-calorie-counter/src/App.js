
// import 'antd/es/spin/style/css';

import './App.css';
import './components/Components.css';
import CreateFoodEntry from './components/CreateFoodEntry';
import Router from './components/Router';
import ViewFoodEntry from './components/ViewFoodEntry'
// import Temp from './components/Temp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CreateFoodEntry /> */}
        <Router />
        {/* <Temp /> */}
        {/* <ViewFoodEntry /> */}
        {/* <CircularProgress color='warning' /> */}
      </header>
    </div>
  );
}

export default App;

import { Provider } from 'react-redux';
import './App.css';
import Countries from './components/Countries';
import CountryData from './components/CountryData';
import store from './redux/configurationStore';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={ <Countries/> } />
        <Route path="/:country_name" element={ <CountryData/> } />
      </Routes>
    </Provider>
  );
}

export default App;

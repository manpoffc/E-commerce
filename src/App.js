import './App.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router'
import Filter from './components/Filter';
import Content from './components/Content';

function App() {
  return (
    <div className="">
    <Header />
    <Filter />
    <Content />
    </div>
  );
}

export default App;

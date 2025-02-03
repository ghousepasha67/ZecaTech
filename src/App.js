import './App.css';
import './output.css';
import './Custom.css';
import StickyNavbar from './components/common/StickyNavbar.jsx';
import Router from './Router.jsx';


function App() {
  return (
    <div className="App">
      <StickyNavbar></StickyNavbar>
      <Router></Router>
    </div>
  );
}

export default App;

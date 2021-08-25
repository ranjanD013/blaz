
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import './App.css'
import Header from './components/Header';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

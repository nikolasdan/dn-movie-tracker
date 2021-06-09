import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Movie from '../pages/Movie';
import Watchlist from '../pages/Watchlist';
import History from '../pages/History';
import Recommendations from '../pages/Recommendations';

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/search/:terms">
            <Search />
          </Route>
          <Route path="/movies/:movieId" exact>
            <Movie />
          </Route>
          <Route path="/watchlist" exact>
            <Watchlist />
          </Route>
          <Route path="/history" exact>
            <History />
          </Route>
          <Route path="/recommendations" exact>
            <Recommendations />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

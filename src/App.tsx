import 'materialize-css/dist/css/materialize.min.css'
import Search from './components/pages/Search'
import Posts from './components/Posts';
import PostsState from './context/github/PostState'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import NotFound from './components/NotFound';
import PostDetail from './components/pages/PostDetail';
import About from './components/pages/About';
import M from "materialize-css"
import { useEffect } from 'react';
import NavBarItem from './components/pages/NavBar';

function App() { //https://www.carlrippon.com/fetch-with-async-await-and-typescript/
  useEffect(() => {
    M.AutoInit();
  }, [])
  return (
    <>
      <PostsState>
      <Router>
        <nav>
          {/* <Search/> */}
          <NavBarItem/>
        </nav>
        <section>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/about" component={About} />
            <Route exact path="/post/:id" component={PostDetail} />
            <Route component={NotFound} />
          </Switch>
        </section>
        </Router>
      </PostsState>
    </>    
  );
}

export default App;

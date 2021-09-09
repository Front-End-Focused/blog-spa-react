import PostsList from "./components/PostsList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostPage from "./components/PostPage"
import AuthorPage from "./components/AuthorPage";

function App() {
  return (
    <div className="container">
      <Router>
        <header className="text-center mt-5 mb-5">
          <h1 className="text-uppercase pb-4">
            <Link to="/">Blog</Link>
          </h1>
          <hr />
        </header>

        <Switch>
          <Route exact path="/">
            <PostsList />
          </Route>
          <Route path="/post/:id">
            <PostPage />
          </Route>
          <Route path="/author/:id">
            <AuthorPage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

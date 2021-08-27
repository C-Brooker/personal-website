import BlogInput from "./components/pages/BlogInput";
import BlogDisplay from "./components/pages/BlogDisplay";
import AboutMe from "./components/pages/AboutMe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <BlogDisplay />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/blog-input">
            <BlogInput />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

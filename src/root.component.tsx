import Login from './Login'
import Signup from './Signup';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <Router>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <div className="absolute bottom-5 text-center">
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
          <p>
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </Router>
  );
}

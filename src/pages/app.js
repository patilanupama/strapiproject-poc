import * as React from "react"
import Dashboard from "../components/dashboard/dashboard"
import { Router } from "@reach/router"
import About from "../components/about/about";
import EventCardDetails from "../components/event/event-details";
import Layout from "../components/layout/layout";
import EventCard from "../components/event/eventCard";
import EventCategories from "../components/event/eventCategory";
import Login from "../components/auth/login";
import Register from './../components/auth/register';
import PrivateRoute from "../components/privateRoute";

const App = ({ children }) => (
  <Layout>

      <Router>
        <Login path="/"/>
        <Register path="/app/register"/>
        <PrivateRoute path="/app/dashboard" component={Dashboard}/>
        <PrivateRoute path="/app/about" component={About}/>
        <PrivateRoute path="/app/eventCard" component={EventCard}/>
        <PrivateRoute path="/app/eventCategory" component={EventCategories}/>
        <PrivateRoute path="/app/event-details/:id" component={EventCardDetails}/>

        {/* <About path="/app/about"/>
        <EventCard path="/app/eventCard"/>
        <EventCategories path="/app/eventCategory"/>
        <EventCardDetails path="/app/event-details/:id"/> */}
      </Router>
      </Layout>
    
  );

export default App
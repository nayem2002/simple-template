import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Error from './Error';
import MoneySendingProccess from './MoneySendingProccess';
import Nevbar from '../Components/Nevbar';
import Scroll from '../Components/scroll/Scroll';

const MeinHome = () => {
  return (
    <>
      <Scroll />
      <Nevbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/moneysendingproccess"
          component={MoneySendingProccess}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default MeinHome;

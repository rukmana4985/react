import React, { Component } from 'react';
import { Switch , Route, BrowserRouter} from 'react-router-dom';
import Home from '../page/Home';
import Article from '../page/Article';
import About from '../page/About';
class Main extends Component {
    render() {
      return (
          <main>
            <Switch>
                <Route exact path='/Home' component={Home}></Route>
                <Route path='/Article' component={Article}></Route>
                <Route path='/About' component={About}></Route>
            </Switch>
          </main>
        );
    }
}

export default Main;
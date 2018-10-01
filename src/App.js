import React, { Component } from 'react';
import Main from './js/layout/Main';
import Menu from './js/layout/Menu';
import Footer from './js/layout/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Main ></Main>
        <Menu ></Menu>
        {/* <Footer></Footer> */}
     </div>
    );
  }
}

export default App;

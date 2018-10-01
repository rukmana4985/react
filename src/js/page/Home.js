import React, {Component} from 'react';
import Img from '../../img/contoh.svg';

class Home extends Component {

    render() {
        
        const MarginPage ={
            marginTop : "30px"   
        }
        return (
        <div class="row featurette" style={MarginPage}>
           
            <div class="col-md-7">
                {/* { match.params.name } */}
                
                <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src={Img}/>
                {/* <img class="featurette-image img-fluid mx-auto" data-src={Contoh} alt="Generic placeholder image" /> */}
            </div>
         </div>
      );
    }
  }
  
  export default Home;
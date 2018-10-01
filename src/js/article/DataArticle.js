
import React, { Component } from 'react';
import Api from '../../api/Api';
import { Link } from 'react-router-dom';


export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items : [],
        isLoaded: false,
    }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json =>{
          this.setState({
              isLoaded:true,
              items:json,
          })
      })
  }
  render() {
      // const { title } = this.props;
      const containerStyle ={
        marginTop : "60px"
      }

      var {isLoaded,items} = this.state;

        if(!isLoaded){
            return <div>Loading .... </div>
        }else{
            return (
              // <div class="col-md-4" style={containerStyle}>
              //    {
              //     Api.all().map(p => (
              //       <h2 key={p.number} title={p.name}></h2>
              //     ))
              //   }
              // </div>


              // <div class="container">
              //   <div class="row" >
              //   {
              //     Api.all().map(p => (
              //     <div class="col-lg-4" style={containerStyle}>
              //     <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt={p.name} width="140" height="140"/>
              //       <h1>{p.name}</h1>
              //       <p>Bismillah </p>
              //       <Link class="btn btn-secondary" href="#" role="button" to={`/Article/${p.number}`}>
              //         {p.number}
              //       </Link>
              //     </div>
              //     ))
              //   }
              //   </div>
              // </div>
            
                <div class="container">
                  <div class="row" >
                    {items.map(item =>(


                    <div class="col-lg-4" style={containerStyle}>
                    <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt={item.name} width="140" height="140"/>
                      <h1>{item.name}</h1>
                      <p>Bismillah </p>
                      <Link class="btn btn-secondary" href="#" role="button" to={`/Article/${item.id}`}>
                        {item.id}
                      </Link>
                    </div>
                    ) )}
                  </div>
                </div>
            
            )
        }
  }
}
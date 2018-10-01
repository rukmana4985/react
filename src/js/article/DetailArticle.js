import React, {Component} from 'react'
// import PlayerAPI from '../api'
import Api from '../../api/Api';
import { Link } from 'react-router-dom';
import Img from '../../img/contoh.svg';

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.

class DetailArticle extends Component {
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
 
    render () {
    // const DetailArticle = (props) => {
        const player = Api.get(
            parseInt(this.props.match.params.number, 10)
        )

        const MarginPage ={
            marginTop:"50px"
        }

        

        if (!player) {
            return <div>Sorry, but the player was not found</div>
        }
        var {isLoaded,items} = this.state;
        if(!isLoaded){
            return <div>Loading .... </div>
        }else{
            return (
                <div class="row featurette" style={MarginPage}>
                    
                    <div class="col-md-7">
                        <h2 class="featurette-heading">{player.name} <span class="text-muted">Apa Yang Anda Pikirkan ? </span></h2>
                        <p class="lead">{player.desc}</p>
                    </div>
                    <div class="col-md-5">
                    <img class="featurette-image img-fluid mx-auto" src={Img}/>
                        {/* <img class="featurette-image img-fluid mx-auto" data-src={Contoh} alt="Generic placeholder image" /> */}
                    </div>
                    <div class="col-md-12" style={MarginPage}>
                        <Link class="btn btn-secondary" to='/Article'>Back</Link>
                    </div>
                    
                </div>

                // <div>
                //   <h1>{player.name} (#{player.number})</h1>
                //   <h2>Position: {player.position}</h2>
                //   <Link class="btn btn-secondary" to='/Article'>Back</Link>
                // </div>
            )
        }
    }
}
export default DetailArticle

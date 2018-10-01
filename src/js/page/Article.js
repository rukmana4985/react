import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import DataArticle from '../article/DataArticle';
import DetailArticle from '../article/DetailArticle';

class Article extends Component{
    render(){
        return(
            <Switch >
                <Route exact path='/Article' component={DataArticle}></Route>
                <Route path='/Article/:number' component={DetailArticle}></Route>
            </Switch>
        );
    }
}

export default Article
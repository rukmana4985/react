import React, {Component} from 'react';
import Api from '../../api/Api';
import {Link} from 'react-router-dom';

class Menu extends Component{
    render(){
        return (
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                    {
                    Api.allmenu().map(p => (
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                        <span data-feather="Home"></span>
                        <Link to={`/${p.name}`}>{p.name}</Link>
                        </a>
                    </li>
                    ))
                    }
                    {/* <li class="nav-item">
                        <a class="nav-link active" href="#">
                        <span data-feather="featured"></span>
                        <Link to='featured'>Featured</Link>
                        </a>
                    </li> */}
                    </ul>     
                </div>
            </nav>
        )
    }
}

export default Menu;
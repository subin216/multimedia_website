import React, {Component} from 'react';
import classes from './DemoNav.module.css'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class DemoNav extends Component{
    render(){
        return(
            <div className={classes.DemoNav}>
                    <ListGroup>
                    <ListGroupItem style = {liStyle} >
                        DemoList
                    </ListGroupItem>
                    <ListGroupItem>
                        <NavLink to="/arithmetic_encoding" >Arithmetic Encoding</NavLink>
                    </ListGroupItem>
                    <ListGroupItem>
                        <NavLink to="/huffman">Huffman Coding </NavLink>
                    </ListGroupItem>
                    <ListGroupItem>
                        <NavLink to="/jpeg">JPEG </NavLink>
                    </ListGroupItem>
                    </ListGroup>
            </div>
        );
    }
}

const liStyle =  {
    fontSize: '20px',
    padding: '10px',
}

export default DemoNav;
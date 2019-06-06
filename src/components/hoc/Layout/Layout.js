import React, {Component} from 'react'
import { directive } from '@babel/types';
import classes from './Layout.css'
import GogleMap from '../../maps/GoogleMap/GogleMap'

class Layout extends Component{
    render(){
        return(
            <div className={classes.Layout}>
               <ul>
                   <li></li>
                   <li><GogleMap/></li>
               </ul>
            </div>
        )
    }

}


export default Layout 
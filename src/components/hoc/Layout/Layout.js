import React, {Component} from 'react'
import { directive } from '@babel/types';
import classes from './Layout.css'
import GogleMap from '../../maps/GoogleMap/GogleMap'
import MenuToggle from '../../Navigaton/MenuToogle/MenuToggle'
import Drawer from '../../Navigaton/Drawer/Drawer'


class Layout extends Component{

    state = {
        menu: false
    }

    toggleMenuHandler = () =>{
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () =>{
        this.setState({
            menu: !this.state.menu
        })
    }


    render(){

        return(
            <div className={classes.Layout}>
            <Drawer 
                 isOpen = {this.state.menu}
                 onClose = {this.menuCloseHandler}
            />
            <MenuToggle
                onToggle={this.toggleMenuHandler}
                isOpen = {this.state.menu}
            />
                    <main>
                      <GogleMap/>
                    </main>
            </div>
        )
    }

}


export default Layout 
import React, {Component} from 'react'
import classes from './Drawer.css'
import BackDrop from '../BackDrop/BackDrop'
import Input from '../../UI/Input/Input'

class Drawer extends Component{
    render(){
        const cls = [
            classes.Drawer,

        ]

        if(!this.props.isOpen){
            cls.push(classes.close)
        }

        return(
            <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    <li><Input label={"Поиск"} /></li>
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li><button>Построить маршрут</button></li>
                </ul>
            </nav>
            { this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
            )
    }
  
}

export default Drawer

import React, {Component} from 'react'
import classes from './Drawer.css'
import BackDrop from '../BackDrop/BackDrop'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

class Drawer extends Component{

    changeInputHandler=(event)=>{
        console.log(event.target.value)
    }
    
    render(){
        const cls = [
            classes.Drawer,

        ]

        const clsDeleteIcon = [
            'fa', 'fa-times', classes.delete
        ]

        if(!this.props.isOpen){
            cls.push(classes.close)
        }

        return(
            <React.Fragment>
            <nav className={cls.join(' ')}>
             <div>
                <form action="">
                    <Input label={"Поиск"} placeholder={"Поиск на карте"} onChange={this.changeInputHandler}/>
                </form>
             </div>
             <div>
                <ul className={classes.listAdress}>
                    <li><a>г.Ульяновск</a><i className={clsDeleteIcon.join(' ')}></i></li>
                    <li><a>г.Димитровград</a><i className={clsDeleteIcon.join(' ')}></i></li>
                    <li><a>г.Самара</a><i className={clsDeleteIcon.join(' ')}></i></li>
                </ul>
             </div>
            </nav>
            { this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
  
}

export default Drawer

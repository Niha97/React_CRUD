import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/Actions/todoItems';

import classes from './Todo.css';

class Todo extends Component {

  state={
    item: ''
  }
  componentDidMount(){
     this.props.onFetchTodos();
    }
  
  componentDidUpdate(){
  }


  inputHandler = (e) =>{
    this.setState({item: e.target.value});
  }

  onClickHandler = () => {
    const item={
      todo: this.state.item,
    }
    this.props.onAddTodos(item);
    this.setState({item:''});
  }


  render() {
    return (
    <div>
        <div className={classes.inputADD}>
            <input type="text" value={this.state.item} onChange={(e) => this.inputHandler(e)} placeholder="Enter todo item" />
            <button disabled={!this.state.item} onClick={this.onClickHandler}>ADD</button>
        </div>
      
        
     
     </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.todoItems);
  return{
    todos: state.todoItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodos: item => dispatch(actions.addTodos(item)) ,
    onFetchTodos: () => dispatch(actions.fetchTodos())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

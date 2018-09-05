import *  as types from './types';
import axios from '../../axios-items';

export const addTodos = (item) =>{
    return (dispatch) => {        
        return axios.post('./todoItems.json', item )
        .then(response=>{
            dispatch(addTodosSuccess(response.data))
        })
        .catch(error=>{
            console.log(error);           
        });
        
    }

}

export const addTodosSuccess = (item) => {
    return {
      type: types.ADD_TODOS_SUCCESS,
      item
    }
  };


  export const fetchTodos = () =>{
    return (dispatch) => {        
        return axios.get('./todoItems.json' )
        .then(response=>{
            const res = Object.keys(response.data).map((key) =>{
              return response.data[key].todo;
            });
            console.log(res);
            dispatch(fetchTodosSuccess(res));
        })
        .catch(error=>{
            console.log(error);           
        });
        
    }

}

export const fetchTodosSuccess = (items) => {
    return {
      type: types.FETCH_TODOS_SUCCESS,
      items: items
    }
  };

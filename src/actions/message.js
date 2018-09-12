import { SET_MESSAGE } from '../types';
import axios from 'axios';
const baseURL= 'http://localhost:3000/data.json'

export const setMessage = () => {
  return dispatch => {
    axios.get(baseURL)
      .then((response)=> {
        dispatch({
          type: SET_MESSAGE,
          payload: {
            response
          }
        })
      })
      .catch((error)=> {
        console.log(error);
      });
    
  }
}
import {messages} from './constants';
import {GET_MESSAGE, GET_MESSAGE_SUCCESS,GET_MESSAGE_ERROR} from './constants';

export const getInbox = () => async dispatch => {
    try{
        dispatch({type: GET_MESSAGE});
        setTimeout(()=>{dispatch({type: GET_MESSAGE_SUCCESS, payload: messages})}, 2000);
    } catch (error){
        dispatch({type: GET_MESSAGE_ERROR})
    }
}
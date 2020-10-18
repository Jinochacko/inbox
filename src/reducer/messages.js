import {GET_MESSAGE, GET_MESSAGE_SUCCESS,GET_MESSAGE_ERROR} from '../common/constants';

const initialState = {
  messages: {
    data: [],
    isFetching: false,
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        messages: { isFetching: true,}
      };
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: {
          data: action.payload,
          isFetching: false,
        }
      };
    case GET_MESSAGE_ERROR:
      return {
        ...state,
        messages: {
          isFetching: false,
        }
      };

    default:
      return state;
  }
};
import {GET_SIMLIST, GET_SIMLIST_SUCCESS, GET_SIMLIST_ERROR} from '../common/constants';

const initialState = {
  simList: {
    data: {
      data: [],
      operators: [],
      plans: []
    },
    isFetching: false,
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SIMLIST:
      return {
        ...state,
        simList: { isFetching: true,}
      };
    case GET_SIMLIST_SUCCESS:
      return {
        ...state,
        simList: {
          data: {...action.payload},
          isFetching: false,
        }
      };
    case GET_SIMLIST_ERROR:
      return {
        ...state,
        simList: {
          isFetching: false,
        }
      };

    default:
      return state;
  }
};
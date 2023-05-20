import { FETCH_DATA} from '../actions/actions';


const initialState={
    quizeData:[],
}

const fetchDataReducer = (state =initialState, action:any) => {
    
    switch(action.type) {
        case FETCH_DATA:
          return {
            ...state,
            quizeData:action.payload
            
          };
              
        default:
            return state;
      }
  };
export default fetchDataReducer
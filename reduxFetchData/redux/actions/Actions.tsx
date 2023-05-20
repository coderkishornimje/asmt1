export const FETCH_DATA = 'FETCH_DATA';
export const GET_ID = 'GET_ID';
export const SINGLE_DATA = 'SINGLE_DATA';
export const INPUT_DATA = 'INPUT_DATA';

export const fetchData = (payload: any) => {
  return {
    type: FETCH_DATA,
    payload: payload,
  };
};

export const getId = (payload: any) => {
  return {
    type: GET_ID,
    payload: payload,
  };
};

export const singleProduct = (payload: any) => {
  return {
    type: SINGLE_DATA,
    payload: payload,
  };
};

export const inputHandler = (payload: any) => {
  return {
    type: INPUT_DATA,
    payload: payload,
  };
};

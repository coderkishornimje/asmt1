
export const FETCH_DATA='FETCH_DATA';


export const fetchData=(payload:any)=>{

 return{
    type:FETCH_DATA,
    payload:payload
 }

}

import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA }  from './../frontRedux/frontTypes'

export default async function(){
//should return data and loading state..
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

let result = await promise;

return result;

}
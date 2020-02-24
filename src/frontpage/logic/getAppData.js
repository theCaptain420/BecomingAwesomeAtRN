import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA } from './../frontRedux/frontTypes'

export default function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve([SUCCESS_LOADING_DATA, "tsmlols"])   // Yay! Everything went well!
    }, 1000)
  });

}
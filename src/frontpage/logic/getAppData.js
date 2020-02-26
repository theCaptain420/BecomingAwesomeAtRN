import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA } from './../frontRedux/frontTypes'

export default async function () {
  /*return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve([SUCCESS_LOADING_DATA, "tsmlols"])   // Yay! Everything went well!
    }, 1000)
  });
*/
/*
  return new Promise((resolve, reject) => {
    fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
      .then((dataList) => {console.log(dataList.json());resolve([SUCCESS_LOADING_DATA, dataList.json()])})
      .catch(error => reject([FAILED_LOADING_DATA,error]))
  })
  */

  /*
  await fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
  .then((dataList) => {console.log(dataList.json())})
  .catch(error => console.log(error))
*/
try {
  const retrievedItem = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json");
  const items = retrievedItem.json()
  console.log(items)
  return Promise.resolve([SUCCESS_LOADING_DATA, items]);
  } catch (error) {
  return Promise.reject(error)
  }

}
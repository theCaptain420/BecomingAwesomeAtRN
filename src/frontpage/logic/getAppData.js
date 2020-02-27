import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA } from './../frontRedux/frontTypes'

export default async function () {
  try {
    const retrievedItem = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json");
    const items = await retrievedItem.json()
    console.log(items)
    return Promise.resolve([SUCCESS_LOADING_DATA, items]);
  } catch (error) {
    return Promise.reject([FAILED_LOADING_DATA, error])
  }
}
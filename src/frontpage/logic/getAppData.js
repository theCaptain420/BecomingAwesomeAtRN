import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA } from './../frontRedux/frontTypes'

export default async function () {
  try {
    const retrievedItem = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json");
    const items = await retrievedItem.json()
    return Promise.resolve([SUCCESS_LOADING_DATA, items]);
  } catch (error) {
    return Promise.reject([FAILED_LOADING_DATA, error])
  }
}

function getArticles(){

}

function getAmountOfArticleNumbers(itemArray, amount, startingPos){
  let finalArray = []
  for(let i = startingPos; i<amount; i++){
      finalArray.push(itemArray[i]);
  }

  return finalArray;

}
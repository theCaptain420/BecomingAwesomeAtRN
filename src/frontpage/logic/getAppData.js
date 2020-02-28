import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA } from './../frontRedux/frontTypes'

export default async function () {
  try {
    const retrievedItem = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json");
    const allItems = await retrievedItem.json()
    const cutDownItems = await getAmountOfArticleNumbers(allItems,10,1);
    const finalArticles = await getArticles(cutDownItems);
    return Promise.resolve([SUCCESS_LOADING_DATA, finalArticles]);
  } catch (error) {
    return Promise.reject([FAILED_LOADING_DATA, error])
  }
}

async function getArticles(itemArray){
  const articles = await Promise.all(itemArray.map(id =>
    fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json').then(resp => resp.json())
  )).then(values => values)
  
 return articles;


}

function getAmountOfArticleNumbers(itemArray, amount, startingPos){
  let finalArray = []
  for(let i = startingPos; i<amount; i++){
      finalArray.push(itemArray[i]);
  }

  return finalArray;

}
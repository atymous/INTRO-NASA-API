// need to implement a variable to store the button
let clickBtn = document.querySelector("#click-apod")

//reminds me of web automation using Selenium with Java
// similar to waitUntil() use event listener
clickBtn.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})

// implement sendAPIRequest() being called above
// this function will send the request to retrieve data from NASA
// API using "fetch", where we will then do something with that data.
// https://dmitripavlutin.com/javascript-fetch-async-await/
// asynchronous are used with API's to fetch data 
async function sendApiRequest(){
  // now I kind of know... still learning

  /* NEED TO ENTER YOUR OWN KEY FROM WHEN CREATING YOUR NASA API ACCOUNT */
  let MY_KEY = "<YOUR OWN KEY>"
  
  // fetch is going to send the API request
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${MY_KEY}`);
  // if status == 200 then we are good!
  // 400 would mean that something went wrong
  console.log(response)

  // store the data from response
  let data = await response.json()
  console.log(data)

  // call handleApiData() to utilize data
  handleApiData(data)

}

// implement function that will handle the data fetched
function handleApiData(data){
  // use query selector to store info in css
  document.querySelector("#content").innerHTML = data.explanation
  // use '+=' since we are including in order
  // img from APOD is labeled as "url"
  document.querySelector("#apod-image").innerHTML += `<img src="${data.url}">`
}
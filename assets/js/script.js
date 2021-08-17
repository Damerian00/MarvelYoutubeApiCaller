// var publicKey = "cf666bb77e15be90b02e3679ffa84cf0";
// var privateKey = "d50814d942d89079bc056b8c2cb93425a4258ede";
// var marvelCharacterUrl = `http://gateway.marvel.com/v1/public/comics?apikey=${publicKey}`;


// fetch(marvelCharacterUrl)
//     .then(async function (response) {
//         if(response.ok){
//         const marvelCharacterData = await response.json();
//             console.log(marvelCharacterData);
//     }  else {
//         response.text().then(marvelCharacterData => {
//             console.log(marvelCharacterData);
//         })
//     }
// });




let searchQuery = 'Cyclops';
let ytApiKey = "AIzaSyDiOZ44nzVN6XsP85hiAU76fyZkNyw7hN8";
// let ytUrl = `https://youtube.googleapis.com/youtube/v3/videos?key=${ytApiKey}`;
let ytUrl = `https://youtube.googleapis.com/youtube/v3/videos?q=${searchQuery}&part=id,topicDetails,contentDetails&chart=mostPopular&key=${ytApiKey}`;
fetch(ytUrl)
.then(function (response) {
    if (response.ok) {
       
        response.json().then(ytData => {
           console.log(ytData);
            
        })
 
    }   else {
        response.text().then(ytData => {
            console.log(ytData);
             
         })
    }
  }  )  

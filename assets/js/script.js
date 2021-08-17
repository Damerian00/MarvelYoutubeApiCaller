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




let searchQuery = 'SpiderMan';
let ytApiKey = "AIzaSyDiOZ44nzVN6XsP85hiAU76fyZkNyw7hN8";
// let ytUrl = `https://youtube.googleapis.com/youtube/v3/videos?q=${searchQuery}&part=snippet&chart=mostPopular&key=${ytApiKey}`;
let ytUrl = `https://youtube.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&part=snippet&chart=mostPopular&key=${ytApiKey}`;
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

  
  /* 
  let video = '';
  let videos = document.QuerySelctor('#vids');

  array.forEach(element => {
      
  });
  data.items */

  /*
  item.id.videoId
  https://www.youtube.com/watch?v=Y1J9_9-vNcU */

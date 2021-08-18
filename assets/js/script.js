const publicKey = "cf666bb77e15be90b02e3679ffa84cf0";
var searchBox = "Storm";
var marvelCharacterUrl = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchBox}&apikey=${publicKey}`;

fetch(marvelCharacterUrl)
    .then(async function (response) {
        if(response.ok){
        const marvelCharacterData = await response.json();
            console.log(marvelCharacterData);
    }  else {
        response.text().then(marvelCharacterData => {
            console.log(marvelCharacterData);
        })
    }
});

function showCharacterImage () {
    document.getElementById("Storm").textContent = results[0].name;
    console.log(results[0].name);
    var img = document.createElementby("img");
    img.src = results[0].thumbnail.path + " .jpg";
    document.getElementById("pic").appendChild(img);

};


//document.getElementById("search").addEventListener("click", searchBox);
// let searchQuery = 'Cyclops';
// let ytApiKey = "AIzaSyDiOZ44nzVN6XsP85hiAU76fyZkNyw7hN8";
// // let ytUrl = `https://youtube.googleapis.com/youtube/v3/videos?key=${ytApiKey}`;
// let ytUrl = `https://youtube.googleapis.com/youtube/v3/videos?q=${searchQuery}&part=id,topicDetails,contentDetails&chart=mostPopular&key=${ytApiKey}`;
// fetch(ytUrl)
// .then(function (response) {
//     if (response.ok) {
       
//         response.json().then(ytData => {
//            console.log(ytData);
            
//         })
 
//     }   else {
//         response.text().then(ytData => {
//             console.log(ytData);
             
//          })

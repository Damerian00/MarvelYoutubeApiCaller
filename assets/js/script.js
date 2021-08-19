const publicKey = "cf666bb77e15be90b02e3679ffa84cf0";
var searchBox; 
let charVid = document.querySelector('#charVid');
let charLinks = document.querySelector('#charLinks');
let ytApiKey = "AIzaSyDiOZ44nzVN6XsP85hiAU76fyZkNyw7hN8";


function searchAPI () {
    searchBox = document.querySelector("#characterInput").value;
    fetch(marvelCharacterUrl)
    console.log(searchBox);
    var marvelCharacterUrl = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchBox}&apikey=${publicKey}`;
    let ytUrl = `https://youtube.googleapis.com/youtube/v3/search?q=${searchBox},marvel&type=video&part=snippet&chart=mostPopular&key=${ytApiKey}`;
fetch(marvelCharacterUrl)
    .then(async function (response) {
        if(response.ok){
            const marvelCharacterData = await response.json();
            console.log(marvelCharacterData);
            console.log(marvelCharacterData.data.results[0].thumbnail.path + "/portrait_uncanny.jpg")
            document.querySelector("#characterImg").setAttribute("src", marvelCharacterData.data.results[0].thumbnail.path + "/portrait_uncanny.jpg") 
            document.querySelector("#charBio").textContent = marvelCharacterData.data.results[0].description;

            fetch(ytUrl)
            .then(function (response) {
                if (response.ok) {
                   
                    response.json().then(ytData => {
                       console.log(ytData);
                       if (charVid.hasChildNodes()){
                        while (charVid.firstChild) {
                            charVid.removeChild(charVid.firstChild);
                          }
                    }else{

                       }
                       for (let i = 0; i < ytData.items.length; i++) {
                           let video = ytData.items[i].id.videoId
                           console.log(video);
                           let link =  `https://www.youtube.com/watch?v=${video}`;
                           let vTag = document.createElement('iframe');
                           vTag.classList = "query p-2";
                           vTag.src = `https://www.youtube.com/embed/${video}`;
                           let aTag = document.createElement('a');
                           aTag.classList = "p-2 bg-secondary text-center";
                           charVid.appendChild(vTag);
                           aTag.href = link;
                           aTag.setAttribute("target", "_blank")
                           aTag.innerHTML = searchBox.toUpperCase();
                           charLinks.appendChild(aTag); 
            
                           console.log(link);
                           
                           
                       }
                    })
                    
                }   else {
                    response.text().then(ytData => {
                        console.log(ytData);
                        
                    })
                }
            }  )  
        }  else {
            response.text().then(marvelCharacterData => {
            console.log(marvelCharacterData);
        })
    }
});
}

document.querySelector("#searchCharacter").addEventListener("click", searchAPI)
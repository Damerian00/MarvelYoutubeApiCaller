const publicKey = "cf666bb77e15be90b02e3679ffa84cf0";
var searchBox = "Storm";
var marvelCharacterUrl = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchBox}&apikey=${publicKey}`;
let charVid = document.querySelector('#charVid');
let charLinks = document.querySelector('#charLinks');
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






let ytApiKey = "AIzaSyDiOZ44nzVN6XsP85hiAU76fyZkNyw7hN8";
let ytUrl = `https://youtube.googleapis.com/youtube/v3/search?q=Marvel,${searchBox}&type=video&part=snippet&chart=mostPopular&key=${ytApiKey}`;
fetch(ytUrl)
.then(function (response) {
    if (response.ok) {
       
        response.json().then(ytData => {
           console.log(ytData);
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

  
  /* 

   <div id="charVid" class="col-12 col-md-6 col-xl-6">
                    
                        <iframe src="https://www.youtube.com/embed/${video}" width="540" height="310"></iframe>
                   
                </div>

  let video = '';
  let videos = document.QuerySelctor('#vids');
  let p = document.createElement("p");
               p.classList = "query p-2 bg-secondary text-light text-center";
               p.innerHTML = theResult;
               rQ.appendChild(p);

  array.forEach(element => {
      
  });
  data.items */

  /*
  https://www.youtube.com/watch?v=Y1J9_9-vNcU */

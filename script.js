const publicKey = "cf666bb77e15be90b02e3679ffa84cf0";
//var privateKey = "d50814d942d89079bc056b8c2cb93425a4258ede";
var searchBox = "storm";
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

//searchButtonsEl.addEventListener('click', searchButton);
//var characterUrl = "https://gateway.marvel.com:443/v1/public/characters?name=" + characterId + "&nameStartsWith=Sp&comics=%2C&series=%2C&events=%2C&stories=%2C&orderBy=name&limit=3000&apikey=";

//use marvel to find images & bio (storyline?/quotes)???
// showCharacter = character => {
//     const charactersDiv = document.querySelector("marvel-character");
//     character.forEach(character => {
//       const characterElement = document.createElement("p");
//       characterElement.innerText = `Character Name: ${character.name}`;
//       charactersDiv.append(characterElement);


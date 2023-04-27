
url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

function idPartofSpeech(word, part) { //this function will use a dictionary api to check that the user part of speech is correct
  let def = url+word
  fetch(def)
  .then(response => response.json())
    .then(data => {

      console.log(data[0].meanings.length)
      for (let i = 0; i < data[0].meanings.length; i++){
        pos1 = data[0].meanings[i].partOfSpeech
        if (part == pos1){
          console.log(word + "true")
          console.log(pos1)
          break
        }
        else {
          console.log(word + "false")
          console.log(pos1)
        }
      }
      
    })

  console.log(word)
  console.log(part)
}
idPartofSpeech("hello", "noun"); //test




let form = document.getElementById('libform')
form.addEventListener("submit", test)
            function test(e){
              e.preventDefault() //keeps page from refreshing

              noun = document.getElementById('noun').value; //creates variable for noun itself
              userNoun = document.getElementById('userNoun') // creates variable for location of noun in story
              userNoun.innerHTML = noun //replaces 'noun' placeholder with noun user has entered
              idPartofSpeech(noun, "noun")

              adj = document.getElementById('adjective').value; //creates variable for adj itself
              userAdj = document.getElementById('userAdj') // creates variable for location of adj in story
              userAdj.innerHTML = adj //replaces 'adj' placeholder with adj user has entered
              idPartofSpeech(adj, "adjective")

              person = document.getElementById('person').value; //creates variable for name itself
              userPerson = document.getElementById('userPerson') // creates variable for location of person in story
              userPerson.innerHTML = person //replaces 'person' placeholder with [person] user has entered
              //no function here, can be creative

              verb = document.getElementById('verb').value; //creates variable for verb itself
              userVerb = document.getElementById('userVerb') // creates variable for location of ver in story
              userVerb.innerHTML = verb //replaces 'verb' placeholder with verb user has entered
              idPartofSpeech(verb, "verb")

              place  =  document.getElementById('place').value
              userPlace = document.getElementById('userPlace') // creates variable for location of place in story
              userPlace.innerHTML = place //replaces 'place' placeholder with place user has entered             
               
            }


storySpot = document.getElementById('story') //this is the span that the story goes in
let div = document.createElement('div');
div.id = "madLib"
div.classList.add ("madLib")
storySpot.appendChild(div)





let form = document.getElementById('libform')
form.addEventListener("submit", test)
            function test(e){
              e.preventDefault() //keeps page from refreshing

              noun = document.getElementById('noun').value; //creates variable for noun itself
              userNoun = document.getElementById('userNoun') // creates variable for location of noun in story
              userNoun.innerHTML = noun //replaces 'noun' placeholder with noun user has entered

              adj = document.getElementById('adjective').value; //creates variable for adj itself
              userAdj = document.getElementById('userAdj') // creates variable for location of adj in story
              userAdj.innerHTML = adj //replaces 'adj' placeholder with adj user has entered

              person = document.getElementById('person').value; //creates variable for name itself
              userPerson = document.getElementById('userPerson') // creates variable for location of person in story
              userPerson.innerHTML = person //replaces 'person' placeholder with [person] user has entered

              verb = document.getElementById('verb').value; //creates variable for verb itself
              userVerb = document.getElementById('userVerb') // creates variable for location of ver in story
              userVerb.innerHTML = verb //replaces 'verb' placeholder with verb user has entered

              place  =  document.getElementById('place').value
              userPlace = document.getElementById('userPlace') // creates variable for location of place in story
              userPlace.innerHTML = place //replaces 'place' placeholder with place user has entered             
               
            }
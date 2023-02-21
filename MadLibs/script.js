


storySpot = document.getElementById('story') //this is the span that the story goes in
let div = document.createElement('div');
div.id = "madLib"
div.classList.add ("madLib")
storySpot.appendChild(div)

let form = document.getElementById('libform')
form.addEventListener("submit", test)
            function test(e){
              noun = document.getElementById('noun').value; //creates variable for noun itself
              adj = document.getElementById('adjective').value; //creates variable for adj itself
              person = document.getElementById('person').value; //creates variable for name itself
              verb = document.getElementById('verb').value; //creates variable for verb itself
              place  =  document.getElementById('place').value
              console.log(place)
              e.preventDefault() //keeps page from refreshing
              storyOne = ("Once upon a time their was a person named " + person +" they lived in " + place + " with their " + noun + " and loved to " + verb + " becuase they were very " + adj)
              div.innerHTML = storyOne //adds story 
            }
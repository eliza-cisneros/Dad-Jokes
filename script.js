var question;
var answer;
var isQuestion;
var punchDelivered = true;


document.getElementById("button").addEventListener("click", function showJoke(){
   
   if(punchDelivered){
       document.getElementById("question").innerHTML = "";
       document.getElementById("punchLine").innerHTML = "";
       document.getElementById("gif").src = "";
       
       var url = "https://icanhazdadjoke.com";
       fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
        }).then(function(response){
            return response.json();
            }).then(function(json){
            console.log(json.joke);
            let joke = json.joke;
            isQuestion = joke.includes('?');
            let halves = joke.split(/[?.]+/);
            console.log(halves);
            if(isQuestion){
                halves[0] += '?';
            }
            else{
                halves[0] += ".";
            }
            let hasAnswer = halves[halves.length - 1] != "" || halves.length > 2;
            question = halves[0];
            answer = halves.slice(1).join("");
            
            document.getElementById("question").innerHTML = question;
            if(hasAnswer){
                punchDelivered = false;
                document.getElementById("button").innerHTML = "what?";
            }
            else{
                let index = Math.floor(Math.random() * 11) + 1;
                let imageSrc = "Gifs/" + index + ".gif";
                document.getElementById("gif").src = imageSrc;
            }
            });
   }
   else{
       document.getElementById("punchLine").innerHTML = answer;
       punchDelivered = true;
       document.getElementById("button").innerHTML = "New Joke";
       let index = Math.floor(Math.random() * 11) + 1;
       let imageSrc = "Gifs/" + index + ".gif";
       document.getElementById("gif").src = imageSrc;
   }
});



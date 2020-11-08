let random_descriptions_array = ["A beam of crackling energy", 
"Purple blasts", 
"Rainbow energy spears",
"Green lasers",
"A neon green ray",
"A black, smokey arrow",
"Bright beams of hellfire",
"A beam of pure energy, it almost hurts your eyes to look directly at it",
"A mixture of blues, from dark to light, take on a wave like substance",
"A handful of firey balls",
"Several purple arrow tips",
"A rigid beam of ice",
"An invisible force rips through the air, the only reason you notice the spell hit is the hot air between the warlock and the now crumpled over enemy",
"An arcane tentacle strikes from above the warlock"];


function show_quote () {
    let random = Math.floor(Math.random() * random_descriptions_array.length);
    let random_quote = (random, random_descriptions_array[random]);

    console.log(random_quote);

    let description = document.getElementById("description");
    description.classList.add('pre-animation');
    description.innerHTML = random_quote;
    setTimeout(function(){
        description.classList.remove('pre-animation')
    },350)
}
show_quote();
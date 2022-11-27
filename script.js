
// variables
let btn = document.querySelector(`#new-qoute`)
let qoute = document.querySelector(`.qoute`)
let person = document.querySelector(`.person`)

const qoutes = [{
    qoute: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime sunt deleniti, nobis praesentium modi.`,
    person:`Mahtma Gandi`
},{
    qoute: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
    person:`Mohammed Hazzad`
},{
    qoute: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime sunt deleniti, nobis praesentium modi.`,
    person:`Gilcrist`
},{
    qoute: `“Dont walk in front of me… I may not follow
    Dont walk behind me… I may not lead
    Walk beside me… just be my friend”`,
    person:` Virat Khoholi`
},{
    qoute: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
    person:`Pointing`
},{
    qoute: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    person:` Adam Gilcrist`
},{
    qoute: `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,
    person:`Leo Messi`
},{
    qoute: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    person:`Nymer Jr`
},{
    qoute: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person:`Mo Salah`
},{
    qoute: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    person:`Janina`
},];

document.addEventListener(`click`, function(){

    let random = Math.floor(Math.random()* qoutes.length);

    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;


})
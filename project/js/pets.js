/*
  Create an array of 'pet' objects.
  

  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

let pets = [
  {
    name:'Maji',
    type:"Dog",
    breed:"Maltipoo",
    age: 1,
    photo: 'img/maji.jpg'
  },
  {
    name:'Meelo',
    type:"Dog",
    breed:"Mini Poodle",
    age: "5 Days old",
    photo: 'img/locPoodle.jpeg'
  },
  {
    name:'Zaki',
    type:"Cat",
    breed:"Russian Blue",
    age: "5 Days old",
    photo: 'img/russianblue.jpeg'
  },
  {
    name:'Akila',
    type:"Dog",
    breed:"Doberman",
    age: "N/A",
    photo: 'img/doberman.jpeg'
  },
  {
    name:'Onyx',
    type:"Dog",
    breed:"Cane Corso",
    age: "N/A",
    photo: 'img/canecorso.jpeg'
  }
];
//
//for(let i = 0; i < pets.length; i++){
//
//  let name = document.querySelector('main').innerHTML = `<h2>Name: ${pets[i].name}</h2>`;
//  let type = document.querySelector('main').innerHTML = `<h3>${pets[i].type} | ${pets[i].breed}</h3>`;
//  let age = pets[i].agee;
////  let name = pets[i].name;
//  console.log(name, type, breed, age)
//  
//}
//// for(let prop in pets){
////   console.log(`${prop}: ${pets[prop]}`)
////   const name = document.querySelector('main').innerHTML = `<h2>${prop}: ${pets[prop]}</h2>`
////  }
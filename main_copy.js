// NOTE: Add event listener to submit button
const submitButton = document.querySelector('#submitButton');
const main = document.querySelector('#mainDiv')
const url = "http://jsonplaceholder.typicode.com/users"


fetch(url).then(function(r){ r.json().then(function(data){
  // console.log(JSON.stringify(data));
  createList(data);})
  });

function createList(data){
  let dropdownPerson = document.querySelector('#selectPerson');
  for (let i = 0; i < data.length; i++){
    let person = document.createElement('option');
    dropdownPerson.appendChild(person);
    person.append(data[i].name);
  }
}

function showPerson(){
  fetch(url).then(function(r){r.json().then(function(data){
    // NOTE: create an entry that goes to div;
    let inputPerson = document.querySelector('#selectPerson').value;
    // console.log(inputPerson);

    for (let i = 0; i < data.length; i++){
      if (inputPerson == data[i].name){
        let outputDiv = document.createElement('div');
          main.appendChild(outputDiv);
          outputDiv.classList.add('c-subDiv')
          outputDiv.innerHTML =
          `
            <div class="c-person f-person s-person">
              <a href="https://wwww.${data[i].website}"> ${data[i].name} </a>
            </div>
            <p> ${data[i].company.catchPhrase} </p>
          `
      }
    }
  })});
}

submitButton.addEventListener("click", showPerson, false);

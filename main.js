// NOTE: Add event listener to submit button
const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", collectQ, false);

// NOTE: collect values from input field

function collectQ(){
  let recipeSearch = document.querySelector("#recipeSearch").value;
  console.log(recipeSearch);

  console.log(fetch("http://www.recipepuppy.com/api/"))
}
  // useme();
  //
  // function useme(){
  //   let url = "http://www.recipepuppy.com/api/?q=" + recipeSearch;
  //
  //
  //   fetch(url).then(function(response){response.json().then(returnResults(data))})
  //   console.log(fetch(url));
  //   function returnResults(data){
  //     let results = data;
  //     console.log(results);
//     }
//
//   }
// }

function displayRecipe(response) {
  console.log("recipe generated");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "37ea14ba6837a80857fo2ee3c4t955c6";
  let context =
    "You are an expert in all things relating to food but recently you have a love for exploring South Africa's cuisine";
  let prompt = `User instructions  in basic HTML are to: Generate a South African food recipe about ${instructionsInput.value}  according to the user instructions.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating a South African recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

// console.log("Does it work?");

// const dogImage = document.getElementById("dog-image");
// dogImage.textContent = "https://dog.ceo/api/breeds/image/random";

const dogMatchesImageContainerDiv = document.getElementById(
  "dog-matches-image-container"
);

function getMatches() {
  fetch("https://dog.ceo/api/breeds/image/random") // returnerer en bitstream
    .then((response) => response.json())
    .then((result) => {
      const dog = {
        imageURL: result.message,
      };
      createMatchesProfile(dog);
    });
}

getMatches();

function createMatchesProfile(dog) {
  const dogMatchesImageImg = document.createElement("img");
  dogMatchesImageImg.src = dog.imageURL;
  dogMatchesImageImg.alt = "Dog match profile picture";
  dogMatchesImageImg.id = "dog-matches.image";

  dogMatchesImageContainerDiv.innerHTML = "";

  dogMatchesImageContainerDiv.appendChild(dogMatchesImageImg);
}

// app.js

// Get references to DOM elements
const memesImage = document.getElementById("Memes");
const generateButton = document.getElementById("btn");

// API endpoint for retrieving memes
const apiUrl = "https://api.imgflip.com/get_memes"; // Replace with actual API endpoint

// Function to fetch a new meme from the API
async function fetchMeme() {
    try {
        const response = await axios.get(apiUrl);
        const memesArray = response.data.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const memeUrl = memesArray[randomIndex].url;
        memesImage.src = memeUrl;
    } catch (error) {
        console.error("Error fetching meme:", error);
    }
}

// Event listener for the "Generate new Memes" button
generateButton.addEventListener("click", fetchMeme);

// Initial meme fetch when the page loads
fetchMeme();

"use strict";

const GIPHY_API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const GIPHY_URL = 'https://api.giphy.com/v1';
const $searchInput = $("#search");
const $gallery = $(".gallery");

function generateRandomIndex(array) {

  return Math.floor(Math.random() * array.length);
}

function addGif(array) {
  const randomIdx = generateRandomIndex(array);
  const gifURL = array[randomIdx].images.original.url
  $gallery.append($(`<img src= ${gifURL}>`));
}

async function getGif(e) {
  e.preventDefault();
  let search = $searchInput.val();
  let response = await axios.get(
    `${GIPHY_URL}/gifs/search`, { params: { q: search, api_key: GIPHY_API_KEY } }
  );
  const arrOfObj = response.data.data
  addGif(arrOfObj);
}




$("form").on("submit", getGif);







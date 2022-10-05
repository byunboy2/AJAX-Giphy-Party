"use strict";
console.log("Let's get this party started!");

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
  console.log("test");
  e.preventDefault();
  let search = $searchInput.val();
  let response = await axios.get(
    `${GIPHY_URL}/gifs/search`, { params: { q: search, api_key: GIPHY_API_KEY } }
  );
  console.log(response.data.data)
  const arrOfObj = response.data.data
  addGif(arrOfObj);
}




$("form").on("submit", getGif);







/* show result of borrowing in box */

function showBorrow(res) {
  $("#borrowed").html(res);
}

async function borrowMoney() {
  let amount = Number($("#amount").val());

  let response = await axios.post(
    "/api/borrow", { amount });

  console.log("borrow resp=", response);
  showBorrow(response.data);
}

$("#borrow-btn").on("click", borrowMoney);
``;

console.log("Let's get this party started!");

const GIPHY_API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const GIPHY_URL = 'https://api.giphy.com/v1';
const $searchInput = $("#search");
const $gallery = $(".gallery");

function generateRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function addGif(gifURLs) {
  const randomIdx = generateRandomIndex(gifURLs);
  const gif = $("<img>")
}

async function getGif() {
  let search = $searchInput.val();
  let response = await axios.get(
    `${GIPHY_URL}/gifs/search`, { params: { search, apiKey : GIPHY_API_KEY }}
  );
  return response;
}




$("form").on("click", getGif);







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

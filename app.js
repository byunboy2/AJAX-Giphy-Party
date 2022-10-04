console.log("Let's get this party started!");





async function getGif() {
  let gif = await axios.post(

  );
}




$('#search').on("click", getGif);







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
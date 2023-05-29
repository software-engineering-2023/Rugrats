const transactions = [
  {
    id: 3,
    from: "Mariam Elerian",
    amount: 500,
    date: "13/5/2023",
    type: "Deposit",
  },
  { id: 1, to: "L'aroma", amount: 120, date: "10/5/2023", type: "withdrawal" },
  {
    id: 2,
    to: "Mariam Elerian",
    amount: 200,
    date: "13/5/2023",
    type: "withdrawal",
  },
];

const submitForm = (i) => {
  const outp = document.getElementById("transOutput");

  let temp = "<table class='table table-striped'>";
  temp +=
    "<thead><tr> <th scope='col'>Type</th><th scope='col'>ID</th><th scope='col'>From/To</th><th scope='col'>Amount</th><th scope='col'>Dandle</th></tr> </thead>";
  temp += "<tbody>";

  while (i < transactions.length) {
    let trans = transactions[i];
    temp += "<tr>";

    temp += `<td style = 'color: ${
      trans.type == "withdrawal" ? "red" : "green"
    }'>${trans.type}</tdd><td>${trans.id}</td><td>${
      trans.type == "withdrawal" ? trans.to : trans.from
    } </td>`;
    temp += `<td>${trans.amount}</td><td>${trans.date}</td>`;

    temp += "</tr>";
    i++;
  }

  temp += "</tbody>";
  temp += "</table>";
  outp.innerHTML = temp;
  outp.setAttribute("style", "display: block;");
};

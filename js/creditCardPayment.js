document.addEventListener('DOMContentLoaded', function () {
  var amountInput = document.getElementById('amount');
  var futurePaymentsContent = document.getElementById('futurePaymentsContent');
  var futurePaymentsModal = new bootstrap.Modal(document.getElementById('futurePaymentsModal'));

  var balance = 1287.93; // Initial balance value
  var futurePayments = 0;

  function updateFuturePayments() {
    var enteredAmount = Number(amountInput.value);
    var amountPaid = enteredAmount;

    futurePayments = (5000 - balance) - amountPaid;
    var newBalance = balance + amountPaid;

    futurePaymentsContent.textContent = 'Future Payments: $' + futurePayments;
    document.getElementById('newBalance').textContent = 'New Balance: $' + newBalance.toFixed(2);
  }

  amountInput.addEventListener('input', updateFuturePayments);

  var form = document.getElementById('CreditCardPayment');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    balance += Number(amountInput.value); // Update the balance with the amount paid
    document.getElementById('creditBalance').textContent = 'Credit Account: 0405171001 ($' + balance.toFixed(2) + ')';
    futurePaymentsModal.show(); // Show the future payments modal
  });

  var okButton = document.getElementById('modalOKButton');
  okButton.addEventListener('click', function () {
    // Submit the form
    form.submit();
    // Reload the page
    location.reload();
  });

  var closeButton = document.getElementById('closeButton');
  closeButton.addEventListener('click', function () {
    // Reload the page
    location.reload();
  });

  updateFuturePayments();
});

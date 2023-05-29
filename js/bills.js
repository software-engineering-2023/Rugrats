document.addEventListener('DOMContentLoaded', function () {
    var amountInput = document.getElementById('amount');
    var futurePaymentsContent = document.getElementById('futurePaymentsContent');
    var futurePaymentsModal = new bootstrap.Modal(document.getElementById('futurePaymentsModal'));
    var payButton = document.getElementById('payButton');

    var billAmounts = {
        G: 40,
        W: 50,
        E: 30,
        T: 25
    };

    function updateFuturePayments() {
        var enteredAmount = Number(amountInput.value);
        var selectedBill = document.getElementById('billType').value;
        var remainingAmount = billAmounts[selectedBill];

        if (enteredAmount < remainingAmount) {
            var futurePayments = remainingAmount - enteredAmount;
            futurePaymentsContent.textContent = 'Future Payments: $' + futurePayments;
        } else {
            futurePaymentsContent.textContent = 'No future payments.';
        }
    }

    amountInput.addEventListener('input', updateFuturePayments);
    document.getElementById('billType').addEventListener('change', updateFuturePayments);

    payButton.addEventListener('click', function () {
        event.preventDefault(); // Prevent form submission
        futurePaymentsModal.show();
    });

    // Handle the OK button in the modal
    var okButton = document.getElementById('modalOKButton');
    okButton.addEventListener('click', function () {
        // Submit the form
        var form = document.getElementById('Bills');
        form.submit();

        // Reload the page
        location.reload();
    });

    // Handle the modal hide event
    futurePaymentsModal._element.addEventListener('hidden.bs.modal', function () {
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

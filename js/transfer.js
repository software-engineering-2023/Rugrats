var coll = document.getElementsByClassName("myCollapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function validateForm() {
  var beneficiaryName = document.getElementById('beneficiaryName');
  var beneficiaryAccount = document.getElementById('beneficiaryAccount');
  var validationCustomOTP = document.getElementById('validationCustomOTP');
  var invalidCheck = document.getElementById('invalidCheck');

  // Validate beneficiary name
  if (beneficiaryName.value.trim() === '' || !/^[A-Za-z\s]+$/.test(beneficiaryName.value)) {
    beneficiaryName.classList.add('is-invalid');
  } else {
    beneficiaryName.classList.remove('is-invalid');
    beneficiaryName.classList.add('is-valid');
  }

  // Validate beneficiary account number
  if (beneficiaryAccount.value.trim() === '' || !/^[0-9]+$/.test(beneficiaryAccount.value)) {
    beneficiaryAccount.classList.add('is-invalid');
  } else {
    beneficiaryAccount.classList.remove('is-invalid');
    beneficiaryAccount.classList.add('is-valid');
  }

  // Validate OTP token
  if (validationCustomOTP.value.trim() === '' || !/^\d{6}$/.test(validationCustomOTP.value)) {
    validationCustomOTP.classList.add('is-invalid');
  } else {
    validationCustomOTP.classList.remove('is-invalid');
    validationCustomOTP.classList.add('is-valid');
  }

  // Validate terms and conditions
  if (!invalidCheck.checked) {
    invalidCheck.classList.add('is-invalid');
  } else {
    invalidCheck.classList.remove('is-invalid');
  }
}

function validateFormDomestic() {
  var beneficiaryName = document.getElementById('beneficiaryName1');
  var beneficiaryAccount = document.getElementById('beneficiaryAccount1');
  var beneficiaryAddress = document.getElementById('beneficiaryAddress1');
  var beneficiaryCity = document.getElementById('beneficiaryCity1');
  var beneficiaryState = document.getElementById('beneficiaryState1');
  var bankCity = document.getElementById('bankCity1');
  var bankState = document.getElementById('bankState1');
  var bankCode = document.getElementById('validationCustomCode1');
  var validationCustomOTP = document.getElementById('validationCustomOTP1');
  var invalidCheck = document.getElementById('invalidCheck1');

  // Validate beneficiary name
  if (beneficiaryName.value.trim() === '' || !/^[A-Za-z\s]+$/.test(beneficiaryName.value)) {
    beneficiaryName.classList.add('is-invalid');
  } else {
    beneficiaryName.classList.remove('is-invalid');
    beneficiaryName.classList.add('is-valid');
  }

  // Validate beneficiary account number
  if (beneficiaryAccount.value.trim() === '' || !/^[0-9]+$/.test(beneficiaryAccount.value)) {
    beneficiaryAccount.classList.add('is-invalid');
  } else {
    beneficiaryAccount.classList.remove('is-invalid');
    beneficiaryAccount.classList.add('is-valid');
  }

  // Validate beneficiary city
  if (beneficiaryCity.value.trim() === '' || !/^[A-Za-z\s]+$/.test(beneficiaryCity.value)) {
    beneficiaryCity.classList.add('is-invalid');
  } else {
    beneficiaryCity.classList.remove('is-invalid');
    beneficiaryCity.classList.add('is-valid');
  }

  // Validate beneficiary state
  if (beneficiaryState.value.trim() === '' || !/^[A-Za-z\s]+$/.test(beneficiaryState.value)) {
    beneficiaryState.classList.add('is-invalid');
  } else {
    beneficiaryState.classList.remove('is-invalid');
    beneficiaryState.classList.add('is-valid');
  }

  // Validate bank city
  if (bankCity.value.trim() === '' || !/^[A-Za-z\s]+$/.test(bankCity.value)) {
    bankCity.classList.add('is-invalid');
  } else {
    bankCity.classList.remove('is-invalid');
    bankCity.classList.add('is-valid');
  }

  // Validate bank state
  if (bankState.value.trim() === '' || !/^[A-Za-z\s]+$/.test(bankState.value)) {
    bankState.classList.add('is-invalid');
  } else {
    bankState.classList.remove('is-invalid');
    bankState.classList.add('is-valid');
  }

  // Validate bank code
  if (bankCode.value.trim() === '' || !/^[A-Za-z0-9]{11}$/.test(bankCode.value)) {
    bankCode.classList.add('is-invalid');
  } else {
    bankCode.classList.remove('is-invalid');
    bankCode.classList.add('is-valid');
  }

  // Validate OTP token
  if (validationCustomOTP.value.trim() === '' || !/^\d{6}$/.test(validationCustomOTP.value)) {
    validationCustomOTP.classList.add('is-invalid');
  } else {
    validationCustomOTP.classList.remove('is-invalid');
    validationCustomOTP.classList.add('is-valid');
  }

  // Validate terms and conditions
  if (!invalidCheck.checked) {
    invalidCheck.classList.add('is-invalid');
  } else {
    invalidCheck.classList.remove('is-invalid');
  }
}

function validateFormInternational() {
  var beneficiaryName = document.getElementById('beneficiaryName2');
  var beneficiaryAccount = document.getElementById('beneficiaryAccount2');
  var beneficiaryAddress = document.getElementById('beneficiaryAddress2');
  var beneficiaryCity = document.getElementById('beneficiaryCity2');
  var beneficiaryState = document.getElementById('beneficiaryState2');
  var bankCountry = document.getElementById('bankCountry2');
  var bankName = document.getElementById('bankName2');
  var bankBranch = document.getElementById('bankBranch2');
  var bankAddress = document.getElementById('bankAddress2');
  var bankCity = document.getElementById('bankCity2');
  var bankState = document.getElementById('bankState2');
  var bankCode = document.getElementById('validationCustomCode2');
  var validationCustomOTP = document.getElementById('validationCustomOTP2');
  var invalidCheck = document.getElementById('invalidCheck2');

  // Validate beneficiary name
  if (beneficiaryName.value.trim() === '' || !/^[A-Za-z\s]+$/.test(beneficiaryName.value)) {
    beneficiaryName.classList.add('is-invalid');
  } else {
    beneficiaryName.classList.remove('is-invalid');
    beneficiaryName.classList.add('is-valid');
  }

  // Validate beneficiary account number
  if (beneficiaryAccount.value.trim() === '' || !/^[0-9]+$/.test(beneficiaryAccount.value)) {
    beneficiaryAccount.classList.add('is-invalid');
  } else {
    beneficiaryAccount.classList.remove('is-invalid');
    beneficiaryAccount.classList.add('is-valid');
  }

  // Validate beneficiary city
  if (beneficiaryCity.value.trim() === '' || !/^[A-Za-z\s]+$/.test(beneficiaryCity.value)) {
    beneficiaryCity.classList.add('is-invalid');
  } else {
    beneficiaryCity.classList.remove('is-invalid');
    beneficiaryCity.classList.add('is-valid');
  }

  // Validate beneficiary state
  if (beneficiaryState.value.trim() === '' || !/^[A-Za-z\s]+$/.test(beneficiaryState.value)) {
    beneficiaryState.classList.add('is-invalid');
  } else {
    beneficiaryState.classList.remove('is-invalid');
    beneficiaryState.classList.add('is-valid');
  }

  // Validate bank country if it's equal to select a country then reject
  if (bankCountry.value === '') {
    bankCountry.classList.add('is-invalid');
  } else {
    bankCountry.classList.remove('is-invalid');
    bankCountry.classList.add('is-valid');
  }

  // Validate bank name
  if (bankName.value.trim() === '' || !/^[A-Za-z\s]+$/.test(bankName.value)) {
    bankName.classList.add('is-invalid');
  } else {
    bankName.classList.remove('is-invalid');
    bankName.classList.add('is-valid');
  }

  // Validate bank branch
  if (bankBranch.value.trim() === '' || !/^[A-Za-z\s]+$/.test(bankBranch.value)) {
    bankBranch.classList.add('is-invalid');
  } else {
    bankBranch.classList.remove('is-invalid');
    bankBranch.classList.add('is-valid');
  }

  // Validate bank address
  if (bankAddress.value.trim() === '' || !/^[A-Za-z\s]+$/.test(bankAddress.value)) {
    bankAddress.classList.add('is-invalid');
  } else {
    bankAddress.classList.remove('is-invalid');
    bankAddress.classList.add('is-valid');
  }


  // Validate bank city
  if (bankCity.value.trim() === '' || !/^[A-Za-z\s]+$/.test(bankCity.value)) {
    bankCity.classList.add('is-invalid');
  } else {
    bankCity.classList.remove('is-invalid');
    bankCity.classList.add('is-valid');
  }

  // Validate bank state
  if (bankState.value.trim() === '' || !/^[A-Za-z\s]+$/.test(bankState.value)) {
    bankState.classList.add('is-invalid');
  } else {
    bankState.classList.remove('is-invalid');
    bankState.classList.add('is-valid');
  }

  // Validate bank code
  if (bankCode.value.trim() === '' || !/^[A-Za-z0-9]{11}$/.test(bankCode.value)) {
    bankCode.classList.add('is-invalid');
  } else {
    bankCode.classList.remove('is-invalid');
    bankCode.classList.add('is-valid');
  }

  // Validate OTP token
  if (validationCustomOTP.value.trim() === '' || !/^\d{6}$/.test(validationCustomOTP.value)) {
    validationCustomOTP.classList.add('is-invalid');
  } else {
    validationCustomOTP.classList.remove('is-invalid');
    validationCustomOTP.classList.add('is-valid');
  }

  // Validate terms and conditions
  if (!invalidCheck.checked) {
    invalidCheck.classList.add('is-invalid');
  } else {
    invalidCheck.classList.remove('is-invalid');
  }

}

var closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', function () {
    // Reload the page
    location.reload();
});

var closeButton1 = document.getElementById('closeButton1');
closeButton1.addEventListener('click', function () {
    // Reload the page
    location.reload();
});

var closeButton2 = document.getElementById('closeButton2');
closeButton2.addEventListener('click', function () {
    // Reload the page
    location.reload();
});

var cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click', function () {
    // Reload the page
    location.reload();
});

var cancelButton1 = document.getElementById('cancelButton1');
cancelButton1.addEventListener('click', function () {
    // Reload the page
    location.reload();
});

var cancelButton2 = document.getElementById('cancelButton2');
cancelButton2.addEventListener('click', function () {
    // Reload the page
    location.reload();
});

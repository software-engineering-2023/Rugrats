// const transfer = document.getElementById('transfer')
// transfer.style.display = 'none';

// // Get the "Transfer to Another Account" link element
// const transferLink = document.getElementById('t1');

// // Get the "transfer" element that needs to be unhidden
// const transferElement = document.getElementById('transfer');

// // Add event listener to the link
// transferLink.addEventListener('click', function (event) {
//   event.preventDefault(); // Prevent the link from navigating

//   // Unhide the "transfer" element
//   transferElement.style.display = 'flex';
// });
// Get the current timestamp
var currentTimestamp = new Date().toLocaleString();

// Update the timestamp in the respective spans
document.getElementById("timestamp1").textContent = currentTimestamp;
document.getElementById("timestamp2").textContent = currentTimestamp;
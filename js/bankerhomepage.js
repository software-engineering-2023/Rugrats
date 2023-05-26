$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
const addBtns = document.querySelectorAll('.add-btn');

addBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const box = btn.parentNode;
		const text = box.querySelector('.text');
		const input = document.createElement('textarea');
		input.classList.add('input');
		box.insertBefore(input, text);
		input.focus();
		input.addEventListener('blur', () => {
			const value = input.value.trim();
			if (value !== '') {
				text.textContent = value;
			}
			box.removeChild(input);
		});
	});
});
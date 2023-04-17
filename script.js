const form = document.getElementById('word-form');
const groups = Array.from(document.getElementsByClassName('form-group'));
let currentGroup = 0;

form.addEventListener('submit', (event) => {
	event.preventDefault();
});

form.addEventListener('input', (event) => {
	const input = event.target;

	if (input.checkValidity()) {
		const currentGroupElement = groups[currentGroup];
		currentGroupElement.classList.remove('active');
		currentGroup += 1;

		if (currentGroup === groups.length) {
			form.submit();
		} else {
			const nextGroupElement = groups[currentGroup];
			nextGroupElement.classList.add('active');
			const nextInput = nextGroupElement.querySelector('input, select');
			nextInput.focus();
		}
	}
});

groups[currentGroup].classList.add('active');
const firstInput = groups[currentGroup].querySelector('input, select');
firstInput.focus();

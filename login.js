'use strict'

//---HTML ELEMENTS---//
const btnLogin = document.querySelector('.login__btn');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');

//---EVENT LISTENERS---//
btnLogin?.addEventListener('click', function(e) {
	e.preventDefault();
	const username = inputLoginUsername.value;
	const pin = inputLoginPin.value;
	currentAccount = accounts.find(acc => acc.username === username)
	if (currentAccount?.pin === Number(pin))
	{
		// console.log(`Current Account: ${currentAccount.username}`);
		localStorage.setItem('currentAccount', JSON.stringify(currentAccount));
		window.location.assign('index.html');
		console.log('Logged In!')
	}
	// window.location.href = 'index.html';
});

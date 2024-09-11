'use strict'

//---TEST DATA---//
const account1 = {
	name: 'Mike',
	username: 'mike',
	pin: 1111,
};

const account2 = {
	name: 'Groot',
	username: 'groot',
};

const account3 = {
	name: 'Elvis',
	username: 'elvis',
	pin: 3333,
};

const accounts = [account1, account2, account3];


//---HTML ELEMENTS---//

const btnLogin = document.querySelector('.login__btn');
const btnCreateAccount = document.querySelector('.create-account__btn');
const inputLoginUsername = document.querySelector('login__input--user');
const inputLoginPin = document.querySelector('login__input--pin');

//---GLOBAL VARIABLES---//
let currentAccount;

//---EVENT LISTENERS---//

btnLogin.addEventListener('click', function(e) {
	e.preventDefault();
	const username = inputLoginUsername.value;
	const pin = inputLoginPin.value;
	currentAccount = accounts.find(acc => acc.username === username)
	if (currentAccount?.pin === Number(pin))
	{
		window.location.assign('index.html');
		console.log('Logged In!')
	}
	// window.location.href = 'index.html';
});

btnCreateAccount.addEventListener('click', function(e) {
	e.preventDefault();

	window.location.assign('index.html');
	console.log('TEST')
});
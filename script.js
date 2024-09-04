'use strict'

//---TEST DATA---//
const account1 = {
	name: 'Mike',
	username: 'rar',
	pin: 1111,
};

const account2 = {
	name: 'Groot',
	username: 'groot',
	pin: 1111,
};

const account3 = {
	name: 'Elvis',
	username: 'elvis',
	pin: 1111,
};

const accounts = [account1, account2, account3];


//---HTML ELEMENTS---//

const btnLogin = document.querySelector('.login__btn');
const btnCreateAccount = document.querySelector('.create-account__btn');

//---EVENT LISTENERS---//

btnLogin.addEventListener('click', function(e) {
	e.preventDefault();
	window.location.assign('index.html');
	console.log('TEST')
	// window.location.href = 'index.html';
});

btnCreateAccount.addEventListener('click', function(e) {
	e.preventDefault();
	window.location.assign('index.html');
	console.log('TEST')
});
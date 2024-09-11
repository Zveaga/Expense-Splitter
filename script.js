'use strict'

// //---TEST DATA---//
// const account1 = {
// 	name: 'Rares',
// 	username: 'rar',
// 	pin: 11,
// };

// const account2 = {
// 	name: 'Groot',
// 	username: 'groot',
// };

// const account3 = {
// 	name: 'Elvis',
// 	username: 'elvis',
// 	pin: 3333,
// };

// const accounts = [account1, account2, account3];

// console.log("INDEX PAGE");
const currentAccountStr = localStorage.getItem('currentAccount');
currentAccount = JSON.parse(currentAccountStr);
console.log(currentAccount);

//---HTML ELEMENTS---//

// const btnLogin = document.querySelector('.login__btn');
// const btnCreateAccount = document.querySelector('.create-account__btn');
// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');

//---GLOBAL VARIABLES---//
// let currentAccount = localStorage.getItem('currentAccount');
// let accounts = localStorage.getItem('accounts');

// let currentAccount;
//---EVENT LISTENERS---//

// btnLogin?.addEventListener('click', function(e) {
// 	e.preventDefault();
// 	const username = inputLoginUsername.value;
// 	const pin = inputLoginPin.value;
// 	currentAccount = accounts.find(acc => acc.username === username)
// 	if (currentAccount?.pin === Number(pin))
// 	{
// 		console.log(`Current Account: ${currentAccount.username}`);
// 		window.location.assign('index.html');
// 		console.log('Logged In!')
// 	}
// 	// window.location.href = 'index.html';
// });

// btnCreateAccount.addEventListener('click', function(e) {
// 	e.preventDefault();

// 	window.location.assign('index.html');
// 	console.log('TEST')
// });
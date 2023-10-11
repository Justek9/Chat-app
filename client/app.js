'use strict'

// references to HTML
const loginForm = document.querySelector('#welcome-form')
const messagesSection = document.querySelector('#messages-section')
const messagesList = document.querySelector('#messages-list')
const addMessageForm = document.querySelector('#add-messages-form')
const userNameInput = document.querySelector('#username')
const messageContentInput = document.querySelector('#message-content')

let userName

const login = function (e) {
	e.preventDefault()
	if (!userNameInput.value) {
		alert('Please add user name')
	} else {
		userName = userNameInput.value
		loginForm.classList.remove('show')
		messagesSection.classList.add('show')
		return userName
	}
}

loginForm.addEventListener('submit', login)

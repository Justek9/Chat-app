'use strict'

// references to HTML
const loginForm = document.querySelector('#welcome-form')
const messagesSection = document.querySelector('#messages-section')
const messagesList = document.querySelector('#messages-list')
const addMessageForm = document.querySelector('#add-messages-form')
const userNameInput = document.querySelector('#username')
const messageContentInput = document.querySelector('#message-content')

let userName

// LOGIN
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

// SEND MESSAGE
const addMessage = function (author, content) {
	const message = `<li class="message message--received ${author === userName ? 'message--self' : ''}">
    <h3 class="message__author">${author === userName ? 'You' : author}</h3>
    <div class="message__content">
        ${content}
    </div>
</li>`

	let messageHTML = utils.createDOMFromHTML(message, 'li')
	messagesList.appendChild(messageHTML)
}

const sendMessage = function (e) {
	e.preventDefault()
	if (!messageContentInput.value) {
		alert('Please add message')
	} else {
		addMessage(userName, messageContentInput.value)
		messageContentInput.value = ''
	}
}

addMessageForm.addEventListener('submit', sendMessage)

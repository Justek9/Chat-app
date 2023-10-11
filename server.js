const express = require('express')
const path = require('path')
const socket = require('socket.io')

const app = express()
const server = app.listen('8000')
const io = socket(server)

app.use(express.static(path.join(__dirname, '/client')))

let messages = []
let users = []

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/index.html'))
})

io.on('connection', socket => {
	console.log('New client! Its id – ' + socket.id)

	socket.on('login', name => {
		const id = socket.id
		const newUser = Object.assign({ id: id }, name)
		users.push(newUser)
		socket.broadcast.emit('message', { author: 'Chat Bot', content: `${name.name} has joined the conversation!` })
	})

	socket.on('message', message => {
		console.log("Oh, I've got something from " + socket.id)
		messages.push(message)
		socket.broadcast.emit('message', message)
	})
	socket.on('disconnect', () => {
		console.log('Oh, socket ' + socket.id + ' has left')
		users = users.filter(user => user.id !== socket.id)
	})
	console.log("I've added a listener on message and disconnect events \n")
})

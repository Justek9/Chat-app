const utils = {} // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function (htmlString, HTMLelement) {
	let element = document.createElement(HTMLelement)
	element.innerHTML = htmlString.trim()
	return element.firstChild
}

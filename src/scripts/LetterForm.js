import { getAuthors, getRecipients, getTopics } from "./DataAccess.js"

document.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'submitRequest') {
        const userLetter = document.querySelector('input[name="textLetter"]').value
        const userAuthor = document.querySelector('input[name="author"]').value
        const userTopic = document.querySelector('input[name="topic]').value
        const userRecipient = document.querySelector('input[name="recipient"]')

        const dataToSendToAPI = {
            text: userLetter,
            authorId: userAuthor,
            topicId: userTopic,
            recipientId: userRecipient
        }
        //build this function tomorrow. Start here, bozo
        sendRequest(dataToSendToAPI)
    }
})

export const letterForm = () => {
    let html = `
    <div class="field">
        <label>Author</label>
        ${buildAuthors()}
    </div>
    <div class="field">
        <label class="label">Letter</label>
        <input class="input" type="textarea" name="textLetter"></input>
    </div>
    <div class="field">
        <label class="label">Topics</label>
        ${buildTopics()}
    </div>
    <div class="field">
        <label class="label">Recipient</label>
        ${buildRecipients()}
    </div>
    <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}

//function that builds author dropdown, gets author from Data Access
const buildAuthors = () => {
    const authors = getAuthors()
    let html = `<select><option value=0>Select an author</option>`
    //go back and later change this to maps. Ask someone how. Would not return string.
    for (const author of authors) {
        html += `<option value="${author.id}" name="author">${author.name}</option>`
    }
    html += `</select>`
    return html
}

const buildTopics = () => {
    const topics = getTopics()
    let html = ``
    for (const topic of topics) {
        html += `<input type="radio" name="topic" id="topic--${topic.id}">${topic.name}</input>`
    }
    return html
}

const buildRecipients = () => {
    const recipients = getRecipients()
    let html = `<select><option value=0>Select a recipient</option>`
    for (const recipient of recipients) {
        html += `<option value="${recipient.id}" name="recipient">${recipient.name}</option>`
    }
    html += `</select>`
    return html
}
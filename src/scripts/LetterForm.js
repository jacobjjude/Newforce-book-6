import { getAuthors, getRecipients, getTopics, sendRequest } from "./DataAccess.js"

document.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'submitRequest') {
        //get id of author select and recipient, to store value
        const authorSelect = document.getElementById('authors')
        const recipientSelect = document.getElementById('recipients')

        //get todays date
        const today = new Date()
        const date = today.getMonth()+1 + '-' + today.getDate() + '-' + today.getFullYear()

        const userLetter = document.querySelector('textarea[name="textLetter"]').value
        const userAuthor = authorSelect.options[authorSelect.selectedIndex].value
        const userTopic = grabTopic()
        const userRecipient = recipientSelect.options[recipientSelect.selectedIndex].value

        const dataToSendToAPI = {
            text: userLetter,
            authorId: userAuthor,
            topicId: userTopic,
            recipientId: userRecipient,
            date: date
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
        <textarea name="textLetter" rows="4" cols="50"></textarea>
    </div>
    <div class="topics">
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
    let html = `<select id="authors"><option value=0>Select an author</option>`
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
        html += `<input type="radio" name="topic" id="${topic.id}">${topic.name}</input>`
    }
    return html
}

const buildRecipients = () => {
    const recipients = getRecipients()
    let html = `<select id="recipients"><option value=0>Select a recipient</option>`
    for (const recipient of recipients) {
        html += `<option value="${recipient.id}" name="recipient">${recipient.name}</option>`
    }
    html += `</select>`
    return html
}

const grabTopic = () => {
    const selected = document.querySelector('input[type=radio][name=topic]:checked')
    return selected.id
}


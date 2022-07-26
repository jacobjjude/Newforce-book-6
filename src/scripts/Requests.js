import { getRequests, getAuthors, getRecipients, getTopics } from "./DataAccess.js"

export const Requests = () => {
    const letterRequests = getRequests()
    let html = `
    <h2>Requests</h2>

            ${
                letterRequests.map(exportRequestToListItem).join("</ul>")
            }
        </ul>
    `
    return html
}

//function to build letterRequests into HTML string
const exportRequestToListItem = (obj) => {
    let html = `
    <ul>
    <li>Dear, ${getRecipientById(obj)} (${getRecipientEmailById(obj)})</li>
    <li>${obj.text}</li>
    <li>From: ${getAuthorById(obj)} (${getAuthorEmailById(obj)})</li>
    <li>Topic: ${getTopicById(obj)}</li>
    <li>sent: ${obj.date}</li>
    `
    return html
}

const getAuthorById = (singleObject) => {
    const authors = getAuthors() 
    let foundAuthor = authors.find(item => item.id == singleObject.authorId)
    return foundAuthor.name
}

const getRecipientById = (singleObject) => {
    const recipients = getRecipients()
    let foundRecipient = recipients.find(item => item.id == singleObject.recipientId)
    return foundRecipient.name
}

const getTopicById = (singleObject) => {
    const topics = getTopics()
    let foundTopic = topics.find(item => item.id == singleObject.topicId)
    return foundTopic.name
}

const getRecipientEmailById = (singleObject) => {
    const recipients = getRecipients()
    let foundRecipient = recipients.find(item => item.id == singleObject.recipientId)
    return foundRecipient.email
}

const getAuthorEmailById = (singleObject) => {
    const authors = getAuthors() 
    let foundAuthor = authors.find(item => item.id == singleObject.authorId)
    return foundAuthor.email
}

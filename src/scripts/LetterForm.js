import { getAuthors, getTopics } from "./DataAccess.js"

export const letterForm = () => {
    let html = `
    <div class="field">
        <label>Author</label>
        ${buildAuthors()}
    </div>
    <div class="field">
        <label class="label">Letter</label>
        <input class="input" type="textarea"></input>
    </div>
    <div class="field">
        <label class="label">Topics</label>
        ${buildTopics()}
    </div>
    <div class="field">
        <label class="label">Recipient</label>
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
        html += `<option value="${author.id}">${author.name}</option>`
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
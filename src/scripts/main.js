import { fetchAuthors, fetchRecipients, fetchRequests, fetchTopics } from "./DataAccess.js"
import { penPal } from "./PenPal.js"
const mainContainer = document.querySelector('#container')

document.addEventListener(
    'stateChanged', 
    customEvent => {
        render()
    })

const render = () => {
    fetchRequests()
    .then(() => fetchAuthors())
    .then(() => fetchTopics())
    .then(() => fetchRecipients())
    .then(() => {
        mainContainer.innerHTML = penPal()
    })
}

render()
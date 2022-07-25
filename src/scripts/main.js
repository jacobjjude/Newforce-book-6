import { fetchAuthors, fetchRequests, fetchTopics } from "./DataAccess.js"
import { penPal } from "./PenPal.js"
const mainContainer = document.querySelector('#container')

const render = () => {
    fetchRequests()
    .then(() => fetchAuthors())
    .then(() => fetchTopics())
    .then(() => {
        mainContainer.innerHTML = penPal()
    })
}

render()
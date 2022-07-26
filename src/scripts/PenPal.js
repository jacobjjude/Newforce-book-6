import { letterForm } from "./LetterForm.js"
import { Requests } from "./Requests.js"

export const penPal = () => {
    return `<h1>Pen Pal Society</h1>
    <section class="letterForm">
        ${letterForm()}
    </section>
    <section class="requests">
        ${Requests()}
    </section>`
}
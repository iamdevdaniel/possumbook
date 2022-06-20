import styles from './Post.style.css'
import template from './Post.template.js'
import { getStylesheet } from '../utils/getStylesheet.js'

export class Post extends HTMLElement {

    constructor(props) {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(template.content.cloneNode(true))
        this.shadow.appendChild(getStylesheet(styles))

        this.#defineProperties()
        this.#defineEvents()
        this.#mapProps(props)
    }

    #mapProps({
        comments,
        header,
        image,
        save,
        vote,
    }) {
        this.header.textContent = header
        this.image.setAttribute('src', image)
        this.controls.save.classList.toggle(save ? 'clicked' : null)
        this.controls.vote.classList.toggle(vote ? 'clicked' : null)
    }

    #defineProperties() {
        this.image = this.shadow.querySelector('.image')
        this.header = this.shadow.querySelector('.header')
        this.controls = {
            vote: this.shadow.querySelector('.vote'),
            comment: this.shadow.querySelector('.comment'),
            save: this.shadow.querySelector('.save'),
        }
    }

    #defineEvents() {
        this.controls.comment.addEventListener('click', (e) => this.#onControlClick(e, { controlName: 'comment' }))
        this.controls.save.addEventListener('click', (e) => this.#onControlClick(e, { controlName: 'save' }))
        this.controls.vote.addEventListener('click', (e) => this.#onControlClick(e, { controlName: 'vote' }))
    }

    #onControlClick(e, { controlName }) {

        e.stopPropagation()

        const elementControl = this.controls[controlName]

        if(elementControl) {
            elementControl.classList.toggle('clicked')
        }
    }
}

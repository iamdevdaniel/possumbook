import styles from './Post.style.css'
import template from './Post.template.js'
import { getStylesheet } from '../utils/getStylesheet.js'

export class Post extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(template.content.cloneNode(true))
        this.shadow.appendChild(getStylesheet(styles))
        this.#defineProperties()
        this.#defineEvents()
    }

    static get observedAttributes() {
        return ['src', 'header', 'save', 'vote']
    }

    attributeChangedCallback(controlName, _, newValue) {
        switch(controlName) {
            case 'src': {
                this.image.setAttribute('src', newValue)
                break
            }
            case 'header': {
                this.header.textContent = newValue
                break
            }
            case 'save': {
                const saveActive = newValue === 'true' ? 'clicked' : null
                this.controls.save.classList.toggle(saveActive)
                break
            }
            case 'vote': {
                const saveActive = newValue === 'true' ? 'clicked' : null
                this.controls.vote.classList.toggle(saveActive)
                break
            }
        }
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

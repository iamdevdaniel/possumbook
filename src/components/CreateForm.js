import styles from './CreateForm.style.css'
import template from './CreateForm.template.js'
import { getStylesheet } from '../utils/getStylesheet.js'
import { createPost } from '../services/store.js'

export class CreateForm extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(template.content.cloneNode(true))
        this.shadow.appendChild(getStylesheet(styles))

        this.#defineProperties()
        this.#defineEvents()
    }

    #defineProperties() {
        this.inputs = {
            image: this.shadow.querySelector('.image'),
            header: this.shadow.querySelector('.header'),
        }
        this.controls = {
            cancel: this.shadow.querySelector('.cancel'),
            save: this.shadow.querySelector('.save'),
        }
    }

    #defineEvents() {
        this.controls.cancel.addEventListener('click', (e) => this.#onCancel(e, this.inputs))
        this.controls.save.addEventListener('click', (e) => this.#onSave(e, this.inputs))
    }

    #onCancel(_, inputs) {
        inputs.image.value = null
        inputs.header.value = null
    }

    async #onSave(_, inputs) {

        createPost({
            header: inputs.header.value,
            image: inputs.image.value,
            comments: [],
            save: false,
            vote: false,
        })
    }

}

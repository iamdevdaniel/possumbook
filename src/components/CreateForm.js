import styles from './CreateForm.styles.css'
import template from './CreateForm.template.js'
import { getStylesheet } from '../utils/styles.js'
import { createPost } from '../services/store.js'

export class CreateForm extends HTMLElement {


    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(template.content.cloneNode(true))
        this.shadow.appendChild(getStylesheet(styles))

        this.#defineProperties()
    }

    connectedCallback() {
        this.#defineEvents()
    }

    disconnectedCallback() {
        this.#removeEvents()
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
        this.controls.cancel.addEventListener('click', this.#onCancel)
        this.controls.save.addEventListener('click', this.#onSave)
    }

    #removeEvents() {
        this.controls.cancel.removeEventListener('click', this.#onCancel)
        this.controls.save.removeEventListener('click', this.#onSave)
    }

    #onCancel = () => {
        this.inputs.image.value = null
        this.inputs.header.value = null
    }

    #onSave = async () => {

        createPost({
            header: this.inputs.header.value,
            image: this.inputs.image.value,
            comments: [],
            save: false,
            vote: false,
        })
    }

}

import styles from './CreateForm.style.css'
import template from './CreateForm.template.js'
import { getStylesheet } from '../utils/getStylesheet.js'

export class CreateForm extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(template.content.cloneNode(true))
        this.shadow.appendChild(getStylesheet(styles))

        this.#defineProperties()
        // this.#defineEvents()
        // this.#mapProps(props)
    }

    #defineProperties() {
        this.imageInput = this.shadow.querySelector('.image')
        this.headerInput = this.shadow.querySelector('.header')
    }

}

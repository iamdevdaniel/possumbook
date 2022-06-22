import template from "./LoginForm.template.js"
import styles from './LoginForm.styles.css'
import { getStylesheet } from '../utils/styles.js'

export class LoginForm extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(template.content.cloneNode(true))
        this.shadow.prepend(getStylesheet(styles))
    }
}

import template from './Router.template.js'
import styles from './Router.styles.css'
import { getStylesheet } from '../utils/styles.js'

export class Router extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(template.content.cloneNode(true))
        this.shadow.appendChild(getStylesheet(styles))
    }
}

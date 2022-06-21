import template from './Router.template.js'
import styles from './Router.styles.css'
import { getStylesheet } from '../utils/styles.js'
import { Feed } from './Feed.js'

export class Router extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(template.content.cloneNode(true))
        this.shadow.appendChild(getStylesheet(styles))
        this.shadow.appendChild(new Feed)
        
        this.#defineProperties()
        this.#defineEvents()
        // this.#mapProps(props)
    }

    #defineProperties() {
        this.routes = [
            {
                elem: this.shadow.querySelector('.create'),
                name: 'create',
            },
            {
                elem: this.shadow.querySelector('.feed'),
                name: 'feed',
            },
            {
                elem: this.shadow.querySelector('.saved'),
                name: 'saved'
            },
        ]
    }

    #defineEvents() {
        this.routes.forEach(route => {
            const { elem } = route
            elem.addEventListener('click', (e) => this.#onSelectRoute(e, route))
        })
    }

    #onSelectRoute(e, route) {
        e.preventDefault()
        
        const { elem, name } = route
        this.#toggleRouterTabs(route)
    }

    #toggleRouterTabs(selected) {
        this.routes.forEach(route => {
            if (selected.name === route.name) {
                route.elem.classList.toggle('active')
            }
            else {
                route.elem.classList.remove('active')
            }
        })
    }
}

import template from './Router.template.js'
import styles from './Router.styles.css'
import { getStylesheet } from '../utils/styles.js'
import { Feed } from './Feed.js'
import { CreateForm } from './CreateForm.js'

export class Router extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(template.content.cloneNode(true))
        this.shadow.appendChild(getStylesheet(styles))
        
        this.#defineProperties()
        // this.#mapProps(props)
    }

    connectedCallback() {
        this.#defineEvents()

        // this.container.appendChild(new CreateForm())
        this.container.appendChild(new Feed())
    }

    #defineProperties() {
        this.container = this.shadow.querySelector('.container')
        this.routes = [
            {
                content: new CreateForm(),
                path: '/create',
                tab: this.shadow.querySelector('.create'),
            },
            {
                content: new Feed(),
                tab: this.shadow.querySelector('.feed'),
                path: '/feed',
            },
            {   
                content: null,
                path: '/saved',
                tab: this.shadow.querySelector('.saved'),
            },
        ]
    }

    #defineEvents() {
        this.routes.forEach(route => {
            const { tab } = route
            tab.addEventListener('click', this.#onSelectRoute(route))
        })
    }

    #onSelectRoute = (route) => {

        return (e) => {

            e.preventDefault()

            this.#toggleRouterTabs(route)
        }
    }

    #toggleRouterTabs(selected) {
        this.routes.forEach(route => {
            if (selected.path === route.path) {
                const isActive = route.tab.classList.contains('active')
                route.tab.classList.add( isActive ? null : 'active')
            }
            else {
                route.tab.classList.remove('active')
            }
        })
    }
}

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
    }
    
    connectedCallback() {
        this.#defineEvents()
        this.#onSelectRoute(this.routes.FEED)()
    }

    #defineProperties = () => {
        this.container = this.shadow.querySelector('.container')
        this.routes = {
            FEED: {
                getContent: () => new Feed(),
                tab: this.shadow.querySelector('.feed'),
                path: '/feed',
            },
            CREATE_FORM: {
                getContent: () => new CreateForm(),
                path: '/create',
                tab: this.shadow.querySelector('.create'),
            },
        }
    }

    #defineEvents = () => {
        Object.values(this.routes).forEach(route => {
            const { tab } = route
            tab.addEventListener('click', this.#onSelectRoute(route))
        })
    }

    #onSelectRoute = (route) => {

        return (e) => {
            
            e?.preventDefault()

            this.#toggleTabsStyles(route)

            window.history.pushState({}, '', route.path)
            
            this.container.innerHTML = null
            this.container.appendChild(route.getContent())
        }
    }

    #toggleTabsStyles = (selected) => {
        Object.values(this.routes).forEach(route => {
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

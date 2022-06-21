import styles from './Feed.styles.css'
import template from './Feed.template.js'
import { getStylesheet } from '../utils/styles.js'
import { getAllPosts } from '../services/store.js'
import { Post } from './Post.js'

export class Feed extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(template.content.cloneNode(true))
        this.shadow.prepend(getStylesheet(styles))
        this.container = this.shadow.querySelector('.container')
    }

    connectedCallback() {
        this.#renderPosts()
    }

    async #renderPosts() {
        
        const allPosts = await getAllPosts()

        allPosts.forEach(post => {

            const newPost = new Post({ ...post })
            this.container.appendChild(newPost)
        })
    }
}
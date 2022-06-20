import styles from './Feed.style.css'
import template from './Feed.template.js'
import { getStylesheet } from '../utils/getStylesheet.js'
import { getAllPosts } from '../services/store.js'

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
            const newPost = document.createElement('custom-post')
            newPost.setAttribute('id', post.id)
            newPost.setAttribute('comment', post.comment)
            newPost.setAttribute('header', post.header)
            newPost.setAttribute('save', post.save)
            newPost.setAttribute('src', post.image)
            newPost.setAttribute('vote', post.vote)
            this.container.appendChild(newPost)
        })
    }
}
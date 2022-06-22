import template from './LoginForm.template.js'
import styles from './LoginForm.styles.css'
import { getStylesheet } from '../utils/styles.js'

import { signUp } from '../services/auth.js'

const ACTIONS = {
    LOG_IN: 'log-in',
    SIGN_UP: 'sign-up',
}
export class LoginForm extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(template.content.cloneNode(true))
        this.shadow.prepend(getStylesheet(styles))

        this.#defineProperties()
        this.#defineEvents()
    }

    #defineProperties = () => {
        this.controls = {
            logIn: this.shadow.querySelector('.log-in'),
            signUp: this.shadow.querySelector('.sign-up'),
        }
        this.inputs = {
            email: this.shadow.querySelector('.email'),
            password: this.shadow.querySelector('.password'),
        }
        this.methods = {
            continue: this.shadow.querySelector('.continue'),
            useGoogle: this.shadow.querySelector('.use-google'),
        }

        this.activeAction = ACTIONS.LOG_IN
    }

    #defineEvents(){
        this.methods.continue.addEventListener('click', this.#onSignUp)
        this.controls.logIn.addEventListener('click', (e) => this.#onSelectAction(e, { action: ACTIONS.LOG_IN }))
        this.controls.signUp.addEventListener('click', (e) => this.#onSelectAction(e, { action: ACTIONS.SIGN_UP }))
    }

    #onSignUp = async () => {

        const email = this.inputs.email.value
        const password = this.inputs.password.value

        console.log({ email, password })

        if(email && password) {

            console.log(await signUp(email, password, false))
        }

    }

    #onSelectAction(e, { action }) {
        
        e.preventDefault()
        
        this.activeAction = action

        this.#toggleControlStyles(action)
    }

    #toggleControlStyles = (selected) => {

        Object.values(this.controls).forEach(control => {

            const isActive = control.classList.contains('active')
            const nameMatches = control.classList.contains(selected)

            if(!isActive && nameMatches) {
                control.classList.add('active')
            }
            else if(!nameMatches){
                control.classList.remove('active')
            }
        })

        this.methods.continue.innerHTML = this.activeAction === ACTIONS.LOG_IN ? 'Log In' : 'Sign Up'
    }
}

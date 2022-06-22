import './src/services/'

import { CreateForm } from './src/components/CreateForm.js'
import { Feed } from './src/components/Feed.js'
import { LoginForm } from './src/components/LoginForm.js'
import { Post } from'./src/components/Post.js'
import { Router } from './src/components/Router.js'

customElements.define('create-form', CreateForm)
customElements.define('custom-feed', Feed)
customElements.define('custom-post', Post)
customElements.define('custom-router', Router)
customElements.define('login-form', LoginForm)

import './src/services/'
import { Post } from'./src/components/Post.js'
import { Feed } from './src/components/Feed.js'
import { CreateForm } from './src/components/CreateForm.js'

customElements.define('create-form', CreateForm)
customElements.define('custom-feed', Feed)
customElements.define('custom-post', Post)


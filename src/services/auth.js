import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js"
import {
    GoogleAuthProvider,
    getAuth,
    signInWithRedirect,
    getRedirectResult,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js"

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider(app)

login.addEventListener('click', _ => {
    
    signInWithRedirect(auth, provider)
 
    getRedirectResult(auth)
        .then(result => {
            
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
        })
        .catch(error => {
            const errorCode = error.errorCode
            const errorMessage = error.message
            const email = error.email
            const credential = GoogleAuthProvider.credentialFromError(error)
        })
})




import { app } from './index.js'
import { 
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth'

const auth = getAuth(app)

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log('observer: logged in', { user })
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
    } else {
        console.log('observer: logged out', { user })
  }
});

const signUp = async (email, password, withGoogle = false) => {

    try {
        const response = withGoogle
            ? null
            : await createUserWithEmailAndPassword(auth, email, password)

        return { response, ok: true }
    }
    catch(error) {
        return { error, ok: false }
    }
}

export {
    signUp,
}
import { app } from './index.js'
import {
    addDoc,
    collection,
    getDocs,
    getFirestore,
} from 'firebase/firestore'

const COLLECTION = {
    POSTS: 'posts',
}

const getAllPosts = async () => {

    const db = getFirestore(app)
    const collectionRef = collection(db, COLLECTION.POSTS);
    const snapshot = await getDocs(collectionRef);

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

const createPost = async (post) => {

    const db = getFirestore(app)
    addDoc(collection(db, COLLECTION.POSTS), post)
}

export{
    createPost,
    getAllPosts,
}
import {
    app,
    collection,
    getDocs,
    getFirestore,
} from './index.js'

const COLLECTION = {
    POSTS: 'posts',
}

const getAllPosts = async () => {

    const db = getFirestore(app)
    const collectionRef = collection(db, COLLECTION.POSTS);
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export{
    getAllPosts,
}
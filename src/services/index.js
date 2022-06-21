import { initializeApp } from 'firebase/app'

const app = initializeApp({
    apiKey: process.env.API_KEY,
    appId: process.env.APP_ID,
    authDomain: process.env.AUTH_DOMAIN,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
})

export { app }

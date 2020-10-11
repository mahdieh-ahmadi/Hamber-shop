import axios from 'axios'

const intence = axios.create({
    baseURL:'https://my-berger-3af2b.firebaseio.com/'
})

export default intence
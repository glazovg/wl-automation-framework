import dotenv from 'dotenv'

dotenv.config()

const user = {
    name: process.env.USER,
    password: process.env.PASSWORD,
    nullName: null,
    nullPassword: null
}

export default user
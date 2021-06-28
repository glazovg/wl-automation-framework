const configs = {
    qa:{
        url:'https://www.saucedemo.com/'
    }
}

const env=  process.env.NODE_ENV || 'qa'
const config = { ...configs[env] }

export {config as default}
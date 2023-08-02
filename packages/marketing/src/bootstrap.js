// Mount Function to start up the app
import React from "react"
import ReactDOM from "react-dom"

const mount = (el) => {
    ReactDOM.render(<h1>Hi there!</h1>, el)
}

// If we are in the development and isolation,
// call mount immediately

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root')

    if(devRoot){
        mount(devRoot)
    }
}

// We are running through container
// and we should export the mount function
export {mount}
//html - <script ="./js/react.development.js"></script>

// es2015 (es6) module loaders - React, Angular

import React from 'react'
import ReactDOM from 'react-dom'
import configStore from './redux/configureStore/store.js'
import { Provider } from 'react-redux'


import App from './App.js'

const store = configStore()


store.subscribe(() => {
    console.log(store.getState())

}
)
export default store

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(ele, document.getElementById('root'));


// common module loaders - node, express
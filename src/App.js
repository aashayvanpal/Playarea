import React from 'react'
import Parent from './Parent.js'
import Texts from './reverse-string.js'
import { city, msg } from './Data.js'
import Users from './Users.js'
import ReduxPage from './redux/page.js'
import GoogleMapPage from './GoogleMap.js'
import CarouselPage from './CarouselPage.js'
import DivPage from './DivPage.js'
import CardPage from './CardPage.js'
import Footer from './Footer.js'
import OrderNowPage from './orderNowPage.js'
import './assets/styles.css'
// npm install --save axios
import axios from 'axios'

import { BrowserRouter, Route, Link } from 'react-router-dom'



function App(props) {
    return (
        <BrowserRouter>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap');
            </style>

            <div>
                <h1>Hello React JavaScript</h1>

                <Link to='/parent-link'>Parent</Link>
                <Link to='/Users'>Users</Link>
                <Link to='/Reverse-string-link'>Reverse-the-string</Link>
                <Link to='/Redux'>Redux</Link>
                <Link to='/GoogleMap'>Google Map</Link>
                <Link to='/Carousel'>Carousel</Link>
                <Link to='/div'>DivPage</Link>
                <Link to='/cards'>Cards</Link>
                <Link to='/footer'>Footer</Link>
                <Link to='/ordernow'>Ordernow</Link>

                <Route path='/parent-link' component={Parent} />
                <Route path='/Reverse-string-link' render={() => {
                    return <Texts txt='Hello World' />
                }} />

                <Route path='/Users' component={Users} />
                <Route path='/Redux' component={ReduxPage} />
                <Route path='/GoogleMap' component={GoogleMapPage} />
                <Route path='/Carousel' component={CarouselPage} />
                <Route path='/div' component={DivPage} />
                <Route path='/cards' component={CardPage} />
                <Route path='/footer' component={Footer} />
                <Route path='/ordernow' component={OrderNowPage} />



                {/* <Route path='/users/:id' component={UserShow} /> */}
            </div>
        </BrowserRouter>

    )
}

export default App
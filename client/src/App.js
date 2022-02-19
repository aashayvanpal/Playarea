import React from 'react'
import Posts from './components/Posts.js'
import Header from './components/Header.js'
import Email from './components/Email.js'
import Home from './components/Home.js'
import Model from './components/Model.js'
import NotFoundPage from './components/NotFoundPage.js'
import { Switch, BrowserRouter, Link, Route } from 'react-router-dom'

export default function App() {
  return (
    < div className="app" >
      <h2>Play area App </h2>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/header">Header</Link>
        <Link to="/emails">Email</Link>
        <Link to="/model">model back</Link>
          <Email />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route exact path="/header" component={Header} />
          <Route path="/emails" component={Email} />
          <Route path="/model" component={Model} />
          <Route path="*" component={NotFoundPage} />
        </Switch>

      </BrowserRouter>
    </div >
  )

}
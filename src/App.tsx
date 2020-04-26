import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components'
import { Tags } from 'views/Tags'
import { Money } from 'views/Money'
import { Statistics } from 'views/Statistics'
import { NoMatch } from 'views/NoMatch'

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from="/" to="/money" />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        {/* <Nav/> */}
    </Router>
  )
}

import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Tags } from 'views/Tags'
import { Money } from 'views/Money'
import { Statistics } from 'views/Statistics'
import { NoMatch } from 'views/NoMatch'
import styled from 'styled-components'
import { EditTag } from 'views/EditTag'

const AppWrapper = styled.div`
  color: #333;
`

export default function App() {
  return (
    <AppWrapper>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/tags/:tag">
            <EditTag/>
          </Route>
          <Route exact path="/money">
            <Money />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        {/* <Nav/> */}
      </Router>
    </AppWrapper>
  )
}

import React from 'react'
import { setContext } from 'apollo-link-context'
import { InMemoryCache, ApolloClient } from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import OrganisationSwitcher from './containers/OrganisationSwitcher'
import Organisations from './containers/Organisations'
import Organisation from './containers/Organisation'
import User from './containers/User'
import './App.css'
import { Grid, Avatar, ListItem, List, ListItemAvatar, ListItemText } from '@material-ui/core'

export function getApolloClient(getToken: Promise<() => Promise<string>>) {
  const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' })

  const authLink = setContext(async (_, { headers }) => {
    // return the headers to the context so httpLink can read them
    const token = await (await getToken)()
    return {
      headers: {
        ...headers,
        Accept: 'application/vnd.github.flash-preview+json',
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

  const apolloConfig = {
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  }

  return new ApolloClient(apolloConfig)
}

function App(props: { getToken: Promise<() => Promise<string>> }) {
  const client = React.useMemo(() => getApolloClient(props.getToken), [])
  return (
    <ApolloProvider client={client}>
      <Router>
        <Grid container spacing={0} className="topNav">
          <Grid item xs={4}>
            <List component="nav" aria-label="Select">
              <ListItem button component="a" href="/">
                <ListItemAvatar>
                  <Avatar src="https://github.com/identicons/app/app/deployment-management"></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Github Deployment Management" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4} className="page-title">
            Github Deployment Management
          </Grid>
          <Grid item xs={2} className="switcher">
            <OrganisationSwitcher />
          </Grid>
        </Grid>
        <Switch>
          <Route path="/organisations/:owner">
            <Organisation></Organisation>
          </Route>
          <Route path="/user/:owner">
            <User></User>
          </Route>
          <Route path="/">
            <Organisations></Organisations>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App

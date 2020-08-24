import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { useQuery } from '@apollo/react-hooks'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Repositories } from '../types/queries'
import { DocumentNode } from 'graphql'

type Props<R> = {
  query: DocumentNode
  after?: string
  map: (response: R) => Repositories
  variables: Record<string, unknown>
}
function RepoList<R>(props: Props<R>) {
  const { loading, error, data } = useQuery<R>(props.query, {
    variables: { after: props.after, ...props.variables }
  })

  const base = useRouteMatch().url + '/'

  const history = useHistory()
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  if (data) {
    const repositories = props.map(data)
    return (
      <List component="nav">
        {repositories.nodes.map((repo) => {
          return (
            <ListItem key={repo.name} button>
              <ListItemText onClick={() => history.push(base + repo.name)} primary={repo.name} />
            </ListItem>
          )
        })}
      </List>
    )
  }

  return <div>no repositories</div>
}

export default RepoList

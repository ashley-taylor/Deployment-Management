import React, { FunctionComponent } from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'

import { useQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { ORGANISATIONS, OrganisationsSummary, Viewer } from '../types/queries'

const Organisations: FunctionComponent = () => {
  const { loading, error, data } = useQuery<Viewer<OrganisationsSummary>>(ORGANISATIONS)

  const history = useHistory()
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }

  if (data) {
    return (
      <List component="nav">
        <ListItem key={data.viewer.resourcePath} button>
          <ListItemAvatar>
            <Avatar src={data.viewer.avatarUrl}></Avatar>
          </ListItemAvatar>
          <ListItemText
            onClick={() => history.push('/user' + data.viewer.resourcePath)}
            primary={data.viewer.name ? data.viewer.name : data.viewer.login}
          />
        </ListItem>
        {data.viewer.organizations.nodes.map((organisation) => {
          return (
            <ListItem key={organisation.resourcePath} button>
              <ListItemAvatar>
                <Avatar src={organisation.avatarUrl}></Avatar>
              </ListItemAvatar>
              <ListItemText
                onClick={() => history.push('/organisations' + organisation.resourcePath)}
                primary={organisation.name}
              />
            </ListItem>
          )
        })}
      </List>
    )
  }

  return <div>no organisations</div>
}

export default Organisations

import React, { FunctionComponent } from 'react'
import {
  TextField,
  makeStyles,
  createStyles,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  List
} from '@material-ui/core'

import { Autocomplete } from '@material-ui/lab'
import { Theme } from '@material-ui/core'
import { phocasColors } from '../theme'
import { useQuery } from '@apollo/react-hooks'
import { Switch, Route, withRouter, RouteComponentProps, useHistory } from 'react-router-dom'
import { ORGANISATIONS, OrganisationsSummary, OrganisationSummary, Viewer } from '../types/queries'

const useStylesTextField = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: 14,
      background: phocasColors.white,
      float: 'right',
      marginRight: 10,
      '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
        padding: `0 0 0 ${theme.spacing(1)}px`
      },
      '& .MuiInputBase-root': {
        fontSize: 14,
        marginTop: -3,
        background: '#4ec6e0',
        padding: 3.5,
        color: phocasColors.white,
        borderRadius: 0
      },
      '& .MuiInputBase-input': {
        color: phocasColors.white
      },
      '& .MuiInputBase-input::placeholder': {
        color: phocasColors.white,
        opacity: 1,
        fontSize: 14
      }
    }
  })
)

type RouteProps = {
  id: string | undefined
}

const OrganisationSwitcher: FunctionComponent<RouteComponentProps<RouteProps>> = (
  props: RouteComponentProps<RouteProps>
) => {
  const history = useHistory()
  const { loading, error, data } = useQuery<Viewer<OrganisationsSummary>>(ORGANISATIONS)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, url: string) => {
    setAnchorEl(null)
    history.push(url)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const textFieldClasses = useStylesTextField()

  if (loading) {
    return <div style={{ float: 'right', marginRight: 50 }}>Loading...</div>
  }
  if (error) {
    return <div style={{ float: 'right', marginRight: 50 }}>{error.message}</div>
  }

  if (data) {
    type Option = OrganisationSummary & { url: string }
    const options: Option[] = [{ ...data.viewer, url: '/user' + data.viewer.resourcePath }]
    data.viewer.organizations.nodes.forEach((element) => {
      options.push({ ...element, url: '/organisations' + element.resourcePath })
    })

    const selected = options.find((org) => org.resourcePath === '/' + props.match.params.id)
    return (
      <>
        <List component="nav" aria-label="Select">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            onClick={handleClickListItem}
          >
            {selected ? (
              <>
                <ListItemAvatar>
                  <Avatar src={selected.avatarUrl}></Avatar>
                </ListItemAvatar>
                <ListItemText primary={selected.name} />
              </>
            ) : (
              <ListItemText primary="Select" />
            )}
          </ListItem>
        </List>
        <Menu id="lock-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          {options.map((organisation) => (
            <MenuItem
              key={organisation.url}
              selected={organisation === selected}
              onClick={(event) => handleMenuItemClick(event, organisation.url)}
            >
              <ListItemAvatar>
                <Avatar src={organisation.avatarUrl}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={organisation.name} />
            </MenuItem>
          ))}
        </Menu>
      </>
    )
  }

  return <div style={{ float: 'right', marginRight: 50 }}>no organisations</div>
}

const Switcher = withRouter(OrganisationSwitcher)

const SwitcherWrapper: FunctionComponent = () => {
  return (
    <div>
      <Switch>
        <Route path="/user/:id">
          <Switcher />
        </Route>
        <Route path="/user/:id/*">
          <Switcher />
        </Route>
        <Route path="/organisations/:id">
          <Switcher />
        </Route>
        <Route path="/organisations/:id/*">
          <Switcher />
        </Route>
        <Route path="/">
          <Switcher />
        </Route>
      </Switch>
    </div>
  )
}

export default SwitcherWrapper

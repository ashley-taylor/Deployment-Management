import React, { FunctionComponent } from 'react'

import { USER_REPO, RepoQuery, Viewer } from '../types/queries'
import RepoList from './RepoList'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Repository from './Repository'

const User: FunctionComponent = () => {
  const base = useRouteMatch().path

  return (
    <Switch>
      <Route path={base + '/:repository'}>
        <Repository></Repository>
      </Route>
      <Route path={base}>
        <RepoList query={USER_REPO} map={(res: Viewer<RepoQuery>) => res.viewer.repositories} variables={{}}></RepoList>
      </Route>
    </Switch>
  )
}

export default User

import React, { FunctionComponent } from 'react'

import { ORGANISTAION_REPO, organisationRepoQuery } from '../types/queries'
import RepoList from './RepoList'
import { withRouter, RouteComponentProps, Switch, Route, useRouteMatch } from 'react-router-dom'
import Repository from './Repository'

type RouteProps = {
  owner: string
}

const Organisation: FunctionComponent<RouteComponentProps<RouteProps>> = (props: RouteComponentProps<RouteProps>) => {
  const base = useRouteMatch().path

  return (
    <Switch>
      <Route path={base + '/:repository'}>
        <Repository></Repository>
      </Route>
      <Route path={base}>
        <RepoList
          query={ORGANISTAION_REPO}
          map={(res: organisationRepoQuery) => res.organization.repositories}
          variables={{ organisation: props.match.params.owner }}
        ></RepoList>
      </Route>
    </Switch>
  )
}

export default withRouter(Organisation)

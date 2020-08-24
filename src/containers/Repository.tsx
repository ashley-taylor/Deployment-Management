import React, { FunctionComponent } from 'react'

import { REPOSITORY, Repository, CREATE_DEPLOYMENT } from '../types/queries'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Button, Input, Grid } from '@material-ui/core'

type RouteProps = {
  owner: string
  repository: string
}

const RepositoryComponent: FunctionComponent<RouteComponentProps<RouteProps>> = (
  props: RouteComponentProps<RouteProps>
) => {
  const { loading, error, data } = useQuery<Repository>(REPOSITORY, {
    variables: { owner: props.match.params.owner, name: props.match.params.repository }
  })
  const [createDeployment, { loading: loadingMutation }] = useMutation(CREATE_DEPLOYMENT)

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  if (data) {
    const repository = data.repository

    const submit = {
      autoMerge: true,
      description: 'test123',
      environment: 'stage',
      payload: '{"extra": true}',
      refId: repository.defaultBranchRef.id,
      repositoryId: repository.id,
      requiredContexts: [],
      task: undefined
    }
    const deploy = () => {
      createDeployment({
        variables: {
          input: submit
        }
      })
    }

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>{repository.name}</h1>
        </Grid>
        <Grid item xs={12}>
          <Input name="ref" value="master" />
        </Grid>
        <Grid item xs={12}>
          <Input name="payload" value="master" />
        </Grid>
        <Grid item xs={12}>
          <Input name="Environment" value="production" />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={deploy}>Deploy</Button>
        </Grid>
      </Grid>
    )
  }
  return <>No repository not found</>
}

export default withRouter(RepositoryComponent)

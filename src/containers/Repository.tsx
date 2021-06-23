import React, { FunctionComponent } from 'react'

import { REPOSITORY, Repository, CREATE_DEPLOYMENT, Deployment } from '../types/queries'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Button, Grid, TextField, Select, InputLabel, MenuItem, Checkbox } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import PreviousDeployments from './PreviousDeployments'
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
  const [createDeployment, { loading: loadingMutation }] = useMutation(CREATE_DEPLOYMENT, {
    refetchQueries: ['repository']
  })

  const [ref, setRef] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [payload, setPayload] = React.useState('')
  const [environment, setEnvironment] = React.useState('')
  const [autoMerge, setAutoMerge] = React.useState(true)

  const name = data?.repository.defaultBranchRef.name
  React.useEffect(() => {
    if (name) {
      setRef(name)
    }
  }, [name])

  if (loading || loadingMutation) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  if (data) {
    const repository = data.repository

    const environments = Array.from(
      new Set(['-', ...data.repository.deployments.nodes.map((node) => node.environment)])
    )

    const refs = Array.from(
      new Set([
        data.repository.defaultBranchRef,
        ...data.repository.tags.nodes.map((ref) => ref),
        ...data.repository.branches.nodes.map((ref) => ref)
      ])
    )

    const payloads = Array.from(
      new Set(data.repository.deployments.nodes.filter((node) => node.payload).map((node) => node.payload))
    )

    const descriptions = Array.from(
      new Set(data.repository.deployments.nodes.filter((node) => node.description).map((node) => node.description))
    )

    const handleRefChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setRef(event.target.value as string)
    }

    const submit = {
      autoMerge: autoMerge,
      description: description,
      environment: environment,
      payload: payload,
      refId: ref,
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

    const redeploy = (deployment: Deployment) => {
      setRef(deployment.ref.id)
      setPayload(deployment.payload)
      setEnvironment(deployment.environment)
    }

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>{repository.name}</h1>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Ref</InputLabel>
          <Select value={ref} onChange={handleRefChange} fullWidth={true}>
            {refs.map((ref) => (
              <MenuItem key={ref.id} value={ref.id}>
                {ref.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            options={descriptions}
            getOptionLabel={(option) => option}
            value={description}
            onChange={(event: unknown, newValue: string | null) => {
              if (newValue) {
                setDescription(newValue)
              }
            }}
            renderInput={(params) => <TextField {...params} multiline label="Description" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            options={payloads}
            getOptionLabel={(option) => option}
            value={payload}
            onChange={(event: unknown, newValue: string | null) => {
              if (newValue) {
                setPayload(newValue)
              }
            }}
            renderInput={(params) => <TextField {...params} multiline label="Payload" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            options={environments}
            getOptionLabel={(option) => option}
            value={environment}
            onChange={(event: unknown, newValue: string | null) => {
              if (newValue) {
                setEnvironment(newValue)
              }
            }}
            renderInput={(params) => <TextField {...params} label="Environment" />}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Auto Merge</InputLabel>
          <Checkbox
            checked={autoMerge}
            onChange={(event: unknown, checked: boolean) => {
              setAutoMerge(checked)
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={deploy}>Deploy</Button>
        </Grid>
        <Grid item xs={12}>
          <PreviousDeployments deployments={data.repository.deployments.nodes} redeploy={redeploy} />
        </Grid>
      </Grid>
    )
  }
  return <>No repository not found</>
}

export default withRouter(RepositoryComponent)

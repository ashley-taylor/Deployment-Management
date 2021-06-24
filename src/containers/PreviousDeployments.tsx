import React, { FunctionComponent } from 'react'

import { Deployment } from '../types/queries'
import { Button, Grid, Card, CardContent, Typography, Avatar, CardActions } from '@material-ui/core'

type Props = {
  deployments: Deployment[]
  redeploy: (deployment: Deployment) => void
}

const PreviousDeploymentsComponent: FunctionComponent<Props> = (props: Props) => {
  return (
    <Grid container spacing={3}>
      {props.deployments.map((deployment) => (
        <Grid item key={deployment.id} xs={12}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {deployment.ref?.name} - {deployment.state}
              </Typography>
              <Typography variant="h5" component="h2">
                {deployment.createdAt}
              </Typography>
              <Typography color="textSecondary">{deployment.environment}</Typography>
              <Typography variant="body2" component="p">
                <pre>{deployment.payload}</pre>
              </Typography>
              <Typography variant="body2" component="p">
                <Avatar src={deployment.creator.avatarUrl} />

                {deployment.creator.login}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => props.redeploy(deployment)}>
                Redeploy
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default PreviousDeploymentsComponent

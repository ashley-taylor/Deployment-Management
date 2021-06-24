import { gql } from 'apollo-boost'

export const ORGANISATIONS = gql`
  query {
    viewer {
      resourcePath
      login
      name
      avatarUrl
      organizations(first: 10) {
        nodes {
          resourcePath
          name
          avatarUrl
        }
      }
    }
  }
`

export type Viewer<R> = {
  viewer: R
}

export type OrganisationSummary = {
  resourcePath: string
  name: string
  avatarUrl: string
}

export type OrganisationsSummary = {
  organizations: {
    nodes: OrganisationSummary[]
  }
  login: string
} & OrganisationSummary

export const USER_REPO = gql`
  query repositories($after: String) {
    viewer {
      repositories(first: 100, orderBy: { field: UPDATED_AT, direction: DESC }, after: $after) {
        nodes {
          name
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`
export const ORGANISTAION_REPO = gql`
  query organisation($organisation: String!, $after: String) {
    organization(login: $organisation) {
      repositories(
        first: 100
        affiliations: [ORGANIZATION_MEMBER]
        ownerAffiliations: [ORGANIZATION_MEMBER]
        orderBy: { field: UPDATED_AT, direction: DESC }
        after: $after
      ) {
        nodes {
          name
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`

export type RepoQuery = {
  repositories: Repositories
}

export type organisationRepoQuery = {
  organization: {
    repositories: Repositories
  }
}

export type PageInfo = {
  endCursor: string
  hasNextPage: boolean
}

export type Repositories = {
  pageInfo: PageInfo
  nodes: Repo[]
}
export type Repo = {
  name: string
}

export const REPOSITORY = gql`
  query repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      description
      defaultBranchRef {
        id
        name
      }
      branches: refs(first: 100, orderBy: { direction: DESC, field: TAG_COMMIT_DATE }, refPrefix: "refs/heads/") {
        nodes {
          id
          name
        }
      }
      tags: refs(first: 100, orderBy: { direction: DESC, field: TAG_COMMIT_DATE }, refPrefix: "refs/tags/") {
        nodes {
          id
          name
        }
      }
      deployments(first: 100, orderBy: { direction: DESC, field: CREATED_AT }) {
        nodes {
          id
          description
          creator {
            avatarUrl
            login
          }
          commit {
            id
            message
          }
          ref {
            id
            name
          }
          state
          payload
          createdAt
          updatedAt
          environment

          originalEnvironment
          latestEnvironment
        }
      }
      releases(first: 100) {
        nodes {
          author {
            avatarUrl
            login
          }
          createdAt
          updatedAt
          name
          description
        }
      }
    }
  }
`

export type Deployment = {
  id: string
  description: string
  creator: {
    avatarUrl: string
    login: string
  }
  commit: {
    id: string
    message: string
  }
  ref?: Ref
  state: string
  payload: string
  createdAt: string
  updatedAt: string
  environment: string

  originalEnvironment: string
  latestEnvironment: string
}

export type Release = {
  id: string
}

export type Ref = {
  id: string
  name: string
}

export type Repository = {
  repository: {
    id: string
    name: string
    description: string
    defaultBranchRef: {
      id: string
      name: string
    }
    deployments: {
      nodes: Deployment[]
      pageInfo: PageInfo
    }
    releases: {
      nodes: Release[]
      pageInfo: PageInfo
    }
    branches: {
      nodes: Ref[]
    }
    tags: {
      nodes: Ref[]
    }
  }
}
export const CREATE_DEPLOYMENT = gql`
  mutation createDeployment($input: CreateDeploymentInput!) {
    createDeployment(input: $input) {
      autoMerged
      clientMutationId
      deployment {
        id
        description
        creator {
          avatarUrl
          login
        }
        commit {
          id
          message
        }
        state
        payload
        createdAt
        updatedAt
        environment
        originalEnvironment
        latestEnvironment
      }
    }
  }
`

const token = window.localStorage.getItem('githubtoken')
let state = window.localStorage.getItem('githubstate')
if (state === null) {
  const array = new Uint32Array(4)
  const random = window.crypto.getRandomValues(array)
  state = random.join()
  window.localStorage.setItem('githubstate', state)
}

const search = window.location.search
const urlParams = new URLSearchParams(search)
const code = urlParams.get('code')

const getToken = () => {
  const parts = encodeURIComponent(window.location.toString())
  window.location.href = `https://github.com/login/oauth/authorize?client_id=Iv1.8b0b75bc0049753c&redirect_uri=${parts}&state=${state}`
}

type Response = {
  access_token: string
  expires_in: number
  refresh_token: string
  refresh_token_expires_in: number
  token_type: string
}
class TokenControl {
  data?: Response

  set(data: Response) {
    this.data = data
  }

  async intialize(data: unknown) {
    const now = new Date().getUTCSeconds()
    const request = await fetch('https://d2ks1w3r94.execute-api.us-east-2.amazonaws.com/', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    if (!request.ok) {
      throw 'Failed to get access token'
    }
    const text = await request.text()

    const response = JSON.parse(text) as Response
    response.expires_in += now
    response.refresh_token_expires_in += now
    this.data = response
    window.localStorage.setItem('githubtoken', JSON.stringify(response))
  }

  async getToken(): Promise<string> {
    if (this.data === undefined) {
      throw 'misconfigured'
    }
    if (this.data.expires_in < new Date().getUTCSeconds()) {
      await this.refetchToken()
    }
    if (this.data.refresh_token_expires_in < new Date().getUTCSeconds()) {
      getToken()
    }
    return this.data.access_token
  }

  async refetchToken() {
    if (this.data === undefined) {
      throw 'misconfigured'
    }
    await this.intialize({ refresh_token: this.data?.refresh_token, grant_type: 'refresh_token' })
  }
}

const control = new TokenControl()

const toReturn: (redirect_uri: string) => Promise<() => Promise<string>> = () => {
  let tokenFetcher: Promise<() => Promise<string>>
  if (code !== null) {
    window.history.pushState({}, document.title, window.location.pathname)
    const data = {
      code,
      state,
      redirect_uri: window.location.toString()
    }
    tokenFetcher = control.intialize(data).then(() => Promise.resolve(() => control.getToken()))
  } else if (token === null) {
    getToken()
    tokenFetcher = Promise.resolve(() => control.getToken())
  } else {
    const response = JSON.parse(token) as Response
    if (response.access_token === undefined) {
      getToken()
    }
    control.set(response)
    tokenFetcher = Promise.resolve(() => control.getToken())
  }
  return tokenFetcher
}

export default toReturn

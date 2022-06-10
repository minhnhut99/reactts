export enum ReactAppEnv {
  development = 'development',
  staging = 'staging',
  production = 'production',
}

export enum Locale {
  ja = 'ja',
}

export enum Path {
  portal = '/',
  signin = 'signin',
  signup = 'signup',
  businessProcess = 'business-process',
  passwordRecover = 'password-recover',
}

export enum HttpStatusCode {
  ok = 200,
  unauthorized = 401,
  internalServerError = 500,
}

export enum ApiProxyBasePath {
  apicore = '629dbe953dda090f3c099c36.mockapi.io/api/v0',

  notificator = 'notificator',
}

export enum LocalStorageKey {
  token = 'token',
  currentWorkspaceId = 'currentWorkspaceId',
  currentApplicationId = 'currentApplicationId',
}

export enum RecoilAtomKey {
  token = 'token',
  userId = 'userId',
  currentWorkspaceId = 'currentWorkspaceId',
  currentApplicationId = 'currentApplicationId',
  messageQueue = 'messageQueue',
  unfinishedAsyncTaskCount = 'unfinishedAsyncTaskCount',
}

export enum QueryKey {
  bookItem = 'bookItem'
  // currentUser = 'currentUser',
  // workspaces = 'workspaces',
  // applications = 'applications',
}

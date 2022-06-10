// NOTE: 使用可能なクライアントメソッド、ハブメソッドの一覧は、以下リポジトリの README.md を参照
// https://github.com/creo-bpax/notificator
// サーバーから実行するクライアントメソッド名
export enum SignalRClientMethodName {
  receiveAsyncTask = 'ReceiveAsyncTask',
  receiveMessage = 'ReceiveMessage',
}

// クライアントから実行するサーバーのハブメソッド名
export enum SignalRHubMethodName {
  addToGroup = 'AddToGroup',
  removeFromGroup = 'RemoveFromGroup',
}

export enum AsyncTaskStatus {
  start = 'start',
  finished = 'finished',
  error = 'error',
}

export enum MessageType {
  error = 'error',
}

import axios from "axios";
import camelcaseKeys from "camelcase-keys";

const instance = axios.create();

declare module "axios" {
  export interface AxiosRequestConfig {
    timestamp?: number;
  }
}

instance.interceptors.request.use((config) => {
  config.timestamp = Date.now();
  return config;
});

instance.interceptors.response.use((response) => {
  if (response.data) {
    response.data = camelcaseKeys(response.data, { deep: true });
  }
  if (response.config.timestamp) {
    const responseTime = Date.now() - response.config.timestamp;
    if (responseTime > 2000) {
      // TODO: エラーログ収集ツールに送信
      // const url = response.config.url ? response.config.url : '';
      // const method = response.config.method ? response.config.method : '';
      // const sentryMessage = `Slow API call url:[${method}]${url} response time:${responseTime}ms`;
      // Sentry.captureMessage(sentryMessage, Sentry.Severity.Log);
    }
  }
  return response;
});

export default instance;

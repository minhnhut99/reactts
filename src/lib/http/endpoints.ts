import { ApiProxyBasePath } from '../../constants/appConstants';

export const getApiCoreBasePath = (path: string): string => `/${ApiProxyBasePath.apicore}/${path}`;

export const getNotificatorBasePath = (path: string): string => `/${ApiProxyBasePath.notificator}/${path}`;

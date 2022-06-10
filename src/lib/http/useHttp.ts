/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect } from 'react';
// import { useUserAuth } from '../auth/useUserAuth';
import instance from '../axios/axios';
// import { useMessageQueueState } from 'stores/messageQueueState';
import { getApiCoreBasePath } from './endpoints';


export const useHttp = () => {
  // const { token, signedOut } = useUserAuth();

  // useEffect(() => {
  //   instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // }, [token]);

  const getAsync = <Req, Res>(
    path: string,
    params?: Req,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Res, any>> =>
    instance.get<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), { params, ...config });

  const postAsync = <Req, Res>(path: string, data: Req, config?: AxiosRequestConfig) =>
    instance.post<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), data, config);

  const putAsync = <Req, Res>(path: string, data: Req, config?: AxiosRequestConfig): Promise<AxiosResponse<Res, any>> =>
    instance.put<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), data, config);

  const deleteAsync = <Req, Res>(path: string, data: Req): Promise<AxiosResponse<Res, any>> =>
    instance.delete<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), { data: data });

  const patchAsync = <Req, Res>(path: string, data: Req): Promise<AxiosResponse<Res, any>> =>
    instance.patch<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), data);

  const handleError = (error: any) => {
    console.log('Co loi xay ra');
  };

  return { http: { getAsync, postAsync, putAsync, deleteAsync, patchAsync }, handleError };
};

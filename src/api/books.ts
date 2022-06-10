import { useQuery } from "react-query";
import { QueryKey } from "../constants/appConstants";
import instance from "../lib/axios/axios";
import { useHttp } from "../lib/http/useHttp";
import { Books } from "../types/book";

export const useBookQuery = () => {
  const { http, handleError } = useHttp();
  // const { currentApplicationId, setCurrentApplicationId } = useApplicationState();
  return useQuery(
    QueryKey.bookItem,
    async () => {
      const res = await instance.get<null, Books>(
        "http://629dbe953dda090f3c099c36.mockapi.io/api/v0/books"
      );
      return res.data;
    },
    {
      onSuccess: (data) => {},
      onError: handleError,
    }
  );
};

export const usePutBookQuery = () => {
  const { http, handleError } = useHttp();
  // const { currentApplicationId, setCurrentApplicationId } = useApplicationState();
  return useQuery(
    QueryKey.bookItem,
    async () => {
      const res = await instance.put<null, Books>(
        "http://629dbe953dda090f3c099c36.mockapi.io/api/v0/books"
      );
      return res.data;
    },
    {
      onSuccess: (data) => {
        console.log("result data", data);
      },
      onError: handleError,
    }
  );
};

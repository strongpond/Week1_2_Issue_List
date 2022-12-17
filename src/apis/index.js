import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_GIT_ACCESS_TOKEN}`,
  },
});

export const useFetch = (page) => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendQuery = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await instance.get(
        `/issues?sort=comments&state=open&direction=desc&per_page=10&page=${page}`
      );
      const response = data.data;
      if (!response) {
        throw new Error(`서버에 오류가 있습니다.`);
      }
      setList((prev) => [...new Set([...prev, ...response])]);
      setHasMore(response.length > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { list, hasMore, isLoading };
};

import { useState, useCallback, useRef, useEffect } from 'react';
import axios from 'axios';

const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(async (url, method = 'GET', data = null) => {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);

    try {
      const response = await axios({
        method,
        url,
        data,
        signal: httpAbortCtrl.signal
      });
      setIsLoading(false);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                           err.message || 
                           'An unexpected error occurred';
      setError(errorMessage);
      setShow(true);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
    setShow(false);
  }, []);

  useEffect(() => {
    const active = activeHttpRequests.current;
    return () => {
      active.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, show, clearError };
};

export default useHttpClient;

import { AsyncThunk } from "@reduxjs/toolkit";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

// Local Imports
import { AppDispatch } from "@/store";

const useThunk = <Arg, Result>(thunk: AsyncThunk<Result, Arg, {}>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const dispatch: AppDispatch = useDispatch();

  const runThunk = useCallback(
    (arg: Arg) => {
      setIsLoading(true);
      setError(null);

      dispatch(thunk(arg))
        .unwrap()
        .catch((err: Error) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error] as const;
};

export default useThunk;

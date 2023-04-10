import React from 'react';

import Spinner from '../components/Spinner';
import Error from '../components/Error';
import { ErrorInterface } from '../hooks/useFetching';

const loadingWrapper = <Args extends Array<unknown>, T extends JSX.Element | null = JSX.Element>(
  cb: (...args: Args) => T | null,
  isLoading: boolean,
  error: ErrorInterface | null,
  ...args: Args
) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorText={error} />;
  return cb(...args);
};
export default loadingWrapper;

// A custom hook that builds on useLocation to parse

import { useLocation } from 'react-router';

// the query string for you.
function useURLQuery() {
  return new URLSearchParams(useLocation().search);
}

export default useURLQuery;

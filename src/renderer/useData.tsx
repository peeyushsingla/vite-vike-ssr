import { usePageContext } from './usePageContext';

function useData<Data>() {
  const { data } = usePageContext();
  return data as Data;
}

export default useData;

import { useContext } from 'react';
import { viewportContext } from '../context/viewportContext';

const useViewport = () => {
  const { width } = useContext(viewportContext);
  return { width };
};

export default useViewport;

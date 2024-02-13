import { useState } from 'react';
import { API } from '../api/api';

function useAPI() {
  const [loading, setLoading] = useState(false);

  const call = (caller = async () => {}) => {
    if (loading) return;
    setLoading(true);
    return caller(API).then(() => setLoading());
  };

  return {
    loading,
    call,
  };
}

export default useAPI;

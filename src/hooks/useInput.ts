import { useCallback, useState } from 'react';

const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange, setValue] as const;
};

export default useInput;

import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
  const [debounce, setDebounce] = useState(value);
  useEffect(() => {
    //chưa kịp set đã bị re-render do người dùng nhập tiếp => vẫn return chuỗi rỗng
    const idTimeout = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(idTimeout);
  }, [value, delay]);
  return debounce;
}

export default useDebounce;

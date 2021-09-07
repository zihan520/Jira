import {useEffect, useState} from 'react';
const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const cleanObject = (object: object) => {
  // let result = Object.asign({},object)///json深度拷贝
  const result = {...object};
  console.log('cleanFunc');
  console.log(result);
  Object.keys(result).forEach((key: string) => {
    // @ts-ignore
    let value: any = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
export const useDebounce = <T>(value: T, delay?: number) => {
  console.log('----');
  console.log(value);
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
export const useArray = <T>(arrValue: T[]) => {
  const [value, setValue] = useState(arrValue);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
    clear: () => setValue([]),
  };
};

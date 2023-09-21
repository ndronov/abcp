export const getRandomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const argKey = (x: unknown) => `${x?.toString()}:${typeof x}`;
const generateKey = (args: unknown[]) => args.map(argKey).join('-');

export const memoize = <Arg, Result>(callback: (...args: Arg[]) => Result) => {
  const cache = new Map<string, Result>();

  return (...args: Arg[]) => {
    const key = generateKey(args);

    if (cache.has(key)) {
      return cache.get(key) as Result;
    }

    const value = callback(...args);
    cache.set(key, value);

    return value;
  };
};

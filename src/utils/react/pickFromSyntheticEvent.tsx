// возвращает функцию, которая собирает синтaксис target event
export function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) => <E extends ((t: T[K]) => void)>(fn: E) => (e: React.BaseSyntheticEvent<T>) => fn(e.currentTarget[key]);
}

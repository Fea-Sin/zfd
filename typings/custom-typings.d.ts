declare module '*.svg';

declare module '*.json' {
  const value: any;
  export const version: string;
  export default value;
};

declare module 'raf';
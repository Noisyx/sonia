declare module "react/jsx-runtime" {
  // Minimal typings to satisfy TypeScript when resolving JSX types.
  // Next.js and React provide the actual runtime implementation.
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}



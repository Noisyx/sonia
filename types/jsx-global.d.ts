declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Fallback typings so JSX tags are recognized by TypeScript
      [elemName: string]: any;
    }
  }
}

export {};


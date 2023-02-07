/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GENERATE_ON_START: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

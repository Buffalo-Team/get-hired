/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GENERATE_ENABLED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

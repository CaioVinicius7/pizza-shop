/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ENABLE_API_DELAY: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

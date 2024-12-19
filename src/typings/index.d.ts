// Global types for the entire project
declare namespace NodeJS {
  interface ProcessEnv {
    BOT_TOKEN: string;
    MONGO_URI: string;
    ADMIN_PORT: string;
    OPENAI_API_KEY: string;
    IMAGE_GEN_API_KEY: string;
  }
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
const appEnv = process.env.NODE_ENV;

export interface AppConfig {
  baseURL: string;
}
export const base: AppConfig = {
  baseURL: appEnv === "test" ? "https://mock.api:8080" : "",
};

export { base as config };

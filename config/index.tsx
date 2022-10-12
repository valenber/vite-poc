const appEnv = process.env.NODE_ENV;

export interface AppConfig {
  appEnv: string | undefined;
  baseURL: string;
}

export const base: AppConfig = {
  appEnv,
  baseURL: appEnv === "test" ? "https://mock.api:8080" : "",
};

if (appEnv === "development") {
  // eslint-disable-next-line no-console
  console.log(base);
}

export { base as config };

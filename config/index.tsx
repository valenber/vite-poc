type Environment = undefined | "test" | "development" | "production";

export interface AppConfig {
  appEnv: Environment;
  apiURL: string;
}

const appEnv: AppConfig["appEnv"] = process.env.NODE_ENV as Environment;

const base: AppConfig = {
  appEnv,
  apiURL: "",
};

const production: AppConfig = {
  ...base,
};

const development: AppConfig = {
  ...base,
};

const test: AppConfig = {
  ...base,
  apiURL: "https://app.com:8080/api",
};

const configsMap: Map<Environment, AppConfig> = new Map([
  [undefined, base],
  ["test", test],
  ["development", development],
  ["production", production],
]);

const config: AppConfig = configsMap.get(appEnv) ?? base;

if (appEnv === "development" || !configsMap.has(appEnv)) {
  // eslint-disable-next-line no-console
  console.warn(config);
}

export { config };

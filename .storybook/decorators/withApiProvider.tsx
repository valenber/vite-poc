import { DecoratorFn } from '@storybook/react';
import { userAPI } from "../../src/services/api/userAPI";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

export const withApiProvider: DecoratorFn = (Story) => (
  <ApiProvider api={userAPI}>
    <Story />
  </ApiProvider>
)

import { noop } from "@tests/utils";

import { NewUserForm } from "./NewUserForm";

export default {
  title: "NewUserForm",
  component: NewUserForm,
};

export const Base = () => <NewUserForm submitCallTrigger={noop} />;

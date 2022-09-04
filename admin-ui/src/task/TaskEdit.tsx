import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Estimation" source="estimation" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

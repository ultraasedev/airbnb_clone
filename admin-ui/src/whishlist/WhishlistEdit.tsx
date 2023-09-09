import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ListingTitle } from "../listing/ListingTitle";
import { UserTitle } from "../user/UserTitle";

export const WhishlistEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="listings.id"
          reference="Listing"
          label="Listings"
        >
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
        <ReferenceInput source="User.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

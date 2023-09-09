import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ListingTitle } from "../listing/ListingTitle";
import { UserTitle } from "../user/UserTitle";

export const WhishlistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

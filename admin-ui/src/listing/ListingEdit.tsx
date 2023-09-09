import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TripTitle } from "../trip/TripTitle";
import { WhishlistTitle } from "../whishlist/WhishlistTitle";

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="listingCreatedBy.id"
          reference="User"
          label="ListingCreatedBy"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <div />
        <div />
        <div />
        <div />
        <div />
        <NumberInput label="Price" source="price" />
        <TextInput label="Title" source="title" />
        <ReferenceInput source="trip.id" reference="Trip" label="Trip">
          <SelectInput optionText={TripTitle} />
        </ReferenceInput>
        <TextInput label="TypeLocation" source="typeLocation" />
        <TextInput label="TypePlace" source="typePlace" />
        <ReferenceInput
          source="whishlist.id"
          reference="Whishlist"
          label="Whishlists"
        >
          <SelectInput optionText={WhishlistTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

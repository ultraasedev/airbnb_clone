import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { TRIP_TITLE_FIELD } from "../trip/TripTitle";
import { WHISHLIST_TITLE_FIELD } from "../whishlist/WhishlistTitle";
import { LISTING_TITLE_FIELD } from "../listing/ListingTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Listing"
          target="listingCreatedById"
          label="Listings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="ListingCreatedBy"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="LocationData" source="locationData" />
            <TextField label="MapData" source="mapData" />
            <TextField label="Photos" source="photos" />
            <TextField label="PlaceAmenities" source="placeAmenities" />
            <TextField label="PlaceSpace" source="placeSpace" />
            <TextField label="Price" source="price" />
            <TextField label="Title" source="title" />
            <ReferenceField label="Trip" source="trip.id" reference="Trip">
              <TextField source={TRIP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TypeLocation" source="typeLocation" />
            <TextField label="TypePlace" source="typePlace" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Whishlists"
              source="whishlist.id"
              reference="Whishlist"
            >
              <TextField source={WHISHLIST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Trip" target="userId" label="Trips">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Tripeinfo" source="tripeinfo" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Whishlist"
          target="UserId"
          label="Whishlists"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Listings"
              source="listing.id"
              reference="Listing"
            >
              <TextField source={LISTING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

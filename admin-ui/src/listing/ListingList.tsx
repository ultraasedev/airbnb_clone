import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TRIP_TITLE_FIELD } from "../trip/TripTitle";
import { WHISHLIST_TITLE_FIELD } from "../whishlist/WhishlistTitle";

export const ListingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Listings"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

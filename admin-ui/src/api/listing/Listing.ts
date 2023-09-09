import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Whishlist } from "../whishlist/Whishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: User;
  locationData: JsonValue;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmenities: JsonValue;
  placeSpace: JsonValue;
  price: number;
  title: string;
  trip?: Trip | null;
  typeLocation: string;
  typePlace: string;
  updatedAt: Date;
  whishlist?: Whishlist | null;
};

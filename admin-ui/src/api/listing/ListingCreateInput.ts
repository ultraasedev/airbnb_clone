import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";
import { WhishlistWhereUniqueInput } from "../whishlist/WhishlistWhereUniqueInput";

export type ListingCreateInput = {
  description: string;
  listingCreatedBy: UserWhereUniqueInput;
  locationData: InputJsonValue;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeAmenities: InputJsonValue;
  placeSpace: InputJsonValue;
  price: number;
  title: string;
  trip?: TripWhereUniqueInput | null;
  typeLocation: string;
  typePlace: string;
  whishlist?: WhishlistWhereUniqueInput | null;
};

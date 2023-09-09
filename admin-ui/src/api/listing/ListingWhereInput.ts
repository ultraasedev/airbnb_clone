import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";
import { WhishlistWhereUniqueInput } from "../whishlist/WhishlistWhereUniqueInput";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: JsonFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeAmenities?: JsonFilter;
  placeSpace?: JsonFilter;
  price?: FloatFilter;
  title?: StringFilter;
  trip?: TripWhereUniqueInput;
  typeLocation?: StringFilter;
  typePlace?: StringFilter;
  whishlist?: WhishlistWhereUniqueInput;
};

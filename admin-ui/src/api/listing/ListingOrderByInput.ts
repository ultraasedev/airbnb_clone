import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  listingCreatedById?: SortOrder;
  locationData?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeAmenities?: SortOrder;
  placeSpace?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  tripId?: SortOrder;
  typeLocation?: SortOrder;
  typePlace?: SortOrder;
  updatedAt?: SortOrder;
  whishlistId?: SortOrder;
};

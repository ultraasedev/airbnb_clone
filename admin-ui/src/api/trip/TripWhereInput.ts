import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripWhereInput = {
  id?: StringFilter;
  listings?: ListingListRelationFilter;
  tripeinfo?: JsonFilter;
  user?: UserWhereUniqueInput;
};

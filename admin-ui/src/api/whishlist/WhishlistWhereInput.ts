import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { User } from "../user/User";

export type WhishlistWhereInput = {
  id?: StringFilter;
  listings?: ListingWhereUniqueInput;
  User?: UserWhereUniqueInput;
};

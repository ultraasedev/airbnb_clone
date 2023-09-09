import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { User } from "../user/User";

export type WhishlistCreateInput = {
  listings: ListingWhereUniqueInput | null;
  User: UserWhereUniqueInput;
};

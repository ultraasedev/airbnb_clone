import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { User } from "../user/User";

export type WhishlistUpdateInput = {
  listings?: ListingWhereUniqueInput | null;
  User?: UserWhereUniqueInput;
};

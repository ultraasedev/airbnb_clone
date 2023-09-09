import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Whishlist = {
  createdAt: Date;
  id: string;
  listings?: Listing | null;
  updatedAt: Date;
  User?: User;
};

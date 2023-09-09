import { ListingCreateNestedManyWithoutTripsInput } from "./ListingCreateNestedManyWithoutTripsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  listings?: ListingCreateNestedManyWithoutTripsInput;
  tripeinfo?: InputJsonValue;
  user: UserWhereUniqueInput;
};

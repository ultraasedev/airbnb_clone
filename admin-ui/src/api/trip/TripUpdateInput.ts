import { ListingUpdateManyWithoutTripsInput } from "./ListingUpdateManyWithoutTripsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  listings?: ListingUpdateManyWithoutTripsInput;
  tripeinfo?: InputJsonValue;
  user?: UserWhereUniqueInput;
};

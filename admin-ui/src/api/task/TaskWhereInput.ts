import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskWhereInput = {
  estimation?: DateTimeNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};

import { forwardRef } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.module.css";
import "src/ui/styles/components/edit-profile/date-input.scss";

const CustomInput = forwardRef(({ value, ...restProps }, ref) => (
  <input
    {...restProps}
    className="date-input caption1"
    value={value}
    ref={ref}
  />
));

export function DateInput({ value, field }) {
  return (
    <DatePicker
      selected={value}
      onChange={(e) => {
        field.onChange(e);
      }}
      customInput={<CustomInput />}
      minDate={new Date("01-01-1950")}
      maxDate={new Date()}
      showYearDropdown
      dateFormat="dd/MM/yyyy"
      placeholderText="Select your birth date"
    />
  );
}

import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarValue() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginRight: "20px",
        }}
        components={["DateCalendar", "DateCalendar"]}
      >
        <DateCalendar
          sx={{
            // Background color
            backgroundColor: "white",
            borderRadius: 2,
            // Text color
            color: "darkblue",
            // Header color (optional)
            "& .MuiPickersToolbar-toolbar": {
              backgroundColor: "teal",
            },
          }}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

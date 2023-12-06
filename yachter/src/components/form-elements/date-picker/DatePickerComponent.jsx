import { useState } from "react";
import DatePicker from "react-datepicker";
import { subDays, addDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


export default function DatePickerComponent() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
                setDateRange(update);
            }}
            isClearable={false}
            excludeDateIntervals={[
                {
                    start: subDays(new Date(), 5),
                    end: addDays(new Date(), 5)
                },
            ]}
            withPortal
        />
    );
}


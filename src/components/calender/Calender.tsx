// components/Calendar.tsx

import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, setYear } from 'date-fns';
import Overlaycalender from './OverlayCalender';
import Icons from '@/icons/Index';

/**
 * Calendar component managing date selection and display.
 * 
 * @component
 * @returns {JSX.Element} Rendered JSX elements for the calendar component.
 */
const Calendar: React.FC = () => {
    const currentYear = new Date().getFullYear();  // state to manage current year
    const [currentMonth, setCurrentMonth] = useState(new Date()); // state to manage current month
    const [selectedDate, setSelectedDate] = useState(new Date());  //state to manage selected date
    const [showCalendar, setShowCalendar] = useState(false);   // state to manage show calendar
    const [selectedYear, setSelectedYear] = useState(currentYear);  // state to manage selected year

    /**
     * Render the header of the calendar with month/year selection and navigation buttons.
     * 
     * @returns {JSX.Element} Header JSX for the calendar component.
     */
    const renderHeader = () => {
        const dateFormat = 'MMMM yyyy';

        /**
         * Handle year change in the select dropdown.
         * 
         * @param {React.ChangeEvent<HTMLSelectElement>} e - The event object for the select dropdown change.
         */
        const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            const newYear = parseInt(e.target.value, 10);
            setSelectedYear(newYear);
            setCurrentMonth(setYear(currentMonth, newYear));
        };

        const startYear = 1900;
        const endYear = currentYear;

        // Generate options for year select dropdown
        const yearOptions = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i).map(year => (
            <option key={year} value={year}>
                {year}
            </option>
        ));

        return (
            <div className="flex justify-between items-center mb-4">
                <span className='text-blue_gray_600 text-[25px]'>{format(currentMonth, dateFormat)}  </span>
                <select
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="border border-blue_gray_100 rounded px-2 py-1 outline-none text_14_2 text-blue_gray_600"
                >
                    {yearOptions}
                </select>

                <div className='flex gap-2 items-center '>
                    <button className='hover:bg-blue_gray_50 rounded-full' onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
                        <Icons type='Leftarrow' />
                    </button>
                    <button className='hover:bg-blue_gray_50 rounded-full' onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
                        <Icons type='Rightarrow' />
                    </button>
                </div>
            </div>
        );
    };

    /**
     * Render the headers of the days of the week.
     * 
     * @returns {JSX.Element} Rendered JSX for the days of the week headers.
     */
    const renderDays = () => {
        const days = [];
        const dateFormat = 'EEEE';
        const startDate = startOfWeek(currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="flex justify-center items-center" key={i}>
                    {format(addDays(startDate, i), dateFormat).substring(0, 1)}
                </div>
            );
        }
        return <div className="grid grid-cols-7 mb-4 text-blue_gray_200">{days}</div>;
    };

    /**
     * Render the calendar cells for the current month.
     * 
     * @returns {JSX.Element} Rendered JSX for the calendar cells.
     */
    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = '';

        // Loop through each day to render calendar cells
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, 'd');
                const cloneDay = day;
                days.push(
                    <div
                        className={`flex justify-center items-center py-2 w-[50px] h-[50px] hover:bg-blue_gray_50 rounded-full cursor-pointer text-blue_gray_600 text_14_2 ${!isSameMonth(day, monthStart)
                            ? 'text-gray-400'
                            : isSameDay(day, selectedDate)
                                ? 'bg-light_primary text-white rounded-full hover:bg-light_primary'
                                : ''
                            }`}
                        key={day.toString()}
                        onClick={() => {
                            setSelectedDate(cloneDay);
                            setShowCalendar(false);
                        }}
                    >
                        {formattedDate}
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="grid grid-cols-7 gap-y-[2px] " key={day.toString()}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div>{rows}</div>;
    };

    /**
     * Toggle the visibility of the calendar.
     */
    const handleCalendarToggle = () => {
        setShowCalendar(!showCalendar);
    };

    /**
     * Close the calendar overlay.
     */
    const handleOverlayClose = () => {
        setShowCalendar(false);
    };

    // Render calendar component
    return (
        <>
            <Overlaycalender isOpen={showCalendar} onClose={handleOverlayClose} />
            <div className="relative w-full">
                <label className="flex flex-col gap-y-[8px]">
                    <p className="text-blue_gray_600 text_16_1">Select Date</p>
                    <div onClick={handleCalendarToggle} className="relative w-full flex justify-between  py-[14px] px-4 items-center border-[1px] border-blue_gray_100 rounded-[6px]">
                        <input
                            type="text"
                            name="date"
                            id="date"
                            placeholder="Select Date"
                            value={format(selectedDate, 'MMMM d, yyyy')}
                            readOnly
                            className="text_16_1 text-blue_gray_300  outline-none rounded-md w-full"
                        />
                        <Icons type='calendericon' />
                    </div>
                </label>
                {showCalendar && (
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md z-[101] max-w-[343px] md:max-w-[450px] w-full">
                        <div className="bg-white p-5 rounded-[10px]">
                            {renderHeader()}
                            {renderDays()}
                            {renderCells()}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Calendar; // Export the Calendar component

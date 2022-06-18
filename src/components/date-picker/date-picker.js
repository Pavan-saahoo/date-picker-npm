import React, { useRef } from "react";

const customFormat = (date) => {
    return date ? dateFormat(date).split("/").join("-") : ""
}

const dateFormat = (date, seprator = "/") => {
    const myDate = new Date(date)
    const myDateString = ('0' + (myDate.getMonth() + 1)).slice(-2) + seprator
        + ('0' + myDate.getDate()).slice(-2) + seprator
        + myDate.getFullYear();
    return myDateString
}

const datePickerFormat = (date) => {
    const newDate = new Date(date).toISOString().substr(0, 10);
    return newDate
}

const DatePicker = ({ handleChange, value, placeholder, min, max }) => {
    const inputRef = useRef(null)
    const showPicker = () => {
        //@ts-ignore
        inputRef.current.showPicker()
    }

    return (
        <>
            <div>
                <input type="date" ref={inputRef} value={value} className="form-control " min={min && datePickerFormat(min)} max={max && datePickerFormat(max)} onChange={(data) => handleChange(data.currentTarget.value)} />
                <div className="form-control pointer" style={{ color: "#7A7E85" }} onClick={showPicker}>
                    {!!value ? (
                        <>
                            {customFormat(value.toString())}
                        </>
                    ) : (
                        placeholder || 'Date Input'
                    )}
                </div>
                <span className={`icon_calendar pointer date-range-icon`} onClick={showPicker}></span>

            </div>
        </>
    )
}

export default DatePicker
import { useState } from "react";

import * as yachtFormsUtils from "../utils/yachtFormsUtils";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        let isValid = yachtFormsUtils.validateForm(e.target);

        if (isValid) {
            submitHandler(values);
        }
    };

    return {
        values,
        onChange,
        onSubmit
    }
}
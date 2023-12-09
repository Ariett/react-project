import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import useForm from '../../../hooks/useForm';

import AuthContext from "../../../contexts/authContext";

import Hero from "../../hero/Hero"
import Path from '../../../paths';

const RegisterOwnerFormKeys = {
    CompanyName: 'companyName',
    CompanyPassword: 'password',
    CompanyPhone: 'companyPhone',
    CompanyEmail: 'email',
    CompanyCountry: 'companyCountry',
    CompanyCity: 'companyCity',
    CompanyStreet: 'companyStreet',
    CompanyZipCode: 'companyZipCode',
    CompanyLogo: 'companyLogo',
    CompanyDescription: 'companyDescription',
}

export default function OwnerRegister() {
    const { registerOwnerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerOwnerSubmitHandler, {
        [RegisterOwnerFormKeys.CompanyName]: '',
        [RegisterOwnerFormKeys.CompanyPassword]: '',
        [RegisterOwnerFormKeys.CompanyPhone]: '',
        [RegisterOwnerFormKeys.CompanyEmail]: '',
        [RegisterOwnerFormKeys.CompanyCountry]: '',
        [RegisterOwnerFormKeys.CompanyCity]: '',
        [RegisterOwnerFormKeys.CompanyStreet]: '',
        [RegisterOwnerFormKeys.CompanyZipCode]: '',
        [RegisterOwnerFormKeys.CompanyLogo]: '',
        [RegisterOwnerFormKeys.CompanyDescription]: '',
    });

    const heroContent = {
        title: "Join the flee",
        description: ""
    }

    return (
        <>
            <Hero {...heroContent} />

            <section>
                <form
                    id="create"
                    onSubmit={onSubmit}
                    noValidate
                    data-requiredmessage="This field is required!"
                >
                    <div className="container">
                        {/* Email && password */}
                        <fieldset className="formRow">
                            <div className="inputData">
                                <input
                                    type="text"
                                    id={RegisterOwnerFormKeys.CompanyEmail}
                                    name={RegisterOwnerFormKeys.CompanyEmail}
                                    placeholder="Company Email *"
                                    onChange={onChange}
                                    value={values[RegisterOwnerFormKeys.CompanyEmail]}
                                    required
                                />
                                <div className="underline"></div>
                            </div>
                            <div className="inputData">
                                <input
                                    type="password"
                                    id={RegisterOwnerFormKeys.CompanyPassword}
                                    name={RegisterOwnerFormKeys.CompanyPassword}
                                    placeholder="Password *"
                                    onChange={onChange}
                                    value={values[RegisterOwnerFormKeys.CompanyPassword]}
                                    required
                                />
                                <div className="underline"></div>
                            </div>
                        </fieldset>

                        {/* Name and phone */}
                        <fieldset className="formRow">
                            <div className="inputData">
                                <input
                                    type="text"
                                    id={RegisterOwnerFormKeys.CompanyName}
                                    name={RegisterOwnerFormKeys.CompanyName}
                                    placeholder="Company Name *"
                                    onChange={onChange}
                                    value={values[RegisterOwnerFormKeys.CompanyName]}
                                    required
                                />
                                <div className="underline"></div>
                            </div>
                            <div className="inputData">
                                <input
                                    type="number"
                                    id={RegisterOwnerFormKeys.CompanyPhone}
                                    name={RegisterOwnerFormKeys.CompanyPhone}
                                    placeholder="Company Phone *"
                                    onChange={onChange}
                                    value={values[RegisterOwnerFormKeys.CompanyPhone]}
                                    required
                                />
                                <div className="underline"></div>
                            </div>
                        </fieldset>

                        {/* Address info - country, city, street, zip */}
                        <fieldset>
                            <div className="formRow">
                                <div className="inputData">
                                    <input
                                        type="text"
                                        id={RegisterOwnerFormKeys.CompanyCountry}
                                        name={RegisterOwnerFormKeys.CompanyCountry}
                                        placeholder="Country"
                                        onChange={onChange}
                                        value={values[RegisterOwnerFormKeys.CompanyCountry]}
                                    />
                                    <div className="underline"></div>
                                </div>
                                <div className="inputData">
                                    <input
                                        type="text"
                                        id={RegisterOwnerFormKeys.CompanyCity}
                                        name={RegisterOwnerFormKeys.CompanyCity}
                                        placeholder="City"
                                        onChange={onChange}
                                        value={values[RegisterOwnerFormKeys.CompanyCity]}
                                    />
                                    <div className="underline"></div>
                                </div>
                            </div>

                            <div className="formRow">
                                <div className="inputData">
                                    <input
                                        type="text"
                                        id={RegisterOwnerFormKeys.CompanyStreet}
                                        name={RegisterOwnerFormKeys.CompanyStreet}
                                        placeholder="Street"
                                        onChange={onChange}
                                        value={values[RegisterOwnerFormKeys.CompanyStreet]}
                                    />
                                    <div className="underline"></div>
                                </div>
                                <div className="inputData">
                                    <input
                                        type="number"
                                        id={RegisterOwnerFormKeys.CompanyZipCode}
                                        name={RegisterOwnerFormKeys.CompanyZipCode}
                                        placeholder="ZIP Code"
                                        onChange={onChange}
                                        value={values[RegisterOwnerFormKeys.CompanyZipCode]}
                                    />
                                    <div className="underline"></div>
                                </div>
                            </div>
                        </fieldset>

                        {/* Logo */}
                        <fieldset className="formRow">
                            <div className="inputData">
                                <input type="text"
                                    id={RegisterOwnerFormKeys.CompanyLogo}
                                    name={RegisterOwnerFormKeys.CompanyLogo}
                                    placeholder="Company Logo"
                                    onChange={onChange}
                                    value={values[RegisterOwnerFormKeys.CompanyLogo]}
                                />
                                <div className="underline"></div>
                            </div>
                        </fieldset>

                        {/* Description */}
                        <fieldset>
                            <div className="formRow">
                                <div className="inputData textarea">
                                    <textarea
                                        id={RegisterOwnerFormKeys.CompanyDescription}
                                        name={RegisterOwnerFormKeys.CompanyDescription}
                                        placeholder="Company description"
                                        onChange={onChange}
                                        value={values[RegisterOwnerFormKeys.CompanyDescription]}
                                    >
                                    </textarea>
                                    <div className="underline"></div>
                                </div>
                            </div>
                        </fieldset>

                        {/* Submit */}
                        <fieldset className="formRow">
                            <Button variant="primary" type="submit">Create Account</Button>
                        </fieldset>

                        <fieldset className="formRow">
                            <p style={{ margin: '0 20px' }}>Already have an account? <Link to={Path.Login}>Login here</Link></p>
                        </fieldset>
                    </div >
                </form >
            </section >
        </>

    )
}
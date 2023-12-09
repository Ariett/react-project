import { useContext } from 'react';

import Button from 'react-bootstrap/Button';

import useForm from '../../../hooks/useForm';

import AuthContext from "../../../contexts/authContext";

import Hero from "../../hero/Hero"

const RegisterMemberFormKeys = {
    MemberName: 'name',
    MemberPassword: 'password',
    MemberEmail: 'email',
    MemberProfileImg: 'memberProfileImg',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterMemberFormKeys.MemberName]: '',
        [RegisterMemberFormKeys.MemberPassword]: '',
        [RegisterMemberFormKeys.MemberEmail]: '',
        [RegisterMemberFormKeys.MemberProfileImg]: '',
    });

    const heroContent = {
        title: "Register",
        description: "Here is the registration"
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
                        {/* Name && password */}
                        <fieldset className="formRow">
                            <div className="inputData">
                                <input
                                    type="text"
                                    id={RegisterMemberFormKeys.MemberName}
                                    name={RegisterMemberFormKeys.MemberName}
                                    placeholder="Name *"
                                    onChange={onChange}
                                    value={values[RegisterMemberFormKeys.MemberName]}
                                    required
                                />
                                <div className="underline"></div>
                            </div>
                            <div className="inputData">
                                <input
                                    type="password"
                                    id={RegisterMemberFormKeys.MemberPassword}
                                    name={RegisterMemberFormKeys.MemberPassword}
                                    placeholder="Password *"
                                    onChange={onChange}
                                    value={values[RegisterMemberFormKeys.MemberPassword]}
                                    required
                                />
                                <div className="underline"></div>
                            </div>
                        </fieldset>

                        {/* Email and profile image */}
                        <fieldset className="formRow">
                            <div className="inputData">
                                <input
                                    type="text"
                                    id={RegisterMemberFormKeys.MemberEmail}
                                    name={RegisterMemberFormKeys.MemberEmail}
                                    placeholder="Email *"
                                    onChange={onChange}
                                    value={values[RegisterMemberFormKeys.MemberEmail]}
                                    required
                                />
                                <div className="underline"></div>
                            </div>
                            <div className="inputData">
                                <input type="text"
                                    id={RegisterMemberFormKeys.MemberProfileImg}
                                    name={RegisterMemberFormKeys.MemberProfileImg}
                                    placeholder="Profile Image"
                                    onChange={onChange}
                                    value={values[RegisterMemberFormKeys.MemberProfileImg]}
                                />
                                <div className="underline"></div>
                            </div>
                        </fieldset>

                        {/* Submit */}
                        <fieldset className="formRow">
                            <Button variant="primary" type="submit">Create Account</Button>
                        </fieldset>
                    </div >
                </form >
            </section >
        </>

    )
}
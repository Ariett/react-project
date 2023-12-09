import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import useForm from '../../hooks/useForm';

import AuthContext from "../../contexts/authContext";

import Hero from "../hero/Hero"
import Path from '../../paths';

const LoginFormKeys = {
    Password: 'password',
    Email: 'email',
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    const heroContent = {
        title: "Sign in",
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
                        {/* Name & password*/}
                        <fieldset className="formRow">
                            <div className="inputData">
                                <input
                                    type="text"
                                    id={LoginFormKeys.Email}
                                    name={LoginFormKeys.Email}
                                    placeholder="Email *"
                                    onChange={onChange}
                                    required
                                    value={values[LoginFormKeys.Email]}
                                />
                                <div className="underline"></div>
                            </div>
                            <div className="inputData">
                                <input
                                    type="password"
                                    id={LoginFormKeys.Password}
                                    name={LoginFormKeys.Password}
                                    placeholder="Password *"
                                    onChange={onChange}
                                    required
                                    value={values[LoginFormKeys.Password]}
                                />
                                <div className="underline"></div>
                            </div>
                        </fieldset>

                        {/* Submit */}
                        <fieldset className="formRow">
                            <Button variant="primary" type="submit" style={{ margin: '0 auto' }}>Login</Button>
                        </fieldset>


                        <fieldset className="formRow">
                            <p style={{ margin: '0 20px' }}>Don't have an account? <Link to={Path.MemberRegister}>Register now</Link></p>
                            <p style={{ margin: '0 20px' }}>Or you have a flee? <Link to={Path.OwnerRegister}>Join the team</Link></p>
                        </fieldset>
                    </div >
                </form >
            </section >
        </>

    )
}
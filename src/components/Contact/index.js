import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm({ title }) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div>
            <h1 data-testid="contactForm">{title}</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="flex-row flex-vertical my-2">
                    <div>
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div className="my-1">
                        <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            onBlur={handleChange}
                        />
                    </div>
                </div>
                <div className="flex-row flex-vertical my-2">
                    <div>
                        <label htmlFor="email">Email address:</label>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            defaultValue={email}
                            onBlur={handleChange}
                        />
                    </div>
                </div>
                <div className="flex-row flex-vertical my-2">
                    <div>
                        <label htmlFor="message">Message:</label>
                    </div>
                    <div>
                        <textarea
                            name="message"
                            rows="5"
                            defaultValue={message}
                            onBlur={handleChange}
                        />
                    </div>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="submitButton" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;

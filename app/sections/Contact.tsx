"use client"
import { FormEvent, useState } from "react";
import { titleVarient } from "../components/Animations";
import { motion } from "motion/react";

export const Contact = () => {

    const [result, setResult] = useState({
        error: false,
        message: "",
    });

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setResult({
            error: false,
            message: "Sending..."
        });
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const apiKey = process.env.NEXT_PUBLIC_FORM_API_KEY;

        if (!apiKey) {
            setResult({
                error: true,
                message: "Failed to send the message!"
            });
            return;
        }
        formData.append("access_key", apiKey);
        formData.append("subject", "New message from Portfolio Website");
        formData.append("from_name", "Contact Form - dilaka.dev");
        formData.append("Date", new Date().toDateString());
        formData.append("Time", new Date().toTimeString());

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult({
                error: false,
                message: "Message sent successfully"
            });
            form.reset();
        } else {
            setResult({
                error: true,
                message: data.message
            });
        }
    }

    return (
        <div className="px-6 py-16" id="contact">
            <motion.p
                variants={titleVarient}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.50 }}
                className="text-7xl font-extrabold outlined-text mb-16 md:text-9xl uppercase"
            >
                Say Hi,
            </motion.p>
            <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto text-lg">
                <InputField label="Name" id="Name" placeholder="Enter your name" type="text" required />
                <InputField label="Email" id="Email" placeholder="Enter your email address" type="email"
                    required />
                <InputField label="Phone" id="Phone" placeholder="Enter your phone number (Optional)"
                    type="tel" />
                <TextArea id="Message" label="Message" placeholder="Enter your message" type="text" required />
                <button type="submit"
                    className="mx-auto block w-full max-w-sm md:w-fit bg-fiery-red text-peach-puff text-lg px-4 py-2 rounded-full cursor-pointer hover:opacity-80 transition-all ease-in-out duration-300">
                    Send message
                </button>
                <p className={`pt-4 text-center ${result.error ? 'text-red-400' : 'text-fiery-red'}`}>{result.message}</p>
            </form>
        </div>
    )
}


interface InputFieldProps {
    label: string,
    id: string,
    type?: string,
    placeholder: string,
    required?: boolean,
}

function InputField(props: InputFieldProps) {
    const { label, id, type, placeholder, required } = props;
    return (
        <div className="mb-4">
            <label htmlFor={id}>{label}</label>
            <input
                name={id}
                autoComplete="off"
                type={type}
                id={id}
                required={required}
                placeholder={placeholder}
                className="appearance-none bg-transparent outline-none py-2 w-full border-b border-fiery-red/50" />
        </div>
    )
}

function TextArea(props: InputFieldProps) {
    const { label, id, placeholder, required } = props;

    return (
        <div className="mb-4">
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                required={required}
                placeholder={placeholder}
                rows={5}
                name={id}
                className="appearance-none bg-transparent outline-none py-2 w-full resize-none border-b border-fiery-red/50" />
        </div>
    )
}
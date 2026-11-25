import React, { useState } from 'react'
import FloatingInput from './FloatingInput'
import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { info } from '../User';

const form = {
    name: '',
    email: '',
    phone: '',
    message: ''
}

const Contact = () => {
    const [formData, setFormData] = useState(form);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (id: string, value: string) => {
        setFormData(current => ({ ...current, [id]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const subject = `Portfolio contact from ${formData.name}`;
        const body = [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Phone: ${formData.phone || 'Not provided'}`,
            '',
            formData.message
        ].join('\n');

        setSubmitted(true);
        window.location.href = `mailto:${info.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 font-mono my-5 scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24" id="contact">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5 font-bold text-whiteColor text-center">05.&nbsp;<span className="text-primaryColor mb-5">Contact</span></h1>
            <form
                onSubmit={handleSubmit}
                data-aos="flip-left"
                data-aos-duration={800}
                className="hover:!shadow-[0_0_10px_0_#64FFDA] font-semibold flex flex-col gap-3 rounded-3xl m-auto border border-primaryColor w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] p-6 sm:p-8"
            >
                <div className='text-2xl sm:text-3xl text-whiteColor'>Let's Connect</div>
                <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} type="text" autoComplete="name" required />
                <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} type="email" autoComplete="email" required />
                <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} type="tel" autoComplete="tel" />
                <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} required />
                {submitted && (
                    <p role="status" className="text-sm sm:text-base text-primaryColor text-center">
                        Your email app should open with the message ready to send.
                    </p>
                )}
                <Button type="submit" className='!text-bgColor !font-bold !text-xl sm:!text-2xl' rightSection={<IconArrowRight size={24} />} variant='filled' color="#64FFDA" size="lg" radius="lg" fullWidth>Send</Button>
            </form>
        </div>
    )
}

export default Contact

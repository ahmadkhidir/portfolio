"use server"

import { backendFetch } from "./fetch"


export const createEmailAction = async (prevState: any, formData: FormData) => {
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone_no: formData.get('phone_no'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    }
    const response = await backendFetch('/contacts/emails/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    console.log("Response", response)

    return {
        message: "Your message has been received. I will get back to you shortly.",
    }
}
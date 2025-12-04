'use client'


import { BigTitle } from '@/components/title'
import Link from 'next/link'
import React, { InputHTMLAttributes, useActionState } from 'react'
import { MdEmail, MdLocationPin, MdPhone } from 'react-icons/md'
import { createEmailAction } from '@/lib/actions'

function page() {
    const [state, formAction, pending] = useActionState(createEmailAction, { message: '' });

    return (
        <main>
            <BigTitle>Contact Me</BigTitle>
            <section className='px-4 flex sm:flex-row flex-col sm:gap-12 gap-4'>
                <form action={formAction} className='flex-1 dark:bg-[#15131a] bg-zinc-200 rounded-2xl px-10 py-12 flex sm:flex-row flex-col sm:gap-14 gap-4'>
                    <div className='flex-1 flex flex-col gap-4'>
                        <InputField name='name' label='Your Name' />
                        <InputField name='email' label='Your Email' />
                        <InputField name='phone_no' label='Phone Number' />
                        <InputField name='subject' label='Subject' />
                    </div>
                    <div className='flex-1 flex flex-col gap-4'>
                        <TextareaField name='message' label='Message' />
                        <button
                            type='submit'
                            className='text-sm px-10 py-5 bg-blue-500 dark:bg-purple-500 w-fit rounded-full'
                            disabled={pending}
                        >
                            {pending ? 'Submitting...' : 'Submit Now'}
                        </button>
                        {state.message && <p className="text-green-500">{state.message}</p>}
                    </div>
                </form>
                <aside className='dark:bg-[#15131a] bg-zinc-200 rounded-2xl p-10 flex sm:flex-col flex-row justify-between gap-4 sm:w-64 w-full'>
                    <div className='flex flex-col gap-3 items-center'>
                        <Link href="" title='Ibadan, Nigeria' className='p-4 dark:bg-[#312c3e] bg-zinc-400 rounded-full w-fit'>
                            <MdLocationPin size={24} />
                        </Link>
                        <span className='text-lg text-center sm:block hidden'>Ibadan, Nigeria</span>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <Link href="tel:2349012716734" title='+234 901 271 6734' className='p-4 dark:bg-[#312c3e] bg-zinc-400 rounded-full w-fit'>
                            <MdPhone size={24} />
                        </Link>
                        <span className='text-lg text-center sm:block hidden'>+234 901 271 6734</span>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <Link href="mailto:khidirahmad05@gmail.com" title='khidirahmad05@gmail.com' className='p-4 dark:bg-[#312c3e] bg-zinc-400 rounded-full w-fit'>
                            <MdEmail size={24} />
                        </Link>
                        <span className='text-lg text-center sm:block hidden'>khidirahmad05@gmail.com</span>
                    </div>
                </aside>
            </section>
        </main>
    )
}

export default page


interface InputFieldProps {
    label: string
}

interface TextInputFieldProps extends InputFieldProps, InputHTMLAttributes<HTMLInputElement> { }

interface TextareaFieldProps extends InputFieldProps, InputHTMLAttributes<HTMLTextAreaElement> { }

const InputField: React.FC<TextInputFieldProps> = (props) => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor="" className='uppercase'>{props.label}</label>
            <input type="text"
                placeholder={props.label}
                {...props}
                className={'px-5 py-4 dark:bg-[#312c3e] bg-zinc-300 rounded-lg placeholder:capitalize placeholder:text-zinc-800 dark:placeholder:text-zinc-300 text-sm ' + props.className}
            />
        </div>
    )
}

const TextareaField: React.FC<TextareaFieldProps> = (props) => {
    return (
        <div className='flex flex-col gap-2 h-full'>
            <label htmlFor="" className='uppercase'>{props.label}</label>
            <textarea
                placeholder={props.label}
                {...props}
                rows={5}
                className={'flex-1 px-4 py-3 dark:bg-[#312c3e] bg-zinc-300 rounded-lg placeholder:capitalize placeholder:text-zinc-800 dark:placeholder:text-zinc-300 text-sm ' + props.className}
            ></textarea>
        </div>
    )
}
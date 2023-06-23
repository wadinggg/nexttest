import styled from "styled-components"
import H2 from "../global/H2"
import SectionContainer from "../global/SectionContainer"
import { color, font, spacing } from "../system"
import { BsSendFill } from "react-icons/bs"
import { MutableRefObject } from "react"
import { useForm, SubmitHandler } from "react-hook-form";
import {
    useNetlifyForm,
    NetlifyFormProvider,
    NetlifyFormComponent,
    Honeypot
  } from 'react-netlify-forms'

interface IProps {
    innerRef?: MutableRefObject<HTMLDivElement | null>
    handleClick?: () => void;
}

type Inputs = {
    name: string,
    email: string,
    message: string,
};

const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${spacing.p900};
    @media (min-width: 768px) {
        max-width: 50%;
        margin: ${spacing.p900} auto 0;
    }

    input, textarea {
        background-color: ${color.chroma.creme100};
        border: 2px solid ${color.chroma.brown100};
        border-radius: 10px;
        padding: ${spacing.p200};
        color: ${color.chroma.brown100};
        margin-top: ${spacing.p600};
        font-size: ${font.size.s400};

        &::placeholder {
            color: ${color.chroma.brown100};
        }

        &:first-child {
            margin-top: 0;
        }
    }

    input {
        height: 3em;
    }

    textarea {
        height: 15em;
        resize: none;
        font-family: inherit;
        margin-bottom: 0;
    }
`

const Submit = styled.button`
    align-self: flex-end;
    background-color: ${color.chroma.brown100};
    border: none;
    border-radius: 9px;
    padding: ${spacing.p300};
    color: ${color.chroma.creme100};
    cursor: pointer;
    font-weight: 500;
    font-size: ${font.size.s400};

    span {
        margin: auto 0;
        margin-right: ${spacing.p200};
    }
`

const Error = styled.span`
    color: red;
`

const Success = styled.span`
    color: green;
`

export default function Inquiry ({ innerRef }: IProps) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    
    const netlify = useNetlifyForm({
        name: 'react-hook-form',
        action: '/thanks',
        honeypotName: 'bot-field',
        // @ts-ignore
        onSuccess: (response, context) => {
            console.log('Successfully sent form data to Netlify Server')
        }
    })
    // const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    const onSubmit: SubmitHandler<Inputs> = (data) => netlify.handleSubmit(null, data)

    return (
        <SectionContainer ref={innerRef}>
            <H2>Got an Inquiry?</H2>
            <NetlifyFormProvider {...netlify}>
                <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                    <Honeypot />
                    {netlify.success && (
                    <Success>
                        Thanks for contacting us!
                    </Success>
                    )}
                    {netlify.error && (
                    <Error>
                        Sorry, we could not reach our servers. Please try again later.
                    </Error>
                    )}
                    <Form>
                        <input type="text" placeholder="name*" {...register("name", {required: true})} />
                        {errors.name && <Error>Please enter you name</Error>}
                        <input type="text" placeholder="email*" {...register("email", {required: true, pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i})}/>
                        {errors.email && <Error>Please enter a valid email address</Error>}
                        <textarea placeholder="message" {...register("message", {required: true})}/><br />
                        {errors.message && <Error>Please enter a message</Error>}
                        <Submit type="submit"><span>Submit</span> <BsSendFill size={20}/></Submit>
                    </Form>
                </NetlifyFormComponent>
            </NetlifyFormProvider>
        </SectionContainer>
    )
}
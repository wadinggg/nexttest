import styled from "styled-components";
import H2 from "../../global/H2";
import SectionContainer from "../../global/SectionContainer";
import { color, spacing } from "../../system";
import { BsArrowLeftShort } from "react-icons/bs";
import marta from "../../images/marta.jpg";
import InfoContainer from "../../global/InfoContainer";
import Link from "next/link";

const P = styled.p`
    margin-bottom: ${spacing.p500};
    line-height: 1.7;

    &:last-child {
        margin-bottom: 0;
    }

    &:first-child {
        margin-top: ${spacing.p500};
    }

    @media (min-width: 768px) {
        &:first-child {
            margin-top: 0;
        }

        margin: 0;
        padding: 0;
    }
`

const Back = styled.div`
    margin-top: ${spacing.p200};
    margin-left: ${spacing.p500};

    a {
        text-decoration: 0;
        color: ${color.greyscale.g900};
        font-weight: bold;
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`

const IMG = styled.img`
    width: 100%;
    border-radius: 15px;
    margin-bottom: ${spacing.p500};
    @media (min-width: 768px) {
        width: 50%;
        margin: ${spacing.p200} auto ${spacing.p700};
    }
`

const ImageContainer = styled.div`
    text-align: center;
`

const TEXT = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    p {
        margin-bottom: 30px;
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export default function MartaSuchanska() {
    return (
        <div>
            <Back><Link href="/"><BsArrowLeftShort size={30}/><span>back</span></Link></Back>
            <SectionContainer>
                <H2>
                    Marta Suchanska
                </H2>
                <ImageContainer>
                    <IMG
                        src={marta.src}
                        alt="logo"
                        width={150}
                    />
                </ImageContainer>
                <TEXT>
                    <div>
                        <P>
                            Meet Marta Suchanska, the esteemed founder and sole practitioner behind
                            MɅSSɅGE. With over a decade of experience in the field of holistic manual
                            therapy, Marta&#39;s journey began with a deep passion for hands-on healing.
                            Prior to dedicating herself to this transformative practice, she enjoyed a
                            successful career as a legal and business translator, but her fascination
                            with therapeutic touch led her to embark on a new path.
                        </P>
                        <P>
                            Marta&#39;s expertise and caring touch have attracted a diverse clientele,
                            ranging from professional athletes in the Premier League to individuals
                            seeking pain relief or improved well-being. She has honed her skills by
                            working with renowned physiotherapy teams, luxury 5-star hotels, and
                            esteemed wellness retreats. Her dedication to each client&#39;s unique needs
                            ensures that whether you&#39;re a top-tier athlete or simply seeking a moment
                            of relaxation, you&#39;ll receive exceptional care at MɅSSɅGE. 
                        </P>
                        <P>
                            Believing in the power of a holistic and multidisciplinary approach, Marta
                            goes beyond surface-level symptoms to address the root causes of her
                            client&#39;s concerns. Her specialisation lies in chronic pain management, and
                            she is committed to helping individuals overcome a range of issues,
                            starting from common discomforts like neck and low back pain.
                        </P> 
                    </div>
                    <div>
                        <P>
                            Continuously expanding her knowledge and skills, Marta is currently
                            pursuing a degree in osteopathy at the renowned British College of
                            Osteopathic Medicine and integrating her expertise in Medical Acupuncture
                            into her practice. Simultaneously, she is working and undertaking her
                            osteopathic training in Harley Street practice.
                        </P>
                        <P>
                            With a genuine interest in healthy lifestyles and women&#39;s health, Marta
                            offers a comprehensive approach to her treatments. As a certified
                            Traditional Chinese Medicine nutritionist, she understands nutrition&#39;s vital
                            role in achieving optimal results in manual therapy. At MɅSSɅGE, Marta&#39;s
                            personalised care and transformative touch create a space where clients
                            can find solace, rejuvenation, and profound healing. Experience Marta&#39;s
                            expertise and unwavering dedication and discover the power of her
                            therapeutic artistry at MɅSSɅGE.
                        </P>  
                    </div>
                </TEXT>
            </SectionContainer> 
        </div>
        
    )
  }
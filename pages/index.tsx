import { useRef, useState } from 'react'
import styled from 'styled-components'
import Marketing from '../sections/Marketing'
import Treatments from '../sections/Treatments'
import Pricing from '../sections/Pricing'
import Reviews from '../sections/Reviews'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Header from '../global/Header'
import Inquiry from '../sections/Inquiry'
import Nav from '../sections/Nav'
import Menu from '../sections/Menu'
import GlobalStyle from '../sections/GlobalStyle'
import Head from 'next/head'

export default function Home() {
  const [stuck, setStuck] = useState(false)
  const [hidden, setHidden] = useState(true)

  const treatmentRef = useRef<null | HTMLDivElement>(null)
  const pricingRef = useRef<null | HTMLDivElement>(null)
  const aboutRef = useRef<null | HTMLDivElement>(null)
  const reviewRef = useRef<null | HTMLDivElement>(null)
  const contactRef = useRef<null | HTMLDivElement>(null)
  const inquiryRef = useRef<null | HTMLDivElement>(null)

  const handleTreatmentClick = () => {
    treatmentRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  const handlePricingClick = () => {
    pricingRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  const handleAboutClick = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  const handleReviewsClick = () => {
    reviewRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  const handleInquiryClick = () => {
    inquiryRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  
  return (
    <div>
      <Head>
        <title>MɅSSɅGE</title>
        <meta name="description" content="Holistic Massage Therapy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu 
          hidden={hidden} 
          setHidden={setHidden}
          handleTreatment={handleTreatmentClick} 
          handlePricing={handlePricingClick}
          handleAbout={handleAboutClick}
          handleReviews={handleReviewsClick}
          handleContact={handleContactClick}
          handleInquiry={handleInquiryClick}
        />
        <Nav stuck={stuck} setHidden={setHidden} />
        <Header setStuck={setStuck} stuck={stuck} />
        <Marketing stuck={stuck} />
        <Treatments innerRef={treatmentRef}/>
        <About innerRef={aboutRef} />
        <Reviews innerRef={reviewRef} />
        <Pricing innerRef={pricingRef} />
        <Contact innerRef={contactRef} />
        {/* <Inquiry innerRef={inquiryRef} /> */}
        <Footer />
      </main>
    </div>
  )
}

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import sevimli from '../assets/img/Screenshot_1.webp'
import ultrasoft from '../assets/img/Screenshot_3.webp'
import bahor from '../assets/img/bahor.webp'
import designo from '../assets/img/designo.webp'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slides, setSlides] = useState([])

  const thisIsRef = useRef()
  const worksTitleRef = useRef()
  const pressTitleRef = useRef()
  const press1Ref = useRef()
  const press2Ref = useRef()
  const contactTitleRef = useRef()
  const contact1Ref = useRef()
  const contact2Ref = useRef()
  const contact3Ref = useRef()
  const contact4Ref = useRef()
  const professionRef = useRef()
  const downloadRef = useRef()
  const slideContainer = useRef()
  const paginationRef = useRef()

  useEffect(() => {
    setSlides(slideContainer.current.querySelectorAll('.slide'))
  }, [])

  useEffect(() => {
    paginationRef.current.querySelector('span').style.width = `${
      paginationRef.current.offsetWidth / slides.length
    }px`
  }, [slides])

  useEffect(() => {
    const animText = gsap.fromTo(
      slideContainer.current.querySelector('.slide.active .slide-text__title'),
      { text: '' },
      {
        duration: 1.5,
        text: `${
          activeSlide === 0
            ? 'Sevimli Supermarket.uz'
            : activeSlide === 1
            ? 'Ultrasoft.uz'
            : activeSlide === 2
            ? 'Bahor Restaurant'
            : 'Designo'
        }`,
        ease: 'none',
        delay: 0.3,
      }
    )
    ScrollTrigger.create({
      trigger: slideContainer.current,
      animation: animText,
      toggleActions: 'play none none none',
      once: true,
    })
  }, [activeSlide])

  useEffect(() => {
    gsap.to(thisIsRef.current, {
      duration: 1,
      text: 'This is',
      ease: 'none',
      // delay: 0.6,
    })
    gsap.to(professionRef.current, {
      duration: 1.5,
      text: 'Entreprenuer and developer',
      ease: 'none',
    })
    gsap.to(downloadRef.current, {
      duration: 1.5,
      text: '< Download CV />',
      ease: 'none',
      delay: 0.6,
    })
  }, [thisIsRef, professionRef, downloadRef])

  useEffect(() => {
    const animImg = gsap.fromTo(
      slideContainer.current.querySelector('.slide-img'),
      { scale: 0, rotate: 180 },
      { delay: 0.8, duration: 1.5, scale: 1, rotate: 0, ease: 'circ.out' }
    )
    const animText = gsap.fromTo(
      slideContainer.current.querySelector('p'),
      { autoAlpha: 0, y: 100 },
      { delay: 0.8, duration: 1, autoAlpha: 1, y: 0 }
    )
    const animWorksTitle = gsap.fromTo(
      worksTitleRef.current,
      { autoAlpha: 0, y: 100 },
      { delay: 0.2, duration: 1, autoAlpha: 1, y: 0 }
    )
    const animPressTitle = gsap.fromTo(
      pressTitleRef.current,
      { autoAlpha: 0, y: 100 },
      { delay: 0.2, duration: 1, autoAlpha: 1, y: 0 }
    )
    const animPress1 = gsap.fromTo(
      press1Ref.current,
      { autoAlpha: 0.5, y: 400 },
      { duration: 0.5, autoAlpha: 1, y: 0 }
    )
    const animPress2 = gsap.fromTo(
      press2Ref.current,
      { autoAlpha: 0.5, y: 400 },
      { delay: 0.2, duration: 0.5, autoAlpha: 1, y: 0 }
    )
    const animContactTitle = gsap.fromTo(
      contactTitleRef.current,
      { autoAlpha: 0, y: 100 },
      { delay: 0.2, duration: 1, autoAlpha: 1, y: 0 }
    )
    const animContact1 = gsap.fromTo(
      contact1Ref.current,
      { scale: 0, rotate: 100 },
      { duration: 1, scale: 1.8, rotate: 0, ease: 'circ.out' }
    )
    const animContact2 = gsap.fromTo(
      contact2Ref.current,
      { scale: 0, rotate: 100 },
      { delay: 0.1, duration: 1, scale: 1.8, rotate: 0, ease: 'circ.out' }
    )
    const animContact3 = gsap.fromTo(
      contact3Ref.current,
      { scale: 0, rotate: 100 },
      { delay: 0.2, duration: 1, scale: 1.5, rotate: 0, ease: 'circ.out' }
    )
    const animContact4 = gsap.fromTo(
      contact4Ref.current,
      { scale: 0, rotate: 100 },
      { delay: 0.3, duration: 1, scale: 1.4, rotate: 0, ease: 'circ.out' }
    )
    ScrollTrigger.create({
      trigger: worksTitleRef.current,
      animation: animWorksTitle,
      toggleActions: 'play none none none',
      once: true,
    })
    ScrollTrigger.create({
      trigger: pressTitleRef.current,
      animation: animPressTitle,
      toggleActions: 'play none none none',
      once: true,
    })
    ScrollTrigger.create({
      trigger: pressTitleRef.current,
      animation: animPress1,
      toggleActions: 'play none none none',
      once: true,
    })
    ScrollTrigger.create({
      trigger: pressTitleRef.current,
      animation: animPress2,
      toggleActions: 'play none none none',
      once: true,
    })
    ScrollTrigger.create({
      trigger: contactTitleRef.current,
      animation: animContactTitle,
      toggleActions: 'play none none none',
      once: true,
    })
    ScrollTrigger.create({
      trigger: contact1Ref.current,
      animation: animContact1,
      toggleActions: 'play none none none',
      once: true,
    })
    ScrollTrigger.create({
      trigger: contact2Ref.current,
      animation: animContact2,
      toggleActions: 'play none none none',
      once: true,
    })
    ScrollTrigger.create({
      trigger: contact3Ref.current,
      animation: animContact3,
      toggleActions: 'play none none none',
      once: true,
    })
    ScrollTrigger.create({
      trigger: contact4Ref.current,
      animation: animContact4,
      toggleActions: 'play none none none',
      once: true,
    })
    ScrollTrigger.create({
      trigger: slideContainer.current,
      animation: animImg,
      toggleActions: 'play none none none',
      once: true,
    })
    ScrollTrigger.create({
      trigger: slideContainer.current,
      animation: animText,
      toggleActions: 'play none none none',
      once: true,
    })
  }, [])

  const rightBtn = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0)
      paginationRef.current.querySelector('span').style.width = `${
        paginationRef.current.offsetWidth / slides.length
      }px`
    } else {
      setActiveSlide(activeSlide + 1)
      paginationRef.current.querySelector('span').style.width = `${
        paginationRef.current.querySelector('span').offsetWidth +
        paginationRef.current.offsetWidth / slides.length
      }px`
    }
  }

  const leftBtn = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1)
      paginationRef.current.querySelector(
        'span'
      ).style.width = `${paginationRef.current.offsetWidth}px`
    } else {
      setActiveSlide(activeSlide - 1)
      paginationRef.current.querySelector('span').style.width = `${
        paginationRef.current.querySelector('span').offsetWidth -
        paginationRef.current.offsetWidth / slides.length
      }px`
    }
  }

  return (
    <>
      <div className="container">
        <section className="intro" id="home">
          <div>
            <p className="text-primary">
              <span ref={thisIsRef}></span>
              <span className="randomChars"></span>
            </p>
            <h1>
              <span>Fazli</span>
              <br /> <span>Jalal</span>
            </h1>
            <p className="text-primary">
              <span ref={professionRef}></span>
              <span className="randomChars"></span>
            </p>
          </div>
          <div>
            <a
              href={
                'https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-b13e3.appspot.com/o/CV_fazliddin.pdf?alt=media&token=83c8f638-a41f-4a70-99a6-0857e96f101f'
              }
              className="btn-anime"
              download
              type="pdf"
            >
              <span>
                <span>
                  <span ref={downloadRef}></span>
                </span>
              </span>
            </a>
          </div>
        </section>
        <section className="portfolio" id="portfolio">
          <h2 ref={worksTitleRef}>
            <span style={{ animationDelay: '1.1s' }}>M</span>
            <span style={{ animationDelay: '1.15s' }}>y</span>{' '}
            <span style={{ animationDelay: '1.2s' }}>P</span>
            <span style={{ animationDelay: '1.25s' }}>o</span>
            <span style={{ animationDelay: '1.3s' }}>r</span>
            <span style={{ animationDelay: '1.35s' }}>t</span>
            <span style={{ animationDelay: '1.4s' }}>f</span>
            <span style={{ animationDelay: '1.45s' }}>o</span>
            <span style={{ animationDelay: '1.5s' }}>l</span>
            <span style={{ animationDelay: '1.55s' }}>i</span>
            <span style={{ animationDelay: '1.6s' }}>o</span>
          </h2>
          <div className="slider-container" ref={slideContainer}>
            <div className={`slide ${activeSlide === 0 && 'active'}`}>
              <div>
                <a href="https://www.sevimli-supermarket.uz">
                  <div
                    className="slide-img"
                    style={{
                      backgroundImage: `url(${sevimli})`,
                    }}
                  ></div>
                </a>
              </div>
              <p className="slide-text">
                <span className="slide-text__title"></span>
                "Lovely Family Supermarket" is an eco-market with all kinds of
                food products, home appliances, gifts and many more products
                <span
                  className="slide-text__subtitle"
                  data-tech="React - SASS - Tailwindcss - Firebase - FramerMotion - i18next"
                >
                  Designer {'&'} Developer {'&'} SEO
                </span>
              </p>
            </div>
            <div className={`slide ${activeSlide === 1 && 'active'}`}>
              <div>
                <a href="https://www.ultrasoft.uz">
                  <div
                    className="slide-img"
                    style={{
                      backgroundImage: `url(${ultrasoft})`,
                    }}
                  ></div>
                </a>
              </div>
              <p className="slide-text">
                <span className="slide-text__title"></span>
                Ultrasoft.uz is a store website with programs, browsers,
                antiviruses, media and many more programs for computers. All
                safe and free.
                <span
                  className="slide-text__subtitle"
                  data-tech="React - Tailwindcss - DaisyUI - Firebase - Axios"
                >
                  Designer {'&'} Developer {'&'} SEO
                </span>
              </p>
            </div>
            <div className={`slide ${activeSlide === 2 && 'active'}`}>
              <div>
                <a href="https://bahor-restaurant.vercel.app/">
                  <div
                    className="slide-img"
                    style={{
                      backgroundImage: `url(${bahor})`,
                    }}
                  ></div>
                </a>
              </div>
              <p className="slide-text">
                <span className="slide-text__title"></span>
                Bahor reimagines the wonders of Uzbek fare in a space that
                evokes a bygone era of a boisterous yet elegant Uzbekistan — all
                within the heart of Shurchi.
                <span
                  className="slide-text__subtitle"
                  data-tech="React - FramerMotion"
                >
                  Designer {'&'} Developer {'&'} SEO
                </span>
              </p>
            </div>
            <div className={`slide ${activeSlide === 3 && 'active'}`}>
              <div>
                <a href="https://designo-alpha.vercel.app/">
                  <div
                    className="slide-img"
                    style={{
                      backgroundImage: `url(${designo})`,
                    }}
                  ></div>
                </a>
              </div>
              <p className="slide-text">
                <span className="slide-text__title"></span>
                Designo is a simple Landing page with features like cool
                animations, responsibility of live parts and the pleasure of
                speed.
                <span className="slide-text__subtitle" data-tech="React - SASS">
                  Developer {'&'} SEO
                </span>
              </p>
            </div>

            <button className="arrow left-arrow" onClick={() => leftBtn()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                fill="#fff"
                aria-hidden="true"
              >
                <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
              </svg>
            </button>
            <div className="pagination" ref={paginationRef}>
              <span></span>
            </div>
            <button className="arrow right-arrow" onClick={() => rightBtn()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                fill="#fff"
                aria-hidden="true"
              >
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
              </svg>
            </button>
          </div>
        </section>
      </div>
      <section className="press" id="press">
        <h2 ref={pressTitleRef}>My Press</h2>
        <div>
          <a
            href="https://dev.to/fazliddin04"
            className="press-link"
            ref={press1Ref}
          >
            <div className="container">
              <span>
                <h3>DEV Community</h3>
                <h4>from Mar 20, 2022</h4>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
              </svg>
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCuC06D1PQxCRN4DpmwAwzAg"
            className="press-link"
            ref={press2Ref}
          >
            <div className="container">
              <span>
                <h3>Youtube</h3>
                <h4>from Aug 16, 2020</h4>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
              </svg>
            </div>
          </a>
        </div>
      </section>
      <section className="contact" id="contact">
        <h2 ref={contactTitleRef}>Connect with me</h2>
        <div className="container">
          <a
            href="https://www.instagram.com/c.o.d.e.r_04/"
            className="contact-link"
            ref={contact1Ref}
          >
            {'<>'} <br /> instagram <br /> {'</>'}
          </a>
          <a
            href="https://t.me/buyerdayangiusernamebulishikkedi"
            className="contact-link"
            ref={contact2Ref}
          >
            {'<>'} <br /> Telegram <br /> {'</>'}
          </a>
          <a
            href="https://www.linkedin.com/in/fazliddin-pardayev-8787191b2/"
            className="contact-link"
            ref={contact3Ref}
          >
            {'<>'} <br /> Linkedin <br /> {'</>'}
          </a>
          <a
            href="mailto:fazliddinpardayev004@gmail.com"
            className="contact-link"
            ref={contact4Ref}
          >
            {'<>'} <br /> Gmail <br /> {'</>'}
          </a>
        </div>
      </section>
    </>
  )
}

export default Home

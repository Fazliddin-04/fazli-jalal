import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import sevimli from '../assets/img/Screenshot_1.png'
import ultrasoft from '../assets/img/Screenshot_3.png'
import bahor from '../assets/img/bahor.png'
import designo from '../assets/img/designo.png'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slides, setSlides] = useState([])

  const thisIsRef = useRef()
  const worksTitleRef = useRef()
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
      delay: 0.6,
    })
    gsap.to(professionRef.current, {
      duration: 1,
      text: 'Entreprenuer and developer',
      ease: 'none',
      delay: 0.6,
    })
    gsap.to(downloadRef.current, {
      duration: 1,
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
    ScrollTrigger.create({
      trigger: worksTitleRef.current,
      animation: animWorksTitle,
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
    <div className="container">
      <div id="starter"></div>
      <section className="intro" id="home">
        <div>
          <p className="text-primary" ref={thisIsRef}></p>
          <h1>
            <span data-text="Fazli">Fazli</span>
            <br /> <span data-text="Jalal">Jalal</span>
          </h1>
          <p className="text-primary" ref={professionRef}></p>
        </div>
        <div>
          <a
            href="../assets/cv-fazliddinpardayev.pdf"
            className="btn-anime"
            download
            type="pdf"
          >
            <span>
              <span>
                <span>{'<Download />'}</span>
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
              <a
                href="https://www.sevimli-supermarket.uz"
                className="slide-img"
                style={{
                  backgroundImage: `url(${sevimli})`,
                }}
              >
                {' '}
              </a>
            </div>
            <p className="slide-text">
              <span className="slide-text__title"></span>
              "Lovely Family Supermarket" is an eco-market with all kinds of
              food products, home appliances, kitchenware, perfumery, gifts and
              many more products. We offer our customers quality products at
              affordable prices.
              <span className="slide-text__subtitle">
                Designer {'&'} Developer {'&'} SEO
              </span>
            </p>
          </div>
          <div className={`slide ${activeSlide === 1 && 'active'}`}>
            <div>
              <a
                href="https://www.ultrasoft.uz"
                className="slide-img"
                style={{
                  backgroundImage: `url(${ultrasoft})`,
                }}
              >
                {' '}
              </a>
            </div>
            <p className="slide-text">
              <span className="slide-text__title"></span>
              Ultrasoft.uz is a store website with programs, browsers,
              antiviruses, media and many more programs for computers. All safe
              and free.
              <span className="slide-text__subtitle">
                Designer {'&'} Developer {'&'} SEO
              </span>
            </p>
          </div>
          <div className={`slide ${activeSlide === 2 && 'active'}`}>
            <div>
              <a
                href="https://bahor-restaurant.vercel.app/"
                className="slide-img"
                style={{
                  backgroundImage: `url(${bahor})`,
                }}
              >
                {' '}
              </a>
            </div>
            <p className="slide-text">
              <span className="slide-text__title"></span>
              Bahor reimagines the wonders of Uzbek fare in a space that evokes
              a bygone era of a boisterous yet elegant Uzbekistan — all within
              the heart of Shurchi.
              <span className="slide-text__subtitle">
                Designer {'&'} Developer {'&'} SEO
              </span>
            </p>
          </div>
          <div className={`slide ${activeSlide === 3 && 'active'}`}>
            <div>
              <a
                href="https://www.sevimli-supermarket.uz"
                className="slide-img"
                style={{
                  backgroundImage: `url(${designo})`,
                }}
              >
                {' '}
              </a>
            </div>
            <p className="slide-text">
              <span className="slide-text__title"></span>
              Designo is a simple Landing page with features like cool
              animations, responsibility of live parts and the pleasure of
              speed.
              <span className="slide-text__subtitle">Developer {'&'} SEO</span>
            </p>
          </div>

          <button className="arrow left-arrow" onClick={() => leftBtn()}>
            <FaAngleLeft />
          </button>
          <div className="pagination" ref={paginationRef}>
            <span></span>
          </div>
          <button className="arrow right-arrow" onClick={() => rightBtn()}>
            <FaAngleRight />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home

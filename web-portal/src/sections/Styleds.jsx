import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

import img1 from '../assets/Images/4.jpg'
import img2 from '../assets/Images/5.jpg'
import img3 from '../assets/Images/6.jpg'
import img4 from '../assets/Images/7.jpg'
import img5 from '../assets/Images/9.jpg'
import logo from '../assets/Svgs/logo_bn.svg'

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${props => props.theme.text};
  text-shadow: 1px 1px 1px ${props => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
`

const Left = styled.div`
  width: 35%;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  padding-top: 50px;

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    padding-top: 50px;
    p {
      font-size: ${props => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    padding-top: 30px;
    p {
      font-size: ${props => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    padding-top: 0px;
    p {
      font-size: ${props => props.theme.fontxs};
    }
  }
`
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  z-index: 2;
  background-color: ${props => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Logo = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  z-index: 1;
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = '' }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: 'grayscale(100%)' }}
      whileInView={{ filter: 'grayscale(0%)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'all' }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  )
}

const Styleds = () => {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  const Horizontalref = useRef(null)

  useLayoutEffect(() => {
    let element = ref.current

    let scrollingElement = Horizontalref.current

    let pinWrapWidth = scrollingElement.offsetWidth
    let t1 = gsap.timeline()

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: `${pinWrapWidth} bottom`,
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none',
      })

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: `${pinWrapWidth} bottom`,
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: 'none',
      })
      ScrollTrigger.refresh()
    }, 1000)
    ScrollTrigger.refresh()

    return () => {
      t1.kill()
      ScrollTrigger.kill()
    }
  }, [])

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        Styled Martial Arts
      </Title>
      <Left>
        <p>
          Martial arts is an umbrella term for a practice that comprises
          hundreds of styles or types of art. These practices come from
          different places, and some are introduced by individual teachers or
          masters. Each style has its own techniques, forms, principles, and so
          on.
          <br /> <br />
          Striking and stand-up martial arts styles involve moves like kicking,
          punching, blocking, and using your feet, knees, and elbows. Your
          teacher determines how much you can learn with this style.
          <br /> <br />
          But if you want to fight like a martial artist, striking and stand-up
          styles are best. Here are some examples of striking and stand-up
          martial arts:
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={img1} title="Boxing" />
        <Product img={img2} title="Kickboxing" />
        <Product img={img3} title="Karate" />
        <Product img={img4} title="Judo" />
        <Product img={img5} title="Krav Maga" />
      </Right>
      <Logo>
        <Product img={logo} />
      </Logo>
    </Section>
  )
}

export default Styleds

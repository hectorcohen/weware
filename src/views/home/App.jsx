import React from 'react';
/* Framer motion */
import { useTransform, useViewportScroll, motion } from 'framer-motion';
import Header from '../../components/Header';
import Accordion from '../../components/Accordion';
import pageOne from '../../assets/images/page_one.png';
import pageOneMobile from '../../assets/images/page_one_mobile.png';
import textPageOneMobile from '../../assets/images/text_page_one_mobile.png';
import linesMobile from '../../assets/images/lines_mobile.png';

import { images, assets } from '../../utils/images';
import Footer from '../../components/Footer';

export default function App() {
  const { scrollYProgress } = useViewportScroll();
  /* It's a framer motion hook that takes the scrollYProgress value and maps it to a new value. */
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="container flex relative p-10">
            <div className="flex w-full">
              <div className="flex w-full items-center justify-center md:justify-center items-center">
                <h1 className="text-blue_dark text-4xl font-bold mx-2 md:text-7xl">Bring</h1>
                <img className="w-1/2 md:w-60" src={images.element} alt="" />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center md:justify-center static">
            <img className="md:hidden" src={linesMobile} alt="lines" />
            <h1 className="text-blue_dark text-center text-4xl font-bold mx-2 md:text-7xl">
              your remote
            </h1>
            <img className="hidden md:block w-60" src={images.elementTwo} alt="element two" />
          </div>
          <div className="flex w-full text-center items-center justify-center md:justify-center items-center">
            <h1 className="text-blue_dark text-4xl font-bold md:text-7xl">team together.</h1>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-between my-12 p-6">
          <h1 className="text-justify text-blue_dark text-base md:text-xl md:w-1/2">
            <b>Weware means:</b>Easy to find knowledge, content and proceses. Announcements, team
            engagement, recognition and profiles. 🙌
          </h1>
          <div className="flex flex-col md:flex-row my-10 justify-center items-center">
            <input
              className="h-12 w-80 text-center m-2 placeholder-blue_dark border border-blue_dark rounded-lg"
              type="email"
              placeholder="Your email address"
              required
            />
            <button
              type="button"
              className="h-12 m-2 w-1/2 bg-verde flex justify-center items-center transition duration-150 ease-in-out lg:font-bold  hover:text-blue_dark  text-white px-4 sm:px-4 py-2 sm:py-4 text-sm font-bold rounded-lg"
            >
              Get early access
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center hidden lg:flex">
        <motion.div style={{ scale }}>
          <motion.div style={{ scrollYProgress }}>
            <img src={pageOne} alt="page examples" />
          </motion.div>
        </motion.div>
      </div>
      <div className="container mx-auto flex flex-col items-center sm:hidden">
        <img
          className="animate-bounce duration-1000 ease-in w-full h-full"
          src={pageOneMobile}
          alt="page mobile examples"
        />
        <div className="border border-neutral-50">
          <img src={textPageOneMobile} alt="text for mobile page" />
        </div>
      </div>
      <h1 className="container mx-auto text-blue_dark p-6 flex flex-col text-2xl text-center my-6 font-bold md:text-3xl">
        Distributed teams brought together
      </h1>
      <div className="container mx-auto flex flex-col items-center justify-between mt-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <img className="h-10 md:12" src={images.bucket} alt="bucket logo" />
          <img className="h-10 md:12" src={images.luna} alt="bucket logo" />
          <img className="h-10 md:12" src={images.hyperia} alt="bucket logo" />
          <img className="h-10 md:12" src={images.leapcure} alt="bucket logo" />
          <img className="h-10 md:12" src={images.better_works} alt="bucket logo" />
          <img className="h-10 md:12" src={images.mesh} alt="bucket logo" />
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center p-10">
        <h1 className="container mx-auto text-blue_dark md:w-1/2 flex flex-col text-2xl text-center my-2 font-bold md:text-3xl">
          Engage your remote team
        </h1>
        <h1 className="text-justify text-blue_dark text-base md:text-xl md:w-1/2">
          Remote work is challenging when knowledge is spread across slack, emails, documents and
          spreadsheets. It is especially challenging when trying to find information and engage with
          your remote team. <br />
          <b>Weware solves all that</b>. Create your team directory with profiles, share company
          announcements, create knowledge wiki where you share important information and processes.
          Best of all, weware is also a place to engage and recognize effort.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        <img src={assets.assetOne} alt="assets" />
        <div className="flex flex-col justify-center">
          <h1 className="container mx-auto text-blue_dark md:w-1/2 flex flex-col text-2xl text-center my-2 font-bold md:text-3xl">
            Announcements
          </h1>
          <h1 className="text-justify text-blue_dark text-base md:text-xl">
            Your entire team in one place, with Engage your team with company wide announcements
            that entice engagement. The team homepage reveals everything going on with your team.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        <div className="flex order-last md:order-first  flex-col justify-center items-center text-center text-blue_dark">
          <h1 className="font-bold text-lg md:text-2xl">Wiki</h1>
          <h2 className="text-base text-justify md:text-xl">
            Create and share knowledge with your team. Whether it be company processes,
            presentations, content your team has created, anything! Find anything directly from
            Slack too.
          </h2>
        </div>
        <img src={assets.assetsTwo} alt="assets" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        <img src={assets.assetThree} alt="assets" />
        <div className="flex flex-col justify-center">
          <h1 className="container mx-auto text-blue_dark md:w-1/2 flex flex-col text-2xl text-center my-2 font-bold md:text-3xl">
            Team directory
          </h1>
          <h1 className="text-justify text-blue_dark text-base md:text-xl">
            Your entire team in one place, with profile information, history, notes and more. You no
            longer need a clunky separate HR app.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        <div className="flex order-last md:order-first  flex-col justify-center items-center text-center text-blue_dark">
          <h1 className="font-bold text-lg md:text-2xl">Recognition</h1>
          <h2 className="text-base text-justify md:text-xl">
            Anyone can thank, recognize co workers for their effort. The activity feeds reveal all
            the great things happening on your team.
          </h2>
        </div>
        <img src={assets.assetFor} alt="assets" />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-between mt-4 p-6">
        <h1 className="container text-blue_dark flex flex-col text-xl md:text-2xl text-center my-2 leading-8 font-light md:w-1/2 ">
          “We've had less confusion with task responsibilities and deadlines, which has increased
          productivity and efficiency.”
        </h1>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-between mt-4 p-6">
        <div className="flex flex-row items-center justify-center">
          <img src={assets.humman} alt="assets" />
          <h1 className="mx-2 text-blue_dark text-base">John Doe, Qrvey.</h1>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-between mt-4 p-4">
        <div className="flex flex-col-reverse md:flex-row bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-12 py-4 rounded-2xl">
          <div className="flex justify-center items-center">
            <img className="w-52 my-2 mx-2" src={assets.assetGradienBox} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl md:text-3xl text-white text-center">
              Interested in early access? <br /> Join the waitlist
            </h1>
            <h4 className="text-center text-white text-xs">(releasing Q1 2022)</h4>
            <div className="flex flex-col jutify-center items-center md:flex-row">
              <input
                className="h-12 text-center my-2 mx-1 placeholder-blue_dark border border-blue_dark rounded-lg"
                type="email"
                placeholder="Your email address"
                required
              />
              <button
                type="button"
                className="h-12 w-2/3 bg-verde transition duration-150 my-2 ease-in-out flex justify-center items-center  hover:text-blue_dark rounded text-white px-4 sm:px-4 py-6 sm:py-4 text-xs md:text-base rounded-lg"
              >
                Get early access
              </button>
            </div>
          </div>
        </div>
      </div>
      <Accordion />
      <div className="flex flex-col justify-center items-center p-2 border border-['#D9DAE5']">
        <div className="flex flex-col justify-between items-center md:flex-row">
          <div className="flex flex-col m-2">
            <h1 className="text-blue_dark font-bold text-xl text-center md:text-left">
              Sign up for product updates:
            </h1>
            <h2 className="text-blue_dark text-base text-center md:w-[400px] md:text-left">
              Ullamcorper orci, eu venenatis ac euismod vel purus tortor rhoncus mauri.
            </h2>
          </div>
          <div className="container flex flex-col m-2 md:flex-row">
            <div className="flex justify-center items-center">
              <input
                className="h-12 w-3/4 text-center my-2 placeholder-blue_dark border border-blue_dark rounded-lg md:w-full mx-9 text-xs"
                type="email"
                placeholder="Your email address"
                required
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                className="text-xs h-12 w-1/2 bg-verde flex justify-center items-center transition duration-150 my-2 ease-in-out hover:text-blue_dark rounded-lg text-white px-4 sm:px-4 py-6 md:w-full"
              >
                Get early access
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

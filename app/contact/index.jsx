"use client";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PinpointIcon,
  TelIcon,
} from "../components/Reusablecomponents/Icons";
import MyUserData from "../components/Reusablecomponents/MyUserData";
import Loader from "../components/Reusablecomponents/Loader";
import ContactForm from "../components/Reusablecomponents/ContactForm";
import Magnetic from "../../magnetic";
import AnimatedTextContact from "../components/Reusablecomponents/PreloaderContact/AnimatedTextContact";

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validation, setValidation] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setValidation("Please enter a name");
      return;
    }
    if (!email) {
      setValidation("Please enter a valid email");
      return;
    }
    if (!message) {
      setValidation("Please type me a message");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
        setValidation("");
        setSuccessMessage("Email sent successfully!");
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 2500);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <>
      {/* <Head>
        <title>FrontLabs | Contact Page</title>
        <meta name="description" content="lorem ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
      <section
        id="contact"
        className={`${
          loading ? "blur-xs" : ""
        } relative w-full text-light bg-[black]`}
      >
        {/* Animation Text Header & Loader after submitting form */}
        <AnimatedTextContact />
        {loading && <Loader />}

        <div
          className="relative w-full flex justify-center items-center z-10 
               mx-auto mt-[5rem] 
               3xl:max-w-[80rem]
               2xl:max-w-[72rem] 
               xl:px-8 
               lg:px-10 
               md:px-8 
               sm:w-[90%] sm:mt-[3rem]"
        >
          <div
            className="relative w-full grid grid-cols-2 
               sm:grid-cols-1"
          >
            {/* Form */}
            <ContactForm
              name={name}
              email={email}
              message={message}
              validation={validation}
              successMessage={successMessage}
              onNameChange={handleNameChange}
              onEmailChange={handleEmailChange}
              onMessageChange={handleMessageChange}
              onFormSubmit={handleFormSubmit}
            />

            {/* Contact Details */}
            <div
              className="flex flex-col justify-between border-r-[0.5px] border-light/50  
                  px-12 
                  xl:px-10 
                  lg:px-8 
                  md:px-6 
                  sm:px-0 sm:border-none"
            >
              {/* Break Line */}
              <span
                className="
                  sm:py-4
                  sm:border-t-[1px] 
                  sm:border-light/50"
              ></span>

              {/* Icons Container - Telephone / Mail / Pinpoint */}
              <div
                className="icons-container inline-flex flex-col text-light cursor-pointer
                    mb-20 
                    sm:mb-9"
              >
                <Magnetic>
                  <a
                    href="tel:0652624512"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row items-center 
                        space-x-6 mb-6 
                        sm:my-5"
                  >
                    <TelIcon
                      className="w-6 
                        sm:w-5"
                    />
                    <p
                      className="text-gray-50 font-light text-base 
                        xs:text-sm"
                    >
                      {MyUserData.phone}
                    </p>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="mailto:frontlabsamsterdam@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row items-center 
                        space-x-6 my-6 
                        sm:my-5"
                  >
                    <MailIcon className="w-6 sm:w-5" />
                    <p
                      className="text-gray-50 font-light text-base 
                        xs:text-sm"
                    >
                      {MyUserData.email}
                    </p>
                  </a>
                </Magnetic>
                <a
                  href="https://goo.gl/maps/C8tcosBz27NuL5dt8"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center 
                        space-x-6 my-6 
                        sm:my-5"
                >
                  <PinpointIcon
                    className="w-6 
                        sm:w-5"
                  />
                  <p
                    className="text-gray-50 font-light text-base opacity-[0.8] hover:opacity-100 
                        transition-all duration-[350ms] ease-in-out
                        xs:text-sm"
                  >
                    {MyUserData.address}
                  </p>
                </a>
              </div>

              {/* Business Details */}
              <div className="flex justify-between text-light">
                <div
                  className="flex flex-col justify-end opacity-[0.75]
                     text-[15px] 
                     xs:text-sm"
                >
                  <p className="py-[4px]">
                    <i>{MyUserData.company}</i>
                  </p>
                  <p className="py-[4px]">CoC: {MyUserData.CoC}</p>
                  <p className="py-[4px]">VAT: {MyUserData.VAT}</p>
                </div>
                <div
                  className="social-icons flex flex-col 
                     space-y-6
                     md:space-y-5"
                >
                  <motion.a
                    href={MyUserData.socialLinks.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center cursor-pointer rounded-full
                        w-7 
                        md:w-6"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <LinkedInIcon />
                  </motion.a>
                  <motion.a
                    href={MyUserData.socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center cursor-pointer rounded-full
                        w-7 
                        md:w-6"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaceBookIcon />
                  </motion.a>
                  <motion.a
                    href={MyUserData.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center cursor-pointer rounded-full 
                        w-7 
                        md:w-6"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <InstagramIcon />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// "use client";
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
          className="relative flex justify-center items-center z-10
               w-full mx-auto
               9xl:max-w-[80vw] 9xl:mt-[10vh]
               7xl:max-w-[75vw] 7xl:mt-[7.5vh]
               xl:max-w-[85vw]
               lg:max-w-[90vw]
               sm:mt-[6vh]"
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
                  9xl:px-24
                  7xl:px-20
                  6xl:px-16
                  4xl:px-12
                  xl:px-6
                  md:px-4
                  sm:px-0 sm:border-none"
            >
              {/* Break Line */}
              <span
                className="
                  sm:py-4 sm:border-t-[1px] sm:border-light/50"
              ></span>

              {/* Icons Container - Telephone / Mail / Pinpoint */}
              <div
                className="icons-container inline-flex flex-col text-light cursor-pointer
                    9xl:absolute 9xl:mb-44 9xl:space-y-44 9xl:top-0
                    8xl:mb-36 8xl:space-y-52
                    7xl:mb-32 7xl:space-y-44
                    5xl:space-y-36
                    4xl:mb-24 4xl:space-y-32
                    3xl:mb-20 3xl:space-y-16
                    xl:mb-24 xl:space-y-20
                    md:mb-20 md:space-y-16
                    sm:relative sm:mt-6 sm:mb-14 sm:bottom-0"
              >
                {/* Phone */}
                <Magnetic>
                  <a
                    href="tel:0652624512"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row items-center 
                        9xl:space-x-20
                        7xl:space-x-16
                        4xl:space-x-12
                        3xl:space-x-6
                        xl:space-x-8
                        lg:space-x-6
                        xs:space-x-4"
                  >
                    <TelIcon
                      className="
                        9xl:w-24
                        8xl:w-20
                        7xl:w-16
                        5xl:w-14
                        4xl:w-10
                        3xl:w-6 
                        xl:w-8 
                        lg:w-7 
                        sm:w-6
                        xs:w-5"
                    />
                    <p
                      className="text-gray-50 font-light 
                        9xl:text-5xl
                        7xl:text-4xl
                        5xl:text-3xl
                        4xl:text-2xl
                        3xl:text-base 
                        xl:text-lg 
                        lg:text-base 
                        md:text-sm
                        sm:text-base 
                        xs:text-sm"
                    >
                      {MyUserData.phone}
                    </p>
                  </a>
                </Magnetic>
                {/* Email */}
                <Magnetic>
                  <a
                    href="mailto:frontlabsamsterdam@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row items-center 
                        9xl:space-x-20
                        7xl:space-x-16
                        4xl:space-x-12
                        3xl:space-x-6
                        xl:space-x-8
                        lg:space-x-6
                        xs:space-x-4"
                  >
                    <MailIcon
                      className="
                        9xl:w-24
                        8xl:w-20
                        7xl:w-16
                        5xl:w-14
                        4xl:w-10
                        3xl:w-6 
                        xl:w-8 
                        lg:w-7 
                        sm:w-6
                        xs:w-5"
                    />
                    <p
                      className="text-gray-50 font-light 
                        9xl:text-5xl
                        7xl:text-4xl
                        5xl:text-3xl
                        4xl:text-2xl
                        3xl:text-base 
                        xl:text-lg 
                        lg:text-base 
                        md:text-sm
                        sm:text-base 
                        xs:text-sm"
                    >
                      {MyUserData.email}
                    </p>
                  </a>
                </Magnetic>
                {/* PinPoint */}
                <a
                  href="https://goo.gl/maps/C8tcosBz27NuL5dt8"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center 
                        9xl:space-x-20
                        7xl:space-x-16
                        4xl:space-x-12
                        3xl:space-x-6
                        xl:space-x-8
                        lg:space-x-6
                        xs:space-x-4"
                >
                  <PinpointIcon
                    className="
                        9xl:w-24
                        8xl:w-20
                        7xl:w-16
                        5xl:w-14
                        4xl:w-10
                        3xl:w-6 
                        xl:w-8 
                        lg:w-7 
                        sm:w-6
                        xs:w-5"
                  />
                  <p
                    className="text-gray-50 font-light opacity-[0.8] hover:opacity-100 
                        transition-all duration-[350ms] ease-in-out
                        9xl:text-5xl
                        7xl:text-4xl
                        5xl:text-3xl
                        4xl:text-2xl
                        3xl:text-base 
                        xl:text-lg 
                        lg:text-base 
                        md:text-sm
                        sm:text-base 
                        xs:text-sm"
                  >
                    {MyUserData.address}
                  </p>
                </a>
              </div>

              {/* Business Details */}
              <div className="flex justify-between text-light">
                {/* Legal Info FrontLabs */}
                <div
                  className="flex flex-col justify-end opacity-[0.75]
                     9xl:text-5xl 9xl:space-y-8
                     8xl:text-4xl
                     7xl:text-3xl 7xl:space-y-6
                     4xl:text-2xl 4xl:space-y-4
                     3xl:text-base 3xl:space-y-2
                     lg:text-sm lg:space-y-1
                     sm:text-xs"
                >
                  <p className="">
                    <i>{MyUserData.company}</i>
                  </p>
                  <p className="">CoC: {MyUserData.CoC}</p>
                  <p className="">VAT: {MyUserData.VAT}</p>
                </div>
                {/* Social Media Icons */}
                <div
                  className="social-icons flex flex-col 
                     9xl:space-y-20
                     8xl:space-y-16
                     7xl:space-y-12
                     5xl:space-y-10
                     4xl:space-y-8
                     3xl:space-y-6
                     md:space-y-5
                     sm:space-y-4 sm:px-6"
                >
                  <motion.a
                    href={MyUserData.socialLinks.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center cursor-pointer rounded-full
                        9xl:w-20    
                        8xl:w-16    
                        6xl:w-14    
                        5xl:w-12    
                        4xl:w-10    
                        3xl:w-7 
                        lg:w-6 
                        sm:w-5"
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
                        9xl:w-20    
                        8xl:w-16    
                        6xl:w-14    
                        5xl:w-12    
                        4xl:w-10    
                        3xl:w-7 
                        lg:w-6 
                        sm:w-5"
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
                        9xl:w-20    
                        8xl:w-16    
                        6xl:w-14    
                        5xl:w-12    
                        4xl:w-10    
                        3xl:w-7 
                        lg:w-6 
                        sm:w-5"
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

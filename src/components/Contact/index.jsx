// "use client";
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
} from "../Reusablecomponents/Icons";
import MyUserData from "../Reusablecomponents/MyUserData";
import Loader from "../Reusablecomponents/Loader";
import ContactForm from "../Reusablecomponents/ContactForm";
import Magnetic from "../../magnetic";
import AnimatedTextContact from "../Reusablecomponents/PreloaderContact/AnimatedTextContact";

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
      <Head>
        <title>FrontLabs | Contact Page</title>
        <meta name="description" content="lorem ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        id="contact"
        className={`${loading ? "blur-xs" : ""} relative w-full text-light`}
      >
        <AnimatedTextContact />
        {loading && <Loader />}

        <div
          className="relative w-full flex items-center justify-between max-w-6xl mx-auto mt-[7vh]
                md:p-10 lg:p-20 mb-0 z-10"
        >
          <div className="relative w-full grid grid-cols-2">
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

            <div className="flex flex-col justify-between px-8 border-r-[0.5px] border-light/50 md:ml-4">
              {/* Contact Details */}
              <div className="icons-container inline-flex flex-col mb-20 text-light cursor-pointer">
                <Magnetic>
                  <a
                    href="tel:0652624512"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row items-center space-x-6
                        mt-4 mb-8"
                  >
                    <TelIcon className="w-6 h-7" />
                    <p className="text-gray-50 font-light text-sm">
                      {MyUserData.phone}
                    </p>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="mailto:frontlabsamsterdam@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row items-center space-x-6
                  my-8"
                  >
                    <MailIcon className="w-6 h-7" />
                    <p className="text-gray-50 font-light text-sm">
                      {MyUserData.email}
                    </p>
                  </a>
                </Magnetic>
                <a
                  href="https://goo.gl/maps/C8tcosBz27NuL5dt8"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center space-x-6
                  my-8"
                >
                  <PinpointIcon className="w-6 h-7" />
                  <p className="text-gray-50 font-light text-sm opacity-[0.8] hover:opacity-100 transition-all duration-[350ms] ease-in-out">
                    {MyUserData.address}
                  </p>
                </a>
              </div>

              {/* Business Details */}
              <div className="flex justify-between text-light">
                <div className="flex flex-col text-sm justify-end opacity-[0.75]">
                  <p className="py-[4px]">
                    <i>{MyUserData.company}</i>
                  </p>
                  <p className="py-[4px]">CoC: {MyUserData.CoC}</p>
                  <p className="py-[4px]">VAT: {MyUserData.VAT}</p>
                </div>
                <div className="social-icons flex flex-col space-y-6">
                  <motion.a
                    href={MyUserData.socialLinks.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center cursor-pointer 
                                    w-7 rounded-full"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <LinkedInIcon />
                  </motion.a>
                  <motion.a
                    href={MyUserData.socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center cursor-pointer 
                                    w-7 rounded-full"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaceBookIcon />
                  </motion.a>
                  <motion.a
                    href={MyUserData.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center cursor-pointer 
                                    w-7 rounded-full"
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
      </div>
    </>
  );
}

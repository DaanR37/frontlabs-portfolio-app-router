const ContactForm = (props) => {
  return (
    <form
      id="form"
      onSubmit={props.onFormSubmit}
      className="form flex flex-col justify-between text-light 
                  border-l-[0.5px] border-r-[0.5px] border-light/50
                  9xl:px-24 
                  7xl:px-20
                  6xl:px-16
                  4xl:px-12 
                  xl:px-6 
                  md:px-4
                  sm:px-0 sm:mb-16 sm:border-none"
    >
      {/* Container Form Textfields */}
      <div className="flex flex-col">
        {/* Field 1 - NAME */}
        <div className="flex flex-col 
                  9xl:mb-32 
                  8xl:mb-28 
                  7xl:mb-16 
                  4xl:mb-10 
                  3xl:mb-5 
                  xl:mb-12 
                  lg:mb-16 
                  sm:mb-12
                  xs:mb-8"
        >
          <label htmlFor="name"
            className="border-light/50
                        9xl:text-7xl 9xl:mb-4
                        8xl:text-6xl
                        7xl:text-5xl 7xl:mb-2
                        5xl:text-4xl
                        4xl:text-3xl
                        3xl:text-2xl 3xl:mb-0
                        xl:text-xl 
                        md:text-lg
                        sm:border-t-[0.5px] sm:py-2
                        xs:text-base xs:py-0"
          >
            Name
          </label>
          <input
            className="input-field focus:outline-none bg-[black]
                        font-light
                        9xl:text-5xl
                        7xl:text-4xl
                        5xl:text-3xl
                        4xl:text-2xl
                        3xl:text-base"
            type="text"
            id="name"
            name="name"
            value={props.name}
            onChange={props.onNameChange}
            placeholder="enter your name"
            style={{ fontStyle: 'italic' }}
          />
        </div>
        {/* Field 2 - EMAIL */}
        <div className="flex flex-col 
                  9xl:mb-32 
                  8xl:mb-28 
                  7xl:mb-16 
                  4xl:mb-10 
                  3xl:mb-5 
                  xl:mb-12 
                  lg:mb-16 
                  sm:mb-12
                  xs:mb-8"
        >
          <label htmlFor="email"
            className="border-light/50 
                           9xl:text-7xl 9xl:mt-24 9xl:mb-4
                           8xl:text-6xl
                           7xl:text-5xl 7xl:mb-2
                           5xl:text-4xl
                           4xl:text-3xl
                           3xl:text-2xl 3xl:mt-4 3xl:mb-0
                           xl:text-xl 
                           md:text-lg 
                           sm:border-t-[0.5px] sm:py-2
                           xs:text-base xs:py-0"
          >
            Email
          </label>
          <input
            className="input-field focus:outline-none bg-[black]
                        font-light
                        9xl:text-5xl
                        7xl:text-4xl
                        5xl:text-3xl
                        4xl:text-2xl
                        3xl:text-base"
            type="email"
            id="email"
            name="email"
            value={props.email}
            onChange={props.onEmailChange}
            placeholder="enter your email"
            style={{ fontStyle: 'italic' }}
          />
        </div>
        {/* Field 3 - MESSAGE */}
        <div className="flex flex-col 
                9xl:mb-36 
                8xl:mb-32 
                7xl:mb-20 
                4xl:mb-12 
                3xl:mb-5 
                xl:mb-10 
                lg:mb-8 
                sm:mb-12
                xs:mb-6"
        >
          <label htmlFor="message"
            className="border-light/50
                           9xl:text-7xl 9xl:mt-24 9xl:mb-4
                           8xl:text-6xl
                           7xl:text-5xl 7xl:mb-2
                           5xl:text-4xl
                           4xl:text-3xl
                           3xl:text-2xl 3xl:mt-4 3xl:mb-0
                           xl:text-xl 
                           md:text-lg
                           sm:border-t-[0.5px] sm:py-2
                           xs:text-base xs:py-0"
          >
            Message
          </label>
          <textarea
            className="input-field focus:outline-none bg-[black] 
                        font-light
                        9xl:text-5xl
                        7xl:text-4xl
                        5xl:text-3xl
                        4xl:text-2xl
                        3xl:text-base"
            rows="6"
            type="text"
            id="message"
            name="message"
            value={props.message}
            onChange={props.onMessageChange}
            placeholder="your message"
            style={{ fontStyle: 'italic' }}
          ></textarea>
        </div>
      </div>

      {/* Send Button */}
      <div className="
              w-full flex items-center justify-between"
      >
        <button
          type="submit"
          className="rounded-sm bg-transparent border-[0.5px] border-light hover:bg-light hover:text-dark 
                     hover:border-dark transition-all duration-[350ms] ease-in-out
                     9xl:w-1/6 9xl:py-6 9xl:text-4xl 9xl:font-bold 9xl:tracking-[0.125rem]
                     7xl:w-1/5 7xl:text-3xl 
                     6xl:w-1/6 6xl:py-5 6xl:text-2xl 
                     5xl:py-4
                     4xl:py-4 4xl:text-xl
                     3xl:w-1/5 3xl:py-2 3xl:text-sm 3xl:font-semibold 3xl:tracking-[0.075rem]
                     md:w-1/4 md:text-xs
                     sm:w-1/5"
          disabled={props.loading}
        >
          Send
        </button>
        <div className="text-light
              9xl:text-4xl
              3xl:text-base">
          <i>{props.validation}</i>
        </div>
      </div>

      {/* Succes Message */}
      {props.successMessage &&
        (
          <p className="absolute text-center rounded-xl bg-light/70 text-dark 
                     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     9xl:text-7xl 9xl:w-1/3 9xl:px-16 9xl:py-32                
                     8xl:text-6xl 8xl:px-14 8xl:py-28                
                     7xl:text-5xl                
                     5xl:text-4xl 5xl:px-12 5xl:py-24                
                     3xl:text-lg 3xl:p-16
                     sm:text-[15px] sm:top-1/4 sm:-translate-y-1/4 sm:w-1/2 sm:p-4">
            {props.successMessage}
          </p>
        )
      }
    </form>
  )
}

export default ContactForm;
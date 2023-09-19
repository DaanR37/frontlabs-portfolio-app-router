const ContactForm = (props) => {
  return (
    <form
      id="form"
      onSubmit={props.onFormSubmit}
      className="form flex flex-col justify-between text-light 
                  border-l-[0.5px] border-r-[0.5px] border-light/50
                  px-12 
                  xl:px-10 
                  lg:px-8 
                  md:px-6 
                  sm:px-0 sm:mb-16 sm:border-none"
    >
      <div className="flex flex-col">
        <div className="flex flex-col 
                  mb-5 
                  sm:mb-12">
          <label htmlFor="name"
            className="border-light/50
                        text-2xl 
                        xl:text-xl 
                        md:text-lg
                        sm:border-t-[0.5px] sm:py-2">
            Name
          </label>
          <input
            className="input-field font-light focus:outline-none bg-[black]"
            type="text"
            id="name"
            name="name"
            value={props.name}
            onChange={props.onNameChange}
            placeholder="enter your name"
            style={{ fontStyle: 'italic' }}
          />
        </div>
        <div className="flex flex-col 
                  mb-5 
                  sm:mb-12">
          <label htmlFor="email"
            className="border-light/50 
                           text-2xl mt-4
                           xl:text-xl 
                           md:text-lg 
                           sm:border-t-[0.5px] sm:py-2 ">
            Email
          </label>
          <input
            className="input-field font-light focus:outline-none bg-[black]"
            type="email"
            id="email"
            name="email"
            value={props.email}
            onChange={props.onEmailChange}
            placeholder="enter your email"
            style={{ fontStyle: 'italic' }}
          />
        </div>
        <div className="flex flex-col mb-5 sm:mb-12">
          <label htmlFor="message"
            className="border-light/50
                           text-2xl mt-4
                           xl:text-xl 
                           md:text-lg
                           sm:border-t-[0.5px] sm:py-2">
            Message
          </label>
          <textarea
            className="input-field font-light focus:outline-none bg-[black]"
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

      <div className="w-full flex items-center justify-between">
        <button
          type="submit"
          className="rounded-sm font-semibold bg-transparent border-[0.5px] 
                     border-light hover:bg-light hover:text-dark 
                     hover:border-dark transition-all duration-[350ms] ease-in-out
                     w-1/4 py-2 text-sm
                     sm:w-[18%]"
          disabled={props.loading}
        >
          Send
        </button>
        <div className="text-base text-light">
          <i>{props.validation}</i>
        </div>
      </div>

      {props.successMessage &&
        (
          <p className="absolute text-lg text-center rounded-xl bg-light/70 text-dark 
                     w-1/3 p-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     sm:text-[15px] sm:top-1/4 sm:-translate-y-1/4 sm:w-1/2 sm:p-4">
            {props.successMessage}
          </p>
        )
      }
    </form>
  )
}

export default ContactForm;
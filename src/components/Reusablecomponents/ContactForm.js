import Magnetic from "../../magnetic";

const ContactForm = (props) => {
        return (
                <form
                        onSubmit={props.onFormSubmit}
                        className="form flex flex-col justify-between text-light border-l-[0.5px] px-8
                        border-r-[0.5px] border-light/50 bg-[black]"
                >
                        <div className="flex flex-col">
                                <div className="flex flex-col mb-5">
                                        <label htmlFor="name" className="text-2xl">
                                                Name
                                        </label>
                                        <input
                                                className="input-field font-light focus:outline-none 
                                                bg-[black] transition duration-[0.3] ease-in"
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={props.name}
                                                onChange={props.onNameChange}
                                                placeholder="enter your name"
                                                style={{ fontStyle: 'italic' }}
                                        />
                                </div>
                                <div className="flex flex-col mb-5">
                                        <label htmlFor="email" className="text-2xl mt-4">
                                                Email
                                        </label>
                                        <input
                                                className="input-field font-light focus:outline-none 
                                bg-[black]"
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={props.email}
                                                onChange={props.onEmailChange}
                                                placeholder="enter your email"
                                                style={{ fontStyle: 'italic' }}
                                        />
                                </div>
                                <div className="flex flex-col mb-5">
                                        <label htmlFor="message" className="text-2xl mt-4">
                                                Message
                                        </label>
                                        <textarea
                                                className="input-field font-light focus:outline-none 
                                bg-[black]"
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

                        <div className="w-full flex items-center">
                                <button
                                        type="submit"
                                        className="bg-transparent text-sm rounded-sm w-1/4 py-2 font-semibold border-[0.5px]
                                        border-light hover:bg-light hover:text-dark hover:border-dark 
                                        transition-all duration-[350ms] ease-in-out"
                                        disabled={props.loading}
                                >
                                        Send
                                </button>
                                <div className="2xl:text-sm text-dark">
                                        {props.validation}
                                </div>
                        </div>

                        {props.successMessage &&
                                (
                                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                        rounded-2xl border-solid p-16 w-1/3 bg-dark/90 text-light dark:bg-light/90 
                                        dark:text-dark shadow-2xl drop-shadow-xl text-lg text-center">
                                                {props.successMessage}
                                        </p>
                                )
                        }
                </form>
        )
}

export default ContactForm;
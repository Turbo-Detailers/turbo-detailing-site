import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function ContactForm() {
  var [submitted, setSubmitted] = useState(false);
  // Input Change Handling
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: "",
    notes: "",
  });
  const handleOnChange = (event: any) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling

  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    if (inputs.email === "" || inputs.number === "" || inputs.notes === "")
      return;

    // axios({
    //   method: "POST",
    //   url: "/api/form/quote",
    //   data: inputs,
    //   ...inputs,
    // })
    axios
      .post("/api/form/exotic-inquiry", inputs)
      .then(() => {
        console.log("Sent");
        setInputs({
          name: "",
          email: "",
          number: "",
          notes: "",
        });

        setSubmitted(true);
      })
      .catch((error: any) => {
        console.log("error");
        toast(`Error: ${error.error}`);
      });
  };

  if (submitted)
    return (
      <section className="bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Exotic Vehicles
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
            Your message was sent successfully! Check your email for
            confirmation.
          </p>
        </div>
        <ToastContainer />
      </section>
    );
  return (
    <section className="bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Exotic Vehicles
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
          Get personalized service that works with your schedule. Let us know
          what you'd like below.
        </p>
        <form onSubmit={handleOnSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm border border-gray-300 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Johnny Appleseed"
              value={inputs.name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm border border-gray-300 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="contact@turbodetailers.com"
              value={inputs.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Number
            </label>
            <input
              type="tel"
              id="number"
              className="shadow-sm border border-gray-300 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="(952) 457-5638"
              value={inputs.number}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="notes"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="notes"
              rows={6}
              className="shadow-sm border border-gray-300 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Please describe what vehicles you would like us to detail, and any specifics about the type of jobs and frequency. Please also list any other requirements you may have."
              value={inputs.notes}
              required
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

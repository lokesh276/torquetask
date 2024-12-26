import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);

    setIsSubmitted(true);

    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);  
  };

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">Contact Form</h2>
      </div>

      {isSubmitted && (
        <div className="text-center text-green-500 font-semibold mb-5">
          Form Submitted Successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">First Name</label>
            <div className="mt-2.5">
              <input
                required
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">Last Name</label>
            <div className="mt-2.5">
              <input
                required
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email</label>
          <div className="mt-2.5">
            <input
              required
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>
        </div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
        <textarea
          required
          value={formData.message}
          onChange={handleChange}
          name="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        <div className="mt-7">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;

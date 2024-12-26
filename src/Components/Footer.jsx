
function Footer() {
  return (
    <footer>
      <div className="bg-gray-800 py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <a href="/" className="block w-56 mb-10">
                <svg
                  version="1.1"
                  viewBox="0 0 3368 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(0 -75)">
                      <g transform="translate(0 75)">
                        <rect
                          width="512"
                          height="512"
                          rx="128"
                          fill="#3D5AFE"
                        ></rect>
                        <rect
                          x="149"
                          y="176"
                          width="220"
                          height="220"
                          fill="#fff"
                        ></rect>
                        <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                        <circle cx="369" cy="286" r="40" fill="#2962FF"></circle>
                      </g>
                      <text
                        fill="white"
                        fontFamily="Nunito-Bold, Nunito"
                        fontSize="512"
                        fontWeight="bold"
                      >
                        <tspan x="654" y="518">Tailwindow</tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </a>
              <p className="text-justify">
                Tailwindow is a collection of UI Components created using
                Tailwind CSS Framework. The UI Components give you all of the
                building blocks you need to build any designs without any
                annoying opinionated styles you have to fight to override.
              </p>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Company
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Blog
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Getting Started With HTML and CSS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    What Is Flex And When to Use It?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    How TailwindCSS Can Help Your Productivity?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    5 Tips to Make Responsive Website
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    See More
                  </a>
                </li>
              </ul>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Connect With Us
                </h2>
              </div>
              <div className="flex space-x-2">
                {/* Social media icons */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                {/* Add other icons similarly */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

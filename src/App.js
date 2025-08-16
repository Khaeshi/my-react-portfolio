import React from 'react';
import BottomBar from './components/bottomBar.tsx';
import { HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/solid';

const bottomBarItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <HomeIcon className="h-5 w-5 inline-block" />,
      href: '/',
    },
    {
      id: 'search',
      label: 'Search',
      icon: <MagnifyingGlassIcon className="h-5 w-5 inline-block" />,
      href: '/search',
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <UserIcon className="h-5 w-5 inline-block" />,
      href: '/profile',
    },
];

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Header Section */}
        <header className="bg-indigo-600 py-6 px-8 text-white">
          <h1 className="text-3xl font-semibold">Your Name</h1>
          <p className="mt-2 text-indigo-200">Web Developer | Designer | Problem Solver</p>
        </header>

        {/* Main Content Section */}
        <main className="p-8">
          {/* About Me */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              A passionate web developer with expertise in creating modern and responsive web applications. 
              I specialize in React, Tailwind CSS, and Node.js. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Project 1 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Project Title 1</h3>
                <p className="text-gray-700">
                  A brief description of the project and the technologies used.
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block">
                  Learn More
                </a>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Project Title 2</h3>
                <p className="text-gray-700">
                  Another project description highlighting key features and technologies.
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block">
                  Learn More
                </a>
              </div>

            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>Node.js</li>
              <li>HTML5</li>
              <li>CSS3</li>
              {/* Add more skills as needed */}
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact</h2>
            <p className="text-gray-700">
              Feel free to reach out to me via email or connect with me on social media.
            </p>
            <p className="text-gray-700 mt-2">
              Email: <a href="mailto:your.email@example.com" className="text-indigo-600 hover:text-indigo-800">your.email@example.com</a>
            </p>
            {/* Add social media links here */}
          </section>
          <div>
          {/* Your main content here */}
          <div style={{ paddingBottom: '4rem' }}> {/* Add padding to prevent content from being hidden */}
            <h1>My App Content</h1>
            <p>Some content here...</p>
            </div>
            <BottomBar items={bottomBarItems} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

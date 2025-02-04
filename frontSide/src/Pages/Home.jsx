import React from 'react'
import UserNavbar from '../Components/Navbar/UserNavbar'
import image from "../assets/hme.jpg"

const Home = () => {
  return (
    <>
    <UserNavbar />
    <div className='bg-slate-100'>

    <section className="container mx-auto flex flex-col md:flex-row items-center py-20 px-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Scale design & dev operations with Avocode Enterprise
          </h1>
          <p className="text-gray-600">
            A unified workspace that fosters collaboration, streamlines workflows, and enhances productivity.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Get Started for Free
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 ">
          <img src={image} alt="Hero Chart" className="w-96 h-96 rounded-lg " />
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-gray-100 py-16 px-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          The Highlighting Part of Our Solution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Live Caption", icon: "🎙", description: "Real-time captioning." },
            { title: "Smart Reply", icon: "💬", description: "Intelligent replies for quick responses." },
            { title: "Sound Amplifier", icon: "🔊", description: "Enhanced sound clarity." },
            { title: "Gesture Navigation", icon: "👋", description: "Simplified controls with gestures." },
            { title: "Dark Theme", icon: "🌙", description: "Comfortable viewing at night." },
            { title: "Privacy Controls", icon: "🔒", description: "Advanced privacy settings." },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="font-bold text-lg mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prevent Failure Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center py-20 px-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Prevent failure from impacting your reputation
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>✔ Risk-building scenarios identified in advance.</li>
            <li>✔ Proactive issue tracking and alerts.</li>
            <li>✔ Backtracking with high visibility of patterns.</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/world-map.png" alt="World Map" className="w-full" />
        </div>
      </section>

      {/* Payments Section */}
      <section className="bg-gray-100 py-16 px-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Accept payments any country in this whole universe
        </h2>
        <div className="flex justify-center">
          <img src="/payments.png" alt="Payments" className="w-3/4" />
        </div>
      </section>
    <div>
  <div class="flex items-center space-x-2 text-base ">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>
</div>
    </>
  )
}

export default Home
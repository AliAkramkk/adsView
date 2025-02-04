import React, { useEffect } from "react";

const VideoBackground = () => {
    useEffect(() => {
        const video = document.getElementById('videoBackground');
        // Set the video to start at 10 seconds and play from there
        video.currentTime = 10;  // Start at 10 seconds
        video.play(); // Start playing automatically
      }, []);
    
      return (
        <div className="relative md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight z-10">
            Scale design & dev operations with Avocode Enterprise
          </h1>
          <p className="text-gray-600 z-10">
            A unified workspace that fosters collaboration, streamlines workflows, and enhances productivity.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 z-10">
            Get Started for Free
          </button>
    
          {/* Video background */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <video
              id="videoBackground"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    };

    export default VideoBackground;
"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
// import ReactPlayer from 'react-player';

// Dynamically import ReactPlayer for video rendering (client-side only)
// const Player = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function CkdTdTwoCasesTry() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [formData,setFormData] = useState(JSON.parse(localStorage.getItem("data")))

  const currentField = formData.fields[currentIndex];

  useEffect(()=>{
console.log(JSON.parse(localStorage.getItem("data")));

  },[])

  // Handle Next Button click
  const handleNext = () => {
    if (currentIndex < formData.fields.length - 1) {
      setDirection('right');
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle Previous Button click
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection('left');
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Determine if it's a question or a screen
  const isQuestion = currentField.type === 'question';
  const isWelcomeScreen = currentField.type === 'welcome_screen';
  const isEndingScreen = currentField.type === 'ending_screen';

  return (
    <div className="w-full max-w-2xl mx-auto relative overflow-hidden">
      {/* Smooth transition container */}
      <div
        className={`transition-all duration-500 ease-in-out transform ${
          direction === 'right' ? 'translate-x-full' : direction === 'left' ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Welcome Screen */}
        {isWelcomeScreen && (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{currentField.title}</h1>
            {currentField.media && currentField.media.includes('video') ? (
            <div>Player</div>
            ) : (
              <img src={currentField.media} alt="Welcome screen" className="w-full h-auto rounded-lg" />
            )}
            <button
              onClick={handleNext}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700"
            >
              {currentField.button_text}
            </button>
          </div>
        )}

        {/* Question Screen */}
        {isQuestion && currentField.question && (
          <div className="text-center">
            <p className="text-lg font-medium mb-4">{currentField.question.title}</p>

            {/* Handle Different Question Types */}
            {currentField.question.type === 'short_text' && (
              <input
                type="text"
                className="border rounded-lg p-3 w-full mb-4"
                placeholder="Your answer"
              />
            )}

            {currentField.question.type === 'multiple_choice' && (
              <div className="max-h-60 overflow-y-auto mb-4">
                {currentField.question.properties.choices.map((choice, idx) => (
                  <label key={idx} className="block mb-3">
                    <input
                      type={currentField.question.allow_multiple_selection ? 'checkbox' : 'radio'}
                      name={currentField.question.id}
                      value={choice.label}
                      className="mr-2"
                    />
                    {choice.label}
                  </label>
                ))}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {currentIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400"
                >
                  ← Previous
                </button>
              )}
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Ending Screen */}
        {isEndingScreen && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{currentField.title}</h2>
            {currentField.media && currentField.media.includes('video') ? (
        <div>player</div>
            ) : (
              <img src={currentField.media} alt="Ending screen" className="w-full h-auto rounded-lg" />
            )}
            <button
              onClick={handleNext}
              className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full text-lg hover:bg-green-700"
            >
              {currentField.button_text}
            </button>
          </div>
        )}
      </div>

      {/* Footer Navigation (for mobile responsiveness) */}
      <div className="absolute bottom-4 left-0 right-0 px-4 flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`px-6 py-3 bg-gray-300 text-white rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          ←
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === formData.fields.length - 1}
          className={`px-6 py-3 bg-blue-600 text-white rounded-full ${currentIndex === formData.fields.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          →
        </button>
      </div>
    </div>
  );
}


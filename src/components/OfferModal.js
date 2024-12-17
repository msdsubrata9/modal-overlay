import React from "react";

function OfferModal({ handleCloseModal, handleOfferAcceptedModal }) {
  function handleOutsideClick(event) {
    console.log(event);
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  }
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-6 text-gray-500 hover:text-gray-700 text-xl"
          onClick={handleCloseModal}
        >
          x
        </button>
        {/* Modal Content */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Amazing Offer Just for You!
        </h2>
        <p className="text-gray-600 mb-6">
          Click the button below to accept your amazing offer and enjoy the
          benefits today!
        </p>
        {/* Action Button */}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold"
          onClick={handleOfferAcceptedModal}
        >
          Accept Offer
        </button>
      </div>
    </div>
  );
}

export default OfferModal;

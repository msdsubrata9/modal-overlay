import { useState } from "react";
import OfferModal from "./components/OfferModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);

  function handleOfferModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleOfferAcceptedModal() {
    setShowModal(false);
    setOfferAccepted(true);
  }

  return (
    <div>
      <div
        className={`flex justify-center items-center min-h-screen ${
          showModal ? "bg-blue-500" : "bg-green-500"
        }`}
      >
        {!showModal ? (
          offerAccepted ? (
            <h1 className="font-bold text-black text-5xl">Offer Accepted</h1>
          ) : (
            <button
              className="px-6 py-4 bg-blue-500 text-white rounded"
              onClick={handleOfferModal}
            >
              Show Offer
            </button>
          )
        ) : (
          <OfferModal
            handleCloseModal={handleCloseModal}
            handleOfferAcceptedModal={handleOfferAcceptedModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;

"use client";

import Loading from "./(root)/Loader";

function GlobalLoadingIndicator() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="z-10">
        <Loading />
      </div>
    </div>
  );
}

export default GlobalLoadingIndicator;

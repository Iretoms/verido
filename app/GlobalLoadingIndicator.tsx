"use client";

import { useIsFetching } from "@tanstack/react-query";
import Loading from "./(root)/Loader";

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();

  if (isFetching) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="z-10">
          <Loading />
        </div>
      </div>
    );
  }

  return null;
}

export default GlobalLoadingIndicator;

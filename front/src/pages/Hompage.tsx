import { useState } from "react";
import UrlDisplay from "../components/UrlDisplay";
import UrlInput from "../components/UrlInput";

const Homepage: React.FC = () => {
  return (
    <div>
      <UrlInput />
      <UrlDisplay />
    </div>
  );
};

export default Homepage;

import React, { useRef } from "react";
import External_render from "./externalRender";
import HowAreYou from "./HowAreYou";
import { Link, animateScroll as scroll } from 'react-scroll';

function App() {
  const externalRenderRef = useRef(null);

  const scrollToExternalRender = () => {
    scroll.scrollTo(externalRenderRef.current.offsetTop);
  };

  return (
    <div className="gradient-container">
      <HowAreYou onEmojiSelect={scrollToExternalRender} />
      {/* <External_render
        ref={externalRenderRef}
        link="https://xhalr.com/"
        title="Wikipedia"
        width="70%"
        height="600px"
      /> */}
      <Link to="external-render" smooth={true} duration={500}>
      </Link>
    </div>
  );
}

export default App;
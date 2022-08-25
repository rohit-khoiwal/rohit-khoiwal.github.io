import React from "react";

export default function FadeIn(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.disconnect();
    }, []);
    const plusMinux = props.id%2 === 0 ? "" : "-"
    const transformText = "translateX("  + plusMinux + 100 + "%) rotateY(180deg)"
    const check = props.which === "project" ? true : false

    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
        style = {check? isVisible? {}: {transform: transformText} : {}}
      >
        {props.children}
      </div>
    );
  }
  
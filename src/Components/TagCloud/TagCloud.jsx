import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const TagSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const texts = [
      { text: "Google", link: "https://www.google.com" },
      { text: "Facebook", link: "https://www.facebook.com" },
      { text: "Twitter", link: "https://www.twitter.com" },
      { text: "YouTube", link: "https://www.youtube.com" },
      { text: "GitHub", link: "https://www.github.com" },
      { text: "LinkedIn", link: "https://www.linkedin.com" },
      { text: "Instagram", link: "https://www.instagram.com" },
    ];

    const items = texts.map(
      ({ text, link }) => `<a href="${link}" target="_blank" rel="noopener noreferrer">${text}</a>`
    );

    const options = {
      radius: 200,
      maxSpeed: "fast",
      initSpeed: "normal",
      keep: true, // Оставляет движение после наведения
    };

    TagCloud(container, items, options);

    // Убираем события, которые блокируют клики
    const anchors = container.querySelectorAll("a");
    anchors.forEach((anchor) => {
      anchor.addEventListener("pointerdown", (e) => e.stopPropagation());
    });

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "400px",
        height: "400px",
        position: "relative",
        margin: "auto",
        fontSize: "18px",
        color: "#007bff",
      }}
    ></div>
  );
};

export default TagSphere;

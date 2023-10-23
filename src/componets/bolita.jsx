import { useState, useEffect } from "react";

const Bolita = ({ following }) => {
  const [postion, setPosition] = useState({ x: 0, y: 0 });
  const { x, y } = postion;

  useEffect(() => {
    if (following) document.addEventListener("pointermove", startFollowing);

    return stopFollowing;
  }, [following]);

  const startFollowing = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const stopFollowing = () => {
    document.removeEventListener("pointermove", startFollowing);
  };
  if (!following) return null;

  return (
    <div
      className={`w-[50px] h-[50px] bg-sky-600 rounded-full absolute top-0 left-0 `}
      style={{
        transform: `translate(${x - 25}px, ${y - 25}px)`,
      }}
    ></div>
  );
};

export default Bolita;

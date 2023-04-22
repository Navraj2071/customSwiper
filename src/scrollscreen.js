import { useState, useEffect, useRef } from "react";
import "./scroll.css";
import { debounce } from "lodash";

const Scrollscreen = () => {
  const currentChild = useRef(1);
  const isScrolling = useRef(true);
  const isInside = useRef(true);

  const [childInView, setChildInView] = useState(1);

  const parentref = useRef();

  const handleScroll = () => {
    if (
      parentref.current.getBoundingClientRect().top < 0 &&
      parentref.current.getBoundingClientRect().bottom > 0 &&
      currentChild.current < 5 &&
      isInside.current
    ) {
      parentref.current.scrollIntoView();
      if (isScrolling.current) {
        currentChild.current = currentChild.current + 1;
        setChildInView((prev) => prev + 1);
        isScrolling.current = false;
        setTimeout(() => {
          isScrolling.current = true;
        }, 500);
      }
      if (currentChild.current > 5) {
        isInside.current = false;
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={parentref}
      style={{
        background: "white",
        height: "100vh",
        width: "100%",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {childInView}

      {childInView < 4 ? "Yes" : "No"}

      <div
        style={{
          height: "50vh",
          width: "50%",
          position: "relative",
          border: "1px solid black",
        }}
      >
        <div
          style={{
            height: "50vh",
            width: "100%",
            background: "red",
            position: "absolute",
            animation:
              childInView === 1
                ? "scrollUp 0.5s forwards"
                : "scrollAway 0.5s forwards",
          }}
        />
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "blue",
            position: "absolute",
            animation:
              childInView === 2
                ? "scrollUp 0.5s forwards"
                : "scrollAway 0.5s forwards",
          }}
        />
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "green",
            position: "absolute",
            animation:
              childInView === 3
                ? "scrollUp 0.5s forwards"
                : "scrollAway 0.5s forwards",
          }}
        />
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "yellow",
            position: "absolute",

            animation:
              childInView > 3
                ? "scrollUp 0.5s forwards"
                : "scrollAway 0.5s forwards",
          }}
        />

        <div
          style={{
            border: "1px solid white",
            borderRadius: "5px",
            padding: "10px",
            position: "absolute",
            top: "50%",
            right: "0px",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              border: "1px solid black",
              borderRadius: "20px",
              background: childInView === 1 ? "white" : "transparent",
            }}
          ></div>
          <div
            style={{
              width: "20px",
              height: "20px",
              border: "1px solid black",
              borderRadius: "20px",
              background: childInView === 2 ? "white" : "transparent",
            }}
          ></div>
          <div
            style={{
              width: "20px",
              height: "20px",
              border: "1px solid black",
              borderRadius: "20px",
              background: childInView === 3 ? "white" : "transparent",
            }}
          ></div>
          <div
            style={{
              width: "20px",
              height: "20px",
              border: "1px solid black",
              borderRadius: "20px",
              background: childInView > 3 ? "white" : "transparent",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Scrollscreen;

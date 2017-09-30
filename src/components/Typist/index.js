import Typist from "react-typist";
import "./index.scss";

export default ({ children, className, delay = 40, ...other }) => {
  const cursor = {
    show: true,
    blink: true,
    element: "_",
    hideWhenDone: false
  };

  return (
    <Typist
      className={className}
      avgTypingDelay={delay}
      cursor={cursor}
      {...other}
    >
      {children}
    </Typist>
  );
};

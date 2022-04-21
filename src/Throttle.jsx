import React from "react";

const makeThrottled = (func, time) => {
  let inThrottle, timer, lastTime;
  return function () {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (Date.now() - lastTime >= time) {
          func.apply(context, args);
          lastTime = Date.now();
        }
      });
    }
  };
};

const ThrottledButton = (props) => {
  const { time = 2000 } = props;

  const [value, setValue] = React.useState(0);

  const incrementValue = React.useMemo(
    () => makeThrottled(() => setValue((value) => value + 1), time),
    [time]
  );

  return (
    <div>
      <button onClick={incrementValue}>Throttled Button {time}s</button>
      <p>{value}</p>
    </div>
  );
};

export default ThrottledButton;

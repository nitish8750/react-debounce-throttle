import React from "react";

const makeDebounced = (fn, time) => {
  let timer;
  return function (...args) {
    let self = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(self, args);
    }, time);
  };
};

const DebouncedButton = (props) => {
  const { time = 1000 } = props;

  const [value, setValue] = React.useState(0);

  const incrementValue = React.useMemo(
    () => makeDebounced(() => setValue((value) => value + 1), time),
    [time]
  );

  return (
    <div>
      <button onClick={incrementValue}>Debounce Button {time}s</button>
      <p>{value}</p>
    </div>
  );
};

export default DebouncedButton;

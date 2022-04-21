import DebouncedButton from "./Debounce";
import ThrottledButton from "./Throttle";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <DebouncedButton />
      <ThrottledButton />
    </div>
  );
}

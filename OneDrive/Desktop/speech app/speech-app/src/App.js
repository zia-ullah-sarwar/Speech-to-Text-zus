import { useState } from "react";
import "./index.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

const App = () => {
  const [textCopy, setTextCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textCopy, {
    successDuration: 1000,
  });

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-PK" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="container">
      <h2>Speech to text Convertor.</h2>

      <div className="main-container" onClick={() => setTextCopy(transcript)}>
        {transcript}
      </div>
      <div className="btn-style">
        <button onClick={setCopied}>
          {isCopied ? "Copied!" : "Copy to clipboard"}
        </button>
        <button onClick={startListening}>▶</button>
        <button onClick={SpeechRecognition.stopListening}>⏸ </button>
      </div>
    </div>
  );
};

export default App;

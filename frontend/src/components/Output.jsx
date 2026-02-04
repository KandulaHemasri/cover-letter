export default function Output({ text }) {
  const copy = () => navigator.clipboard.writeText(text);

  return (
    <div className="output">
      <pre>{text}</pre>
      <button onClick={copy}>Copy to Clipboard</button>
    </div>
  );
}


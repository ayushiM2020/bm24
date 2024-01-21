import { useState } from "react";
const { Configuration, OpenAI } = require("openai");

const ChatbotApp = () => {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const bulletPoints = apiResponse.split(/\d+\.\s+/);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            "Things to do in " + prompt + "in " + numberInput + " hours.",
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(result);

    setApiResponse(result.choices[0].message.content);

    setLoading(false);
    console.log("Text input:", prompt);
    console.log("Number input:", numberInput);
    setPrompt("");
    setNumberInput(0);
  };

  const [numberInput, setNumberInput] = useState(0);

  const handleTextInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    setNumberInput(Number(event.target.value));
  };

  return (
    <>
      <div className="explore">
        <h1>ExploreEase</h1>
        <div className="input-container">
          <label for="username">Enter City:</label>

          <input
            type="text"
            value={prompt}
            onChange={handleTextInputChange}
            className="input-box"
            placeholder="City, State"
          />
          <label for="username">Enter Time(hrs):</label>

          <input
            type="number"
            value={numberInput}
            onChange={handleNumberInputChange}
            className="input-box"
            placeholder="Enter number"
            min="0"
            max="24"
          />
          <button
            disabled={loading || prompt.length === 0}
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
          {apiResponse && (
            <div className="response">
              {bulletPoints.map((point, index) => (
                <p key={index}>{point}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: '100vh',
        }}
      >
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={prompt}
            placeholder="Please ask to openai"
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <button
            disabled={loading || prompt.length === 0}
            type="submit"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </form>
      </div>
      {apiResponse && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <pre>
            <strong>API response:</strong>
            {apiResponse}
          </pre>
        </div>
      )} */}
    </>
  );
};

export default ChatbotApp;

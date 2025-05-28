import { useState } from 'react'

export const LandingPrompt = () => {
  const [textValue, setTextValue] = useState('')

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
  }

  const onSubmit = () => {
    console.log(textValue)
  }

  return (
    <div className="landing-prompt">
      <h2>Where do you want to go?</h2>
      <div>
        <textarea
          placeholder="Enter your destination"
          value={textValue}
          onChange={onTextChange}
        />
        <button onClick={onSubmit}>Go</button>
      </div>
    </div>
  );
};

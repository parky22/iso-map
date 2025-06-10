import { useState } from 'react'

export const LandingPrompt = () => {
  const [textValue, setTextValue] = useState('')

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(textValue)
  }

  return (
    <form className="landing-prompt" onSubmit={onSubmit}>
      <label htmlFor="prompt">Where do you want to go?</label>
      <div>
        <textarea
          id="prompt"
          name="prompt"
          rows={10}
          cols={20}
          placeholder="It's a beautiful day in the neighborhood..."
          value={textValue}
          onChange={onTextChange}
        />
        <button>Go</button>
      </div>
    </form>
  );
};

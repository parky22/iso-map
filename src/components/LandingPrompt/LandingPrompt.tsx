import { useState } from 'react'

import styles from './LandingPrompt.module.css'

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
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="prompt" className={styles.label}>Where do you want to go?</label>
      <textarea
        className={styles.textarea}
        id="prompt"
        name="prompt"
        rows={10}
        cols={20}
        placeholder="It's a beautiful day in the neighborhood..."
        value={textValue}
        onChange={onTextChange}
      />
      <button className={styles.button}>Go</button>
    </form>
  );
};

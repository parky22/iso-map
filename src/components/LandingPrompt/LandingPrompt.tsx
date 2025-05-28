export const LandingPrompt = () => {
  return (
    <div className="landing-prompt">
      <h2>Where do you want to go?</h2>
      <div>
        <textarea placeholder="Enter your destination" />
        <button>Go</button>
      </div>
    </div>
  );
};

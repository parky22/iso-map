import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { LandingPrompt } from './LandingPrompt'

describe('LandingPrompt', () => {
  it('shows the input text in the prompt textarea', async () => {{
    const user = userEvent.setup();
    render(<LandingPrompt />);

    const promptTextarea = screen.getByRole('textbox', { name: 'Where do you want to go?' });
    await user.type(promptTextarea, 'I want to go to the closest park.');

    expect(screen.getByText('I want to go to the closest park.')).toBeVisible(); 
  }});
});

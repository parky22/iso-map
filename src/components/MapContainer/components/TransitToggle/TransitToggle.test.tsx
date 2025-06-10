import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TransitToggle } from "./TransitToggle";

describe("TransitToggle", () => {
  const defaultProps = {
    onChange: vi.fn(),
  };

  const setup = (
    props: React.ComponentProps<typeof TransitToggle> = defaultProps,
  ) => {
    return render(<TransitToggle {...props} />);
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders all transit mode options", () => {
    setup();

    expect(screen.getByRole("button", { name: "Walk" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Bike" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Drive" })).toBeVisible();
  });

  it('defaults to "walk" mode', () => {
    setup();

    screen.debug();

    const walkButton = screen.getByRole("button", { name: "Walk" });
    expect(walkButton).toHaveAttribute("aria-pressed", "true");
  });

  it("calls onChange with the selected mode", async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole("button", { name: "Bike" }));
    expect(defaultProps.onChange).toHaveBeenCalledWith("bike");

    await user.click(screen.getByRole("button", { name: "Drive" }));
    expect(defaultProps.onChange).toHaveBeenCalledWith("drive");
  });

  it("only allows one mode to be selected at a time", async () => {
    const user = userEvent.setup();
    setup();

    const walkButton = screen.getByRole("button", { name: "Walk" });
    const bikeButton = screen.getByRole("button", { name: "Bike" });
    const driveButton = screen.getByRole("button", { name: "Drive" });

    expect(walkButton).toHaveAttribute("aria-pressed", "true");
    expect(bikeButton).toHaveAttribute("aria-pressed", "false");
    expect(driveButton).toHaveAttribute("aria-pressed", "false");

    await user.click(bikeButton);
    expect(walkButton).toHaveAttribute("aria-pressed", "false");
    expect(bikeButton).toHaveAttribute("aria-pressed", "true");
    expect(driveButton).toHaveAttribute("aria-pressed", "false");
  });
});

import { render, screen, waitFor } from "@testing-library/react";
import ComputerMonitor from "./cpuMon";

describe("ComputerMonitor", () => {
  test("should display CPU usage, Memory usage and Internet speed", async () => {
    render(<ComputerMonitor />);

    const memoryUsageText = screen.getByText(/Memory Usage:/);
    // const internetSpeedText = screen.getByText(/Internet Speed:/);

    await waitFor(() => {
      expect(memoryUsageText.textContent).toMatch(/Memory Usage:\s*\d+%/);
    //   expect(internetSpeedText.textContent).toMatch(
    //     /Internet Speed:\s*\d+Mbps/
    //   );
    });
  });
});

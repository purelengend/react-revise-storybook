import { render } from "@testing-library/react";

import Sidebar from "..";

describe("Sidebar test cases", () => {
  it("should render correctly", () => {
    const { container } = render(<Sidebar />);
    expect(container).toMatchSnapshot();
  });
});

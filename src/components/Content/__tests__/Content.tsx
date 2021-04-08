import { render } from "@testing-library/react";

import Content from "../Content";

describe("Content", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(<Content>test</Content>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

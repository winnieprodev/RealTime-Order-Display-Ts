import { render } from "@testing-library/react";

import Products from "../Products";

describe("Products", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot for basic use", () => {
      const { container } = render(
        <Products>
          Test
        </Products>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

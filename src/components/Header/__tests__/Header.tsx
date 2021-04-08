import { render } from "@testing-library/react";

import Header from "../Header";

describe("Header", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot for basic use", () => {
      const { container } = render(
        <Header>
          <Header.AlignLeft>Aligned to the left</Header.AlignLeft>
          <Header.AlignRight>Aligned to the right</Header.AlignRight>
        </Header>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

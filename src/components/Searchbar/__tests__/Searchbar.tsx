import { render } from "@testing-library/react";

import Searchbar from "../Searchbar";

describe("Searchbar", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <Searchbar value="1" onChange={jest.fn()} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

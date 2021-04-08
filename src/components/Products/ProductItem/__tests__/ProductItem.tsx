import { render } from "@testing-library/react";

import ProductItem from "../ProductItem";

describe("ProductItem", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <ProductItem info={{src: 'src', title: 'Song name', price: '$5.00' }} onClick={jest.fn()}></ProductItem>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

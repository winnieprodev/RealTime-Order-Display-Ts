import { createRoute } from "../routeUtils";

describe("routeUtils", () => {
  describe("createRoute", () => {
    test("basic usage", () => {
      const route = createRoute<{}>("a");

      expect(route.use()).toBe("a");
    });
    test("generates proper route for param when not used", () => {
      const route = createRoute<{}>("a/:param?");

      expect(route.use()).toBe("a/");
    });
    test("generates proper route for param", () => {
      const route = createRoute<{ param: string }>("a/:param?");

      expect(route.use({ param: "test" })).toBe("a/test");
    });
    test("generates proper route for multiple params", () => {
      const route = createRoute<{ param1: string; param2?: string }>(
        "a/:param1/:param2?"
      );

      expect(route.use({ param1: "test" })).toBe("a/test/");
      expect(route.use({ param1: "test", param2: "ok" })).toBe("a/test/ok");
    });
  });
});

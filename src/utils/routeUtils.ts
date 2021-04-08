export const createRoute = <T = {}>(route: string) => ({
  route,
  use: (params?: T) => {
    let digestedRoute = route;
    if (params !== undefined) {
      digestedRoute = Object.entries(params).reduce((acc, [key, value]) => {
        return acc.replace(new RegExp(`:${key}\\??`), value);
      }, route);
    }
    return digestedRoute.replace(/:\w+\??/, "");
  },
});

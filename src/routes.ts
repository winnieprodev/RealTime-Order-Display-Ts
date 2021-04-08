import { createRoute } from "utils/routeUtils";

export interface SearchParams {
  value?: string;
}

const ROUTES = {
  ORDERLIST: createRoute("/"),
};

export default ROUTES;

import React from "react";
import {
  cleanup,
  getAllByTestId,
  render,
  screen,
} from "@testing-library/react";

import Router from "./Router";
import { RouteUtil } from "./util/RouteUtil";

afterEach(cleanup);

it("Should have the correct amount of BottomNavigationActions", () => {
  render(<Router />);

  const bottomActions = screen.getAllByTestId("action-button");

  expect(bottomActions.length).toBe(
    RouteUtil.getBottomNavigationActions().length
  );
});

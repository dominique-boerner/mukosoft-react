import React from "react";
import Home from "../../home/Home";
import Medications from "../../medications/Medications";
import Cookbook from "../../cookbook/Cookbook";
import Community from "../../community/Community";
import { Route } from "../models/Route";
import { BottomNavigationAction } from "../models/BottomNavigationAction";
import { ReactComponent as HomeIcon } from "../../../assets/icons/uicons-regular-rounded/svg/fi-rr-home.svg";
import { ReactComponent as MedicationIcon } from "../../../assets/icons/uicons-regular-rounded/svg/fi-rr-medicine.svg";
import { ReactComponent as CookbookIcon } from "../../../assets/icons/uicons-regular-rounded/svg/fi-rr-carrot.svg";
import { ReactComponent as CommunityIcon } from "../../../assets/icons/uicons-regular-rounded/svg/fi-rr-following.svg";

const BOTTOM_NAVIGATION_ACTION_ICON_CLASS = "bottom-navigation-action-icon";

const homeIconElement = React.createElement(HomeIcon, {
  className: BOTTOM_NAVIGATION_ACTION_ICON_CLASS,
});
const medicationIconElement = React.createElement(MedicationIcon, {
  className: BOTTOM_NAVIGATION_ACTION_ICON_CLASS,
});
const cookbookIconElement = React.createElement(CookbookIcon, {
  className: BOTTOM_NAVIGATION_ACTION_ICON_CLASS,
});
const communityIconElement = React.createElement(CommunityIcon, {
  className: BOTTOM_NAVIGATION_ACTION_ICON_CLASS,
});

/**
 * Utility class for getting routes and navigation specific information.
 * @author Dominique Börner
 */
export class RouteUtil {
  static ROUTES = {
    HOME: "/",
    MEDICATIONS: "/medications",
    COOKBOOK: "/cookbook",
    COMMUNITY: "/community",
  };

  /**
   * Returns the routes of the application.
   * @return {Route[]}
   */
  static getRoutes(): Route[] {
    return [
      { path: RouteUtil.ROUTES.HOME, element: React.createElement(Home) },
      {
        path: RouteUtil.ROUTES.MEDICATIONS,
        element: React.createElement(Medications),
      },
      {
        path: RouteUtil.ROUTES.COOKBOOK,
        element: React.createElement(Cookbook),
      },
      {
        path: RouteUtil.ROUTES.COMMUNITY,
        element: React.createElement(Community),
      },
    ];
  }

  /**
   * Returns the actions for the bottom navigation.
   * @return {BottomNavigationAction[]}
   */
  static getBottomNavigationActions(): BottomNavigationAction[] {
    return [
      {
        to: RouteUtil.ROUTES.HOME,
        icon: homeIconElement,
      },
      {
        to: RouteUtil.ROUTES.MEDICATIONS,
        icon: medicationIconElement,
      },
      {
        to: RouteUtil.ROUTES.COOKBOOK,
        icon: cookbookIconElement,
      },
      {
        to: RouteUtil.ROUTES.COMMUNITY,
        icon: communityIconElement,
      },
    ];
  }
}

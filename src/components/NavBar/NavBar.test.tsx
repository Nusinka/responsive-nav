import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import NavBar from "./NavBar";
import { USER_NAME } from "../../constants";
import { navItems } from "./navItems";

// Mock components
vi.mock("../NavItem/NavItem", () => ({
  __esModule: true,
  default: (props) => (
    <li {...props} data-testid="nav-item">
      {props.name}
    </li>
  ),
}));
vi.mock("../NavList/NavList", () => ({
  __esModule: true,
  default: ({ children, withGap }) => (
    <ul data-testid="nav-list" className={withGap ? "withGap" : ""}>
      {children}
    </ul>
  ),
}));
vi.mock("../ActionMenu/ActionMenu", () => ({
  __esModule: true,
  default: () => <div data-testid="user-menu">User Menu</div>,
}));
vi.mock("../Logo/Logo", () => ({
  __esModule: true,
  default: () => <div data-testid="logo">Logo</div>,
}));
vi.mock("../MobileMenu/MobileMenu", () => ({
  __esModule: true,
  default: ({ isOpen, toggleOpen }) => (
    <button data-testid="mobile-menu" onClick={toggleOpen}>
      {isOpen ? "Close Menu" : "Open Menu"}
    </button>
  ),
}));

describe("NavBar Component", () => {
  it("renders desktop navbar elements when not in mobile mode", () => {
    render(<NavBar isMobile={false} />);

    // Check for desktop elements
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    navItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
    expect(screen.getByTestId("user-menu")).toBeInTheDocument();
  });

  it("renders mobile navbar elements when in mobile mode", () => {
    render(<NavBar isMobile={true} />);

    // Check for mobile elements
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();
  });

  it("toggles mobile menu visibility", () => {
    render(<NavBar isMobile={true} />);

    // Initial state - menu closed
    expect(screen.queryByText(USER_NAME)).not.toBeInTheDocument();

    // Open menu
    fireEvent.click(screen.getByText("Open Menu"));
    expect(screen.getByText(USER_NAME)).toBeInTheDocument();

    // Close menu
    fireEvent.click(screen.getByText("Close Menu"));
    expect(screen.queryByText(USER_NAME)).not.toBeInTheDocument();
  });
});

/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router";

describe("router tests", () => {
  test("Settings page", () => {
    pushToHistory("settings");
    expect(history.state).toStrictEqual({ page: "settings" });
    expect(history.length).toBe(2);
  });

  test("Entry page", () => {
    pushToHistory("entry", 3);
    expect(history.state).toStrictEqual({ page: "entry3" });
    expect(history.length).toBe(3);
  });

  test("Home page", () => {
    pushToHistory("");
    expect(history.state).toStrictEqual({});
    expect(history.length).toBe(4);
  });
});

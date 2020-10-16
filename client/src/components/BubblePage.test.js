import React from "react";
import { cleanup, render, screen, wait } from "@testing-library/react";
import { BubblePage } from "./BubblePage";
import mockedAxios from "axios";
import * as mockFetchBubbles from "./BubblePage";
jest.mock("./BubblePage");
jest.mock("react-router-dom", () => ({
  useParams: jest.fn().mockReturnValue({ id: "3" }),
}));

afterEach(cleanup);

test("Fetches data and renders the bubbles", async () => {
  const data = {
    data: [(id: 1)],
  };
  // mockFetchBubbles.mockResolvedValueOnce(mockFetchBubbles);
  const url = "http://localhost:5000/api/colors";
  const { getByText } = render(<BubblePage url={url} />);

  await wait(() => {
    getByText(/aquamarine/i);
  });

  // render(<BubblePage />);
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UrlInput from "../components/UrlInput";
import { shortenUrl } from "../services/Api";

jest.mock("../services/Api", () => ({
  shortenUrl: jest.fn(),
}));

const mockStore = configureStore([]);
const setup = (storeState = {}) => {
  const store = mockStore(storeState);
  return render(
    <Provider store={store}>
      <UrlInput />
    </Provider>
  );
};

describe("UrlInput Component", () => {
  test("입력 필드와 버튼이 정상적으로 렌더링되는지", () => {
    setup();
    expect(
      screen.getByPlaceholderText("URL을 입력하세요.")
    ).toBeInTheDocument();
    expect(screen.getByText("변환")).toBeInTheDocument();
  });

  test("유효한 URL 입력 시 shortenUrl API가 호출되는지", async () => {
    (shortenUrl as jest.Mock).mockResolvedValue({
      shortUrl: "https://short.ly/abc123",
    });

    setup();
    const input = screen.getByPlaceholderText(
      "URL을 입력하세요."
    ) as HTMLInputElement;
    const button = screen.getByText("변환");

    fireEvent.change(input, { target: { value: "https://example.com" } });
    fireEvent.click(button);

    expect(shortenUrl).toHaveBeenCalledWith("https://example.com");
  });

  test("http/https 없는 URL 입력 시 자동으로 https가 추가되는지", async () => {
    (shortenUrl as jest.Mock).mockResolvedValue({
      shortUrl: "https://short.ly/abc123",
    });

    setup();
    const input = screen.getByPlaceholderText(
      "URL을 입력하세요."
    ) as HTMLInputElement;
    const button = screen.getByText("변환");

    fireEvent.change(input, { target: { value: "example.com" } });
    fireEvent.click(button);

    expect(shortenUrl).toHaveBeenCalledWith("https://example.com");
  });

  test("유효하지 않은 URL 입력 시 경고 메시지가 뜨는지", async () => {
    setup();
    const input = screen.getByPlaceholderText(
      "URL을 입력하세요."
    ) as HTMLInputElement;
    const button = screen.getByText("변환");

    jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.change(input, { target: { value: "abcd" } });
    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith("url 형식이 아님.");
  });
});

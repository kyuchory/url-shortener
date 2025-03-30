import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import UrlInput from "../src/components/UrlInput"; // 실제 컴포넌트 경로 맞춰야 함
import { shortenUrl } from "../src/services/Api";

// Jest mock 함수로 API 요청을 가짜로 처리
jest.mock("../services/Api", () => ({
  shortenUrl: jest.fn(),
}));

const mockStore = configureStore([]);

describe("UrlInput Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      url: { shortenedUrl: "" },
    });
    store.dispatch = jest.fn(); // dispatch 호출을 감지할 수 있도록 설정
  });

  test("입력창이 렌더링 되는지 확인", () => {
    render(
      <Provider store={store}>
        <UrlInput />
      </Provider>
    );

    // input과 버튼이 정상적으로 렌더링 되는지 확인
    expect(
      screen.getByPlaceholderText("Url 을 입력하세요.")
    ).toBeInTheDocument();
    expect(screen.getByText("변환")).toBeInTheDocument();
  });

  test("입력한 URL이 정상적으로 입력창에 반영되는지 확인", () => {
    render(
      <Provider store={store}>
        <UrlInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText(
      "Url 을 입력하세요."
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "google.com" } });

    expect(input.value).toBe("google.com");
  });

  test("올바른 URL이면 shortenUrl을 호출하고, Redux에 저장하는지 확인", async () => {
    const mockShortUrl = "https://short.ly/abcd12";
    (shortenUrl as jest.Mock).mockResolvedValue({ shortUrl: mockShortUrl });

    render(
      <Provider store={store}>
        <UrlInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText("Url 을 입력하세요.");
    const button = screen.getByText("변환");

    fireEvent.change(input, { target: { value: "https://example.com" } });
    fireEvent.click(button);

    // shortenUrl()이 올바른 URL을 받아 호출되는지 확인
    expect(shortenUrl).toHaveBeenCalledWith("https://example.com");

    // Redux dispatch가 호출되었는지 확인
    await new Promise((r) => setTimeout(r, 0)); // 비동기 함수 대기
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "url/setShortenedUrl",
      payload: mockShortUrl,
    });
  });

  test("잘못된 URL 입력 시 alert()이 호출되는지 확인", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});

    render(
      <Provider store={store}>
        <UrlInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText("Url 을 입력하세요.");
    const button = screen.getByText("변환");

    fireEvent.change(input, { target: { value: "not_a_url" } });
    fireEvent.click(button);

    // alert()이 호출되었는지 확인
    expect(window.alert).toHaveBeenCalledWith("url 형식이 아님.");
  });
});

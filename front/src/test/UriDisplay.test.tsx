import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import UrlDisplay from "../components/UrlDisplay";

// Mock clipboard API와 window.open
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});
window.open = jest.fn();

describe("UrlDisplay Component", () => {
  test("shortenedUrl이 존재할 때, 해당 URL이 화면에 제대로 표시되는지 확인", () => {
    // Redux store에 shortenedUrl을 설정하기
    store.dispatch({ type: "url/setShortenedUrl", payload: "46a5d4" });

    render(
      <Provider store={store}>
        <UrlDisplay />
      </Provider>
    );

    // shortenedUrl이 화면에 표시되는지 확인
    expect(
      screen.getByText(
        "단축된 URL: https://port-0-url-shortener-m8wumeqa0a9a46b4.sel4.cloudtype.app/api/46a5d4"
      )
    ).toBeInTheDocument();
  });

  test("복사 버튼을 클릭했을 때, navigator.clipboard.writeText 함수가 호출되는지 테스트", () => {
    store.dispatch({ type: "url/setShortenedUrl", payload: "46a5d4" });

    render(
      <Provider store={store}>
        <UrlDisplay />
      </Provider>
    );

    const copyButton = screen.getByText("복사");
    fireEvent.click(copyButton);

    // clipboard API가 호출됐는지 확인
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      "https://port-0-url-shortener-m8wumeqa0a9a46b4.sel4.cloudtype.app/api/46a5d4"
    );
  });

  test("이동 버튼 클릭시 원래의 url로 이동 되는지 테스트", () => {
    store.dispatch({ type: "url/setShortenedUrl", payload: "46a5d4" });

    render(
      <Provider store={store}>
        <UrlDisplay />
      </Provider>
    );

    const redirectButton = screen.getByText("이동");
    fireEvent.click(redirectButton);

    // window.open이 호출됐는지 확인
    expect(window.open).toHaveBeenCalledWith(
      "https://port-0-url-shortener-m8wumeqa0a9a46b4.sel4.cloudtype.app/api/46a5d4",
      "_blank"
    );
  });

  test("리셋 버튼 클릭시 shortenedUrl 초기화 잘 되는지 테스트", () => {
    store.dispatch({ type: "url/setShortenedUrl", payload: "46a5d4" });

    render(
      <Provider store={store}>
        <UrlDisplay />
      </Provider>
    );

    const resetButton = screen.getByText("리셋");
    fireEvent.click(resetButton);

    // shortenedUrl이 리셋된 후, 화면에서 사라졌는지 확인
    expect(
      screen.queryByText(
        "단축된 URL: https://port-0-url-shortener-m8wumeqa0a9a46b4.sel4.cloudtype.app/api/46a5d4"
      )
    ).toBeNull();
  });

  test("shortened url이 존재하지 않을시 단축된 URL이 여기에 나타납니다 잘 출력 되는지 테스트", () => {
    // Redux store에서 shortenedUrl을 지운 후
    store.dispatch({ type: "url/clearShortenedUrl" });

    render(
      <Provider store={store}>
        <UrlDisplay />
      </Provider>
    );

    // shortenedUrl이 없을 때 텍스트가 보이는지 확인
    expect(
      screen.getByText("단축된 URL이 여기에 나타납니다.")
    ).toBeInTheDocument();
  });
});

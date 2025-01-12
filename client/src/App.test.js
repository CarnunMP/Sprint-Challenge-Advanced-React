import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import PlayerCard from "./components/PlayerCard";
import Axios from 'axios';

let dummyCard;
const dummyPlayer = {
  name: "Carmen Marcus-Page",
  country: "United Kingdom",
  searches: 666,
  id: 42,
}

jest.mock("axios", () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [
          { name: "Carmen Marcus-Page", country: "United Kingdom", searches: 666, id: 42}
          // How might I use this simulated response as my dummyPlayer?
        ],
      });
    },
  };
});

beforeEach(() => {
  rtl.cleanup();
  dummyCard = rtl.render(<PlayerCard player={dummyPlayer} label={"test"} />)
})

describe("App()", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe("PlayerCard", () => {
  it("can debug the output", () => {
    dummyCard.debug();
  });
  it("displays player name", () => {
    const dummyPlayer = dummyCard.queryByText(/Carmen/);
    expect(dummyPlayer).toBeInTheDocument();
  });
  it("shows searches on click", () => {
    const dummyPlayer = dummyCard.queryByText(/Carmen/);
    
    expect(dummyCard.queryByText(/Searches/)).not.toBeInTheDocument();
    rtl.fireEvent.click(dummyPlayer);
    expect(dummyCard.queryByText(/Searches/)).toBeInTheDocument();
  });
  it("hides searches on second click",() => {
    const dummyPlayer = dummyCard.queryByText(/Carmen/);

    rtl.fireEvent.click(dummyPlayer);
    expect(dummyCard.queryByText(/Searches/)).toBeInTheDocument();
    rtl.fireEvent.click(dummyPlayer);
    expect(dummyCard.queryByText(/Searches/)).not.toBeInTheDocument();
  });
})
  
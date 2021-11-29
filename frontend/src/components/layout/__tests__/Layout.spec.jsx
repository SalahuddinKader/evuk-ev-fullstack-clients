import React from "react";
import { render } from "@testing-library/react";
import { ClientContext } from "../../client-list-context";
import Layout from "..";

describe("Layout Component", () => {
  it("matches the snapshot", () => {
    const { baseElement } = render(
      <ClientContext.Provider
        value={{
          clients: [
            {
              id: 484.24217937442893,
              name: "Robert Dixon",
              email: "robert@gmail.com",
              companyName: "RD",
              streetAddress: "Ordnance Road",
              postCode: "E2 1BR",
              city: "London",
              phone: "07563542645",
              date: "2021-11-29T23:53:54.000Z",
            },
          ],
          search: "",
          searchResult: [],
          searchHandler: () => {},
          setClients: () => {},
          addClientHandler: () => {},
          retrieveClients: () => {},
          removeClientHandler: () => {},
        }}
      >
        <Layout />
      </ClientContext.Provider>
    );

    expect(baseElement).toMatchSnapshot();
  });
});

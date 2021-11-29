import React from 'react';
import { render } from '@testing-library/react';
import { ClientContext } from '../../client-list-context';
import { BrowserRouter } from 'react-router-dom';
import ClientCard from '..';

describe('ClientCard Component', () => {
  it('matches the snapshot', () => {
    const { baseElement } = render(
      <ClientContext.Provider
        value={{
          clients: [],
          search: '',
          searchResult: [],
          searchHandler: () => {},
          setClients: () => {},
          AddClientHandler: () => {},
          retrieveClients: () => {},
          removeClientHandler: () => {},
        }}
      >
        <BrowserRouter>
          <ClientCard
            client={{
              id: 527.2950507590961,
              name: 'ClientName',
              email: 'client@example.com',
              companyName: 'ABC',
              streetAddress: '20 Courtney Road',
              postCode: 'RM164TY',
              city: 'City',
              phone: '01234567890',
            }}
          />
        </BrowserRouter>
      </ClientContext.Provider>
    );
    expect(baseElement).toMatchSnapshot();
  });
});

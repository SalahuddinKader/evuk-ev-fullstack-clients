import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ClientContext } from '../../client-list-context';
import ClientList from '..';

describe('ClientList Component', () => {
  it('matches the snapshot', () => {
    const { baseElement } = render(
      <ClientContext.Provider
        value={{
          clients: [
            {
              id: 527.2950507590961,
              name: 'ClientName',
              email: 'client@example.com',
              companyName: 'ABC',
              streetAddress: '20 Courtney Road',
              postCode: 'RM164TY',
              city: 'City',
              phone: '0123456789',
            },
          ],
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
          <ClientList />
        </BrowserRouter>
      </ClientContext.Provider>
    );
    expect(baseElement).toMatchSnapshot();
  });
});

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CharacterList } from './index';

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

test('Render CharacterList Page', () => {
  const characters = [
    {
      id: '1',
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
      id: '2',
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    },
  ];

  const getCharacters = jest.fn();
  const getCharactersInfinity = jest.fn();

  const { getByText } = renderWithRouter(
    <CharacterList
      getCharacters={getCharacters}
      getCharactersInfinity={getCharactersInfinity}
      characters={characters}
      pending={false}
      initialized
    />,
  );

  characters.forEach(character => {
    expect(getByText(new RegExp(character.name, 'i'))).toBeInTheDocument();
  });
  expect(getCharacters.mock.calls.length).toBe(0);
  expect(getCharactersInfinity.mock.calls.length).toBe(0);
});

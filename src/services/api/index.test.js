import Api from '../../../src/services/api';

describe('Rick And Morty Api with Graphql', () => {
  test('getCharacters', () => {
    Api.getCharacters(1).then(response => {
      const { data: { data } } = response;
      expect(data.results).toHaveLength(20);
      expect(data.info).toHaveProperty('count');
      expect(data.info).toHaveProperty('pages');

      expect(data.results[0]).toHaveProperty('id');
      expect(data.results[0]).toHaveProperty('name');
      expect(data.results[0]).toHaveProperty('image');
    })
  });
  test('getCharacters', () => {
    Api.getCharacter(1).then(response => {
      const { data: { character, episode } } = response;
      expect(character).toHaveProperty('id');
      expect(character).toHaveProperty('name');
      expect(character).toHaveProperty('image');
      expect(character).toHaveProperty('location');

      const { location } = character;

      expect(location).toHaveProperty('planet');
      expect(location).toHaveProperty('type');

      expect(episode).toBeInstanceOf(Array);
      expect(episode.length).toBeGreaterThan(30);
    })
  })
});

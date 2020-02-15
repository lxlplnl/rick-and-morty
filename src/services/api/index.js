import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/graphql/',
});

class _Api {
  constructor(requester) {
    this.requester = requester
  }

  getCharacters = (page = 1) => {
    return this.requester({
      method: 'POST',
      data: {
        operationName: null,
        variables: {},
        query: `
        {
          characters(page: ${page}) {
            info { count, pages }
            results { id, name, image }
          }
        }`
      }
    })
  }
}

const Api = new _Api(axiosInstance);
Object.freeze(Api);

export default Api

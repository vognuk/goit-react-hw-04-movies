import queryString from 'query-string'

const queryParameters = query => {
  return queryString.parse(query);
}

export default queryParameters;

import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";


  const client = new ApolloClient({
    uri: 'https://unicapchatbot.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
      'x-hasura-admin-secret': 'EDEmOn7cBv3caqRKlUMQNpKBInUSShm2rFw17sw6VbreKXYP5xHZVZpZ4vWFuQC5'
    }
  });
  
  client
  .query({
    query: gql`
      query pQuery {
        perguntas_aluno {
          nome_aluno
          mat_aluno
          pergunta
        }
      }
    `
  })
  .then(result => console.log(result));

  export default client;
  
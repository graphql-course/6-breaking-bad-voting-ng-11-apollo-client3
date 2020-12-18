import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
  split,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const uri = 'http://localhost:5012/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('GraphQL Error', graphQLErrors);
    }

    if (networkError) {
      console.log('Network Error', networkError);
    }
  });
  const http = ApolloLink.from([errorLink, httpLink.create({ uri })]);

  // Instalar npm install @types/ws -D
  // En este caso, cuando inicializamos, comprobamos que hace correctamente la conexión
  const ws = new WebSocketLink({
    uri: `ws://localhost:5012/graphql`,
    options: {
      reconnect: true,
    },
  });

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation }: any = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    ws,
    http
  );

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

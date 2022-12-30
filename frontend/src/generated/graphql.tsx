import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  bye: Scalars['String'];
  hello: Scalars['String'];
};

export type ByeQueryVariables = Exact<{ [key: string]: never; }>;


export type ByeQuery = { __typename?: 'Query', bye: string };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };


export const ByeDocument = gql`
    query Bye {
  bye
}
    `;

export function useByeQuery(options?: Omit<Urql.UseQueryArgs<ByeQueryVariables>, 'query'>) {
  return Urql.useQuery<ByeQuery, ByeQueryVariables>({ query: ByeDocument, ...options });
};
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

export function useHelloQuery(options?: Omit<Urql.UseQueryArgs<HelloQueryVariables>, 'query'>) {
  return Urql.useQuery<HelloQuery, HelloQueryVariables>({ query: HelloDocument, ...options });
};
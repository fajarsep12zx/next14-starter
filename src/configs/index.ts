export const GRAPHQL_SERVER_HOST = `${process.env.NEXT_PUBLIC_GRAPHQL_HOST}/query`

export const graphqlDefaultOptions = {
  notifyOnNetworkStatusChange: true,
  pollInterval: 1000 * 60 * 30, // 30 Minutes
}

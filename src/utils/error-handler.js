export function errorHandler({ response: { data } }) {
  const { message } = data;
  return {
    error: message
  }
}
export const getProducts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  return data
}

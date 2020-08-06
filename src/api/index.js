export default {
  async index() {
    const res = await fetch('https://my-json-server.typicode.com/Claim-Academy-JS/characters/characters')
    return await res.json()
  }
}

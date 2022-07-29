export function checkResponse(response) {
    if (!response.errno) {
      return true;
    }
    return false;
}
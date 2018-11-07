
async function get(url, headers) {
  try {
    if(!headers) {
      let res = await fetch(url);
      return await res.json();
    }
    let init = {
      method: 'GET',
      headers: headers
    }
    let res = await fetch(url, init);
    return await res.json();
  } catch (e) {
    console.log(`error getting: ${url}`);
    console.log(e);
    return [];
  }
}

async function post(url, body, headers) {
  try {
    headers && (headers = { "Content-Type": "application/json; charset=utf-8" });
    let init = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    };
    let res = await fetch(url, init);
    return await res.json();
  } catch (e) {
    console.log(`error posting: ${url}`);
    console.log(e);
    return [];
  }
}

async function deleteReq(url, headers) {
  try {
    headers && (headers = { "Content-Type": "application/json; charset=utf-8" });
    let init = {
      method: 'DELETE',
      headers: headers
    };
    let res = await fetch(url, init);
    return await res.json();
  } catch (e) {
    console.log(`error deleting: ${url}`);
    console.log(e);
    return [];
  }
}
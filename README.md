# jakexios

Make a GET request with:

`let resultJson = await Jakexios.get(url, headers);`

this returns the JSON of the request.
`headers` param is optional.

Make a POST request using:

`let resultJson = await Jakexios.post(url, body, headers);`

this returns the JSON of the request.
`headers` param is optional.
`body` should be an object (not stringified).


Make a DELETE request using:

`let resultJson = await Jakexios.delete(url, headers);`

this returns the JSON of the request.
`headers` param is optional.
`body` should be an object (not stringified).
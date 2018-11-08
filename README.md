# jakexios

## How to install:

npm:
`npm i jakexios`

## How to import

import in browser:
`import Jakexios from 'jakexios';`

### Make a GET request with:

`let resultJson = await Jakexios.get(url, headers);`

this returns the JSON of the request.
`url` the url to make a request to.
`headers` param is optional.

### Make a POST request using:

`let resultJson = await Jakexios.post(url, body, headers);`

this returns the JSON of the request.
`url` the url to make a request to.
`headers` param is optional.
`body` should be an object (not stringified).


### Make a DELETE request using:

`let resultJson = await Jakexios.delete(url, headers);`

this returns the JSON of the request.
`url` the url to make a request to.
`headers` param is optional.

### Get a page's HTML using:

`let html = await Jakexios.getHtml(url, headers);`

this returns the HTML as a string.
`url` the url to make a request to.
`headers` param is optional.
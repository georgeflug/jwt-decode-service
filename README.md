# jwt-decode-service
A simple REST API to decode JSON Web Tokens

## Usage
Run the service with `npm start`

Make a POST request to `http://localhost:3000/jwt` with the following payload:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

This will produce output similar to the following:
```
{
    "header": {
        "alg": "HS256",
        "typ": "JWT"
    },
    "body": {
        "sub": "1234567890",
        "name": "John Doe",
        "iat": 1516239022
    },
    "issuedAt": "2018-01-18T01:30:22.000Z",
    "expiresAt": null
}
```

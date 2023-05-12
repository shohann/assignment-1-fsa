# assignment-1-fsa

## Fake person generator

`URI POST localhost:3000/api/person`

Body:

```
{
	"generatePerson": [
		"firstName", "lastName", "age", "avatar"
	]
}

```

Response:

```

{
	"firstName": "David",
	"lastName": "Lee",
	"age": 25,
	"avatar": "https://example.com/avatar7.jpg"
}

```


Body:

```
{
	"generatePerson": [
		"firstName", "lastName", "age"
	]
}

```

Response:

```

{
	"firstName": "David",
	"lastName": "Lee",
	"age": 25
}

```
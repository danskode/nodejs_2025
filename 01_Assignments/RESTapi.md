# RESTful API endpoints
Correct structure and flow for topic **planets**

| HTTP Method | Endpoint        | Description                                                                                                                                                    |
| ----------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **GET**     | `/planets`      | Retrieves a list of all planets. This is the most general endpoint and always comes first, as it deals with collections rather than individual resources.      |
| **POST**    | `/planets`      | Creates a new planet. Placed after `GET /planets` because creation of a resource is the next logical step after being able to list them.                       |
| **GET**     | `/planets/{id}` | Retrieves details of a specific planet by its unique ID. This endpoint follows after collection-level operations because it narrows down to a single resource. |
| **PUT**     | `/planets/{id}` | Replaces the entire planet resource with a new representation. Positioned here because `PUT` is the standard full-update operation for a single resource.      |
| **PATCH**   | `/planets/{id}` | Partially updates an existing planet (e.g., changing just the name or size). Comes after `PUT` since it is a more fine-grained alternative to updating.        |
| **DELETE**  | `/planets/{id}` | Deletes a specific planet. This is always placed last in RESTful design because it represents the removal of the resource, the opposite of `POST`.             |

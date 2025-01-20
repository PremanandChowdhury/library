# Media Library

Here we will have list of users where each user can have n no.of albums. On clicking to particular album all the related album thumbnails will be visible with other details.

## Project Scope

1. Fetching API's
2. Usage of RTK and RTK Query
3. Lazily fetching data from API

## Importatnt Notes:

`Problem:` When importing the createApi from reduxjstoolkit

```jsx
import { createApi, fetchBaseQuery } from "@reduxjs/toolkkit/query";

// This above import does not create the auto-generated hooks relative to the endpoints
```

`Solution:` We have to add `react` at the end of the import statement to to get the auto-generated hooks relative to the endpoints

```jsx
import { createApi, fetchBaseQuery } from "@reduxjs/toolkkit/query/react";

// This above import now creates the auto-generated hooks relative to the endpoints
```

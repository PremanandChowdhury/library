
### ABOUT REDUCERS 
We will never ever make network requests from reducers.
Reducers should always be 100% synchronous.
Reducers should only operate on their arguements - not on outside variables!

### Asynchronous API calls
We can use `Async Thunk` or `RTK Query` to fetch data via network calls
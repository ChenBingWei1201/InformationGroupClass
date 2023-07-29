# todos-app

## Development

### Install the dependencies

This will install all dependencies for the app

```sh
pnpm install_all
```

### Start React app(frontend)

```sh
pnpm frontend
```

This will run react app at port 3000

### Start database

This will have postgres and adminer running for the backend

```sh
docker-compose up -d
```

### Test Prisma(backend)

```sh
cd backend
pnpm generate
pnpm migrate
```

### Start Apollo Server(backend)

```sh
cd ..
pnpm backend
```

This will run apollo graphql playground at port 5000


you can then use adminer at port 8080, or run

```sh
cd backend
pnpm studio
```

to open up prisma studio to check whether the data is properly saved

### Problems may occur
- kill the port being stucked: `sudo kill -9 $(sudo lsof -t -i:port)`. If you want to kill port 8080, type: `sudo kill -9 $(sudo lsof -t -i:8080)`
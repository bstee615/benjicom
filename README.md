# benjicom

## Deployment

### In Windows `cmd`

- `git commit` changes & `push` to `dev`
- Merge PR on GitHub

```
ssh -i "C:\Users\bsteenhoek\.ssh\benjijang-backend-keypair.pem" ec2-user@ec2-3-210-117-232.compute-1.amazonaws.com
```

### In `ssh`

```
cd benjicom
git pull
yarn build
cd dist
sudo nohup python3 -m http.server 80
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

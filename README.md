# Ravioli

A cooking app built with Sveltekit and PocketBase

## Development

1. Install Node 20.11.1 via `mise`

```
mise install
```

2. Install `pnpm`


**Arch Linux**:

```
paru -S pnpm
```


**macOS**:

```
brew install pnpm
```


3. Install dependencies

```
pnpm install
```

4. Install Pocketbase

**Arch Linux**:

```
./bin/install-pb-linux-x64.sh
```

**macOS**:

```
# coming soon
```

5. Start Pocketbase

```
./pb_bin serve
```

6. Start the vite devlopment server

```
pnpm run dev --open
```

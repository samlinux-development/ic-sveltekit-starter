<p align="left" >
  <img width="240"  src="./src/frontend/static/icAcademy.png">
</p>

# IC SvelteKit (import.meta.env) Starter

This repository is meant to give [SvelteKit](https://kit.svelte.dev/) developers an easy on-ramp to get started with developing decentralized applications (Dapps in short) for the Internet Computer blockchain.

It is also an example for the usage of `import.meta.env` in SvelteKit in contrast to the usage of process.env in other examples.

## How does it work?
The `vite.config.ts` file contains a transformation process to generate the `import.meta.env.VITE_` environment variables from the `canisters_ids.json` file in the `.dfx` folder for the respective environment.

This folder stores the canister IDs for backend and frontend canisters for different environments such as `local, playground and ic`.

The respective `canisters_ids.json` file is used to set the `import.meta.env.VITE_` variables according to the environment so that the frontend canister can interact with the backend canister.

In `src/frontend/src/stores/ic.ts` a custom actor is created to interact with the backend canister. The actor is used in `src/frontend/src/routes/+page.svelte` to call the backend canister. In this example a Svelte `writable store` is used to store the connection to the backend call. In this way it can be easily accessed in any Svelte component.

From the `src/declarations` folder only the did files are used.

## Versions
Svelte  version:  4.2.18   
SvelteKit version: 2.5.18  
@dfinity/agent: 2.0.0   

## What is this repository for?
This repository is made for my personal use, but feel free to use it as a template for your own projects.

## Getting started

To clone and use the Github repository for your own purpose following the commands below. 

**Note** to get a clean git repository. A tool called “digit” is used. Make sure you have it installed. If you haven't installed it yet, you can do so using the following command.

```bash
npm install -g degit
```
Summary of installation steps:
1. Check needed tools
2. Install and discuss the github repository
3. Start a local Internet Computer replica
4. Deploy frontend and backend canister to local replica
5. Test the Motoko backend sayHelloTo function


```bash
mkdir myapp && cd myapp
```
```bash
npx degit https://github.com/samlinux-development/ic-sveltekit-starter
```
```bash
npm i
```
Start your local replica (make sure you have DFX already installed!)

```bash
dfx start --clean --background
```

## Deploy it locally
```bash
dfx deploy 
```

Get you frontend canister id
```bash
echo http://$(dfx canister id frontend).localhost:4943
```

Open your browser and use the following URL scheme:

- http://[canisterId].localhost:4943
- e.g. http://be2us-64aaa-aaaaa-qaabq-cai.localhost:4943

Check the sayHelloTo function with the CLI cammand below:
```bash
dfx canister call backend sayHelloTo '("Roland")'
```

## Start local development server
```bash
npm run dev 
```

## Deploying to the playground
To test your dApp under the Internet Computer's environment, you can deploy it to the Motoko Playground.

```bash
dfx deploy --playground
```
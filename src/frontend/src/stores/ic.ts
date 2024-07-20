import { writable } from "svelte/store";

// @ts-ignore
import { idlFactory } from "../../../declarations/backend/backend.did.js";
import { Actor, HttpAgent } from "@dfinity/agent";

import type { ActorSubclass } from "@dfinity/agent";
import type { _SERVICE } from "../../../declarations/backend/backend.did";

/**
 * Creates an actor for the Backend canister
 */
type OptionsType = {
  agentOptions?: import("@dfinity/agent").HttpAgentOptions;
  actorOptions?: import("@dfinity/agent").ActorConfig;
};

type ReturnType = {
  actor: import("@dfinity/agent").ActorSubclass<import("../../../declarations/backend/backend.did")._SERVICE>;
};

export function createActor(options?:OptionsType):ReturnType {
  let _host = 'http://localhost:4943';
  let hosts =['ic', 'playground'];

  if(hosts.includes(import.meta.env.VITE_DFX_NETWORK)) {
    _host = `https://${import.meta.env.VITE_BACKEND_CANISTER_ID}.ic0.app`;
  }
  
  const hostOptions = { host: _host};
  if (!options) {
    options = {
      agentOptions: hostOptions,
    };
  } else if (!options.agentOptions) {
    options.agentOptions = hostOptions;
  } else {
    options.agentOptions.host = hostOptions.host;
  }

  const agent = HttpAgent.createSync({ ...options.agentOptions });
  
  // Fetch root key for certificate validation during development
  if (import.meta.env.VITE_DFX_NETWORK !== "ic") {
    agent.fetchRootKey().catch((err) => {
      console.warn(
        "Unable to fetch root key. Check to ensure that your local replica is running"
      );
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId: import.meta.env.VITE_BACKEND_CANISTER_ID || "",
    ...options?.actorOptions,
  });
}
// create importable store for the actor
// you can import this store in any svelte component to make calls to the backend
export const ic = writable<ReturnType>({
  actor: createActor() as unknown as ActorSubclass<_SERVICE>,
});
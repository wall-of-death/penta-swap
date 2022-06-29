import { ChainParameter, chainParameters, chains } from "@/constant/chains";
import { ethers } from "ethers";
import { selector } from "recoil";
import { currentChainState, eip1193State } from "./atom";

export const providerSelector = selector<null | ethers.providers.Provider>({
  key: "provider",
  get: ({ get }) => {
    const eip1193 = get(eip1193State);
    const web3Provider = eip1193
      ? new ethers.providers.Web3Provider(eip1193)
      : null;
    return web3Provider;
  },
});

export const currentChainNameSelector = selector<chains>({
  key: "currentChainName",
  get({ get }) {
    const { chainId: currentChainId } = get(currentChainState);
    const [name] = Object.entries(chainParameters).find(
      ([, { chainId }]) => chainId === currentChainId
    ) as [chains, ChainParameter];
    return name;
  },
  set({ set }, newName) {
    typeof newName === "string" &&
      set(currentChainState, chainParameters[newName]);
  },
});
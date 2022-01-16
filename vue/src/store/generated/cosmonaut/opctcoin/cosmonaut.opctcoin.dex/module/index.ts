// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendBuyOrder } from "./types/dex/tx";
import { MsgCancelBuyOrder } from "./types/dex/tx";
import { MsgSendSellOrder } from "./types/dex/tx";
import { MsgCancelSellOrder } from "./types/dex/tx";
import { MsgSendCreatePair } from "./types/dex/tx";


const types = [
  ["/cosmonaut.opctcoin.dex.MsgSendBuyOrder", MsgSendBuyOrder],
  ["/cosmonaut.opctcoin.dex.MsgCancelBuyOrder", MsgCancelBuyOrder],
  ["/cosmonaut.opctcoin.dex.MsgSendSellOrder", MsgSendSellOrder],
  ["/cosmonaut.opctcoin.dex.MsgCancelSellOrder", MsgCancelSellOrder],
  ["/cosmonaut.opctcoin.dex.MsgSendCreatePair", MsgSendCreatePair],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgSendBuyOrder: (data: MsgSendBuyOrder): EncodeObject => ({ typeUrl: "/cosmonaut.opctcoin.dex.MsgSendBuyOrder", value: data }),
    msgCancelBuyOrder: (data: MsgCancelBuyOrder): EncodeObject => ({ typeUrl: "/cosmonaut.opctcoin.dex.MsgCancelBuyOrder", value: data }),
    msgSendSellOrder: (data: MsgSendSellOrder): EncodeObject => ({ typeUrl: "/cosmonaut.opctcoin.dex.MsgSendSellOrder", value: data }),
    msgCancelSellOrder: (data: MsgCancelSellOrder): EncodeObject => ({ typeUrl: "/cosmonaut.opctcoin.dex.MsgCancelSellOrder", value: data }),
    msgSendCreatePair: (data: MsgSendCreatePair): EncodeObject => ({ typeUrl: "/cosmonaut.opctcoin.dex.MsgSendCreatePair", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};

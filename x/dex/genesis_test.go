package dex_test

import (
	"testing"

	keepertest "github.com/cosmonaut/opctcoin/testutil/keeper"
	"github.com/cosmonaut/opctcoin/x/dex"
	"github.com/cosmonaut/opctcoin/x/dex/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		PortId: types.PortID,
		SellOrderBookList: []types.SellOrderBook{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		BuyOrderBookList: []types.BuyOrderBook{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		DenomTraceList: []types.DenomTrace{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DexKeeper(t)
	dex.InitGenesis(ctx, *k, genesisState)
	got := dex.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Equal(t, genesisState.PortId, got.PortId)
	require.Len(t, got.SellOrderBookList, len(genesisState.SellOrderBookList))
	require.Subset(t, genesisState.SellOrderBookList, got.SellOrderBookList)
	require.Len(t, got.BuyOrderBookList, len(genesisState.BuyOrderBookList))
	require.Subset(t, genesisState.BuyOrderBookList, got.BuyOrderBookList)
	require.Len(t, got.DenomTraceList, len(genesisState.DenomTraceList))
	require.Subset(t, genesisState.DenomTraceList, got.DenomTraceList)
	// this line is used by starport scaffolding # genesis/test/assert
}

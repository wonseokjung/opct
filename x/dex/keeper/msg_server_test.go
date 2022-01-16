package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/cosmonaut/opctcoin/testutil/keeper"
	"github.com/cosmonaut/opctcoin/x/dex/keeper"
	"github.com/cosmonaut/opctcoin/x/dex/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.DexKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}

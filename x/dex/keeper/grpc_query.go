package keeper

import (
	"github.com/cosmonaut/opctcoin/x/dex/types"
)

var _ types.QueryServer = Keeper{}

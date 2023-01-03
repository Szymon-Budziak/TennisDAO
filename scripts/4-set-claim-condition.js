import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x5b1D6bC3032225132d1980cB8c87Ec14742b6dA6", "edition-drop");

    const claimConditions = [
      {
        startTime: new Date(),
        maxClaimable: 50_000,
        price: 0,
        maxClaimablePerWallet: 1,
        waitInSeconds: MaxUint256,
      },
    ];

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();

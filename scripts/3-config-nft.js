import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x5b1D6bC3032225132d1980cB8c87Ec14742b6dA6", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Tennis Ball",
        description: "This NFT will give you access to TennisDAO.",
        image: readFileSync("scripts/assets/tennis.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

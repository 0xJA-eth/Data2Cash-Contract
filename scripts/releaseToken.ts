import dotenv from "dotenv"
import hre from "hardhat";
import deployDataSwap from "../deploy/deployDataSwap";
import buyData from "../deploy/buyData";
import releaseToken from "../deploy/releaseToken";

dotenv.config();

releaseToken(hre).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

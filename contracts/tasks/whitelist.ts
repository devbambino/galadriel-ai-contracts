// Define the task with the name 'whitelist-address'
export const whitelistTask = task("whitelist", "Whitelists an address in the Oracle contract")
  .addParam("oracleAddress", "The address of the Oracle contract")
  .addParam("whitelistAddress", "The address to whitelist")
  .setAction(async (taskArgs, hre) => {
    const oracleContractAddress = taskArgs.oracleAddress;
    const whitelistAddress = taskArgs.whitelistAddress;
    const attestation = "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"


    const contractABI = [
      "function updateWhitelist(address _addressToWhitelist, bool isWhitelisted)",
      "function addAttestation(string memory attestation)"
    ];

    const [signer] = await hre.ethers.getSigners();
    const contract = new hre.ethers.Contract(oracleContractAddress, contractABI, signer);

    console.log(`Whitelisting address: "${whitelistAddress}"...`);
    const updateTx = await contract.updateWhitelist(whitelistAddress, true);
    await updateTx.wait();
    console.log(`Address whitelisted: "${whitelistAddress}"`);

    // Add attestation
    console.log(`Adding attestation for: "${whitelistAddress}"...`);
    const attestationTx = await contract.addAttestation(attestation);
    await attestationTx.wait();
    console.log(`Attestation added for: "${whitelistAddress}"`);
  });

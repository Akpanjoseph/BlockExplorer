import { useState } from "react";

import loader from '../img/loader2.gif'

export const ERC721Checker = ({ bunzz, userAddress }) => {

  // state
  const [tokenId, setTokenId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [onGoing, setOnGoing] = useState(false);



  // function to search image on ipfs account
  const submit = async () => {
    setOnGoing(true);
    try {
      const contract = await bunzz.getContract("NFT (IPFS Mintable)");
      const { data: tokenUri } = await contract.tokenURI(tokenId);
      const url = tokenUri.replace(/^ipfs:\/\//, "https://ipfs.io/ipfs/");
      const res = await fetch(url);
      const data = await res.json();
      setName(data.name);
      setDescription(data.description);
      setImage(data.image.replace(/^ipfs:\/\//, "https://ipfs.io/ipfs/"));
    } catch (err) {
      console.error(err);
    } finally {
      setOnGoing(false);
    }
  };


  // Nft get image getter
  return (
    <div id="minte-section">

      {/* insturction text */}
      <p className="title">Get your minted NFT</p>

      {/* nft ipfs tokrn id */}

      <div id="image-text">
      <span>Enter your minted nft name*</span>
        <input
          placeholder="token ID"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
          type="text"
        />
      </div>


      {onGoing ? (
        // loader
        <div className="loader-image">
        <img src={loader} alt="" width='10%' height='30px' />
        minting ....
      </div>
      ) : (
        <button onClick={submit}>Get</button>
      )}

      {/* display info */}

      {/* image name */}
      {name ? <p>Name: {name}</p> : <></>}

      {/* image description */}
      {description ? <p>Description: {description}</p> : <></>}

      {/* image */}
      {image ? <img src={image} alt="image" className="image" /> : <></>}
    </div>
  );
};

import { useState } from "react";
import { NFTStorage, File } from "nft.storage";

import loader from '../img/loader2.gif'


// ipf config setup
const nftStorage = new NFTStorage({
  token: process.env.REACT_APP_NFT_STORAGE_KEY,
});


// function to connect to ipf storage
const store = async (name, description, data, fileName, type) => {
  const metadata = await nftStorage.store({
    name,
    description,
    image: new File([data], fileName, { type }),
  });
  console.log(metadata);
  return metadata;
};


export const ERC721Minter = ({ bunzz, userAddress }) => {

  // state manager
  const [blob, setBlob] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [base64, setBase64] = useState(null);
  const [onGoing, setOnGoing] = useState(false);
  const [tokenId, setTokenId] = useState(null);
  const [type, setType] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");



  // funtion that determin file type
  const select = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      readAsBlob(file);
      readAsBase64(file);
      setType(file.type);
      setFileName(file.name);
    }
  };

  // function to read file is it in blob formate
  const readAsBlob = (file) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      console.log(reader.result);
      setBlob(reader.result);
    };
  };


  // funtion to read Base64 type image
  const readAsBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      setBase64(reader.result);
    };
  };



  // function to submit to ipfs
  const submit = async () => {
    setOnGoing(true);
    try {
      const metadata = await store(name, description, blob, fileName, type);
      const contract = await bunzz.getContract("NFT (IPFS Mintable)");
      const inputUrl = metadata.url.replace(/^ipfs:\/\//, "");

      const tx = await contract.safeMint(userAddress, inputUrl);
      const receipt = await tx.wait();
      console.log(receipt);

      const event = receipt.events[0];
      const _tokenId = event.args[2];
      setTokenId(_tokenId);
      setBase64(null);
      window.alert("Succeeded to mint");
    } catch (err) {
      console.error(err);
    } finally {
      setOnGoing(false);
    }
  };


  // Nft minter function

  return (
    <div id="minte-section">

      {/* mint intruction */}
      <p className="title">
        Create your own nft
      </p>


      {/* selected image name */}
      
      <div id="image-text">
      <span>Give your ntf a name*</span>
      <input
        placeholder="Nft Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text" required
      />
      </div>


      {/* image selector */}

      <div id="image-text" >
      <span>Select Image*</span>
      <input type="file" accept="image/*" onChange={select} id='selector'/> 
      </div>

      <div className="image">
        {base64 ? (
          <img src={base64} alt="hoge" />
        ) : (
          <></>
        )}
      </div>

      {/* text discription about the image */}
      <div id='image-text'>
      <span>Image Decription*</span>
      <textarea id="desc"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text" required
      />
      </div>


      {/* loader  */}
      {onGoing ? (
        <div className="loader-image">
          <img src={loader} alt="" width='10%' height='30px' />
          minting ....
        </div>
      ) : (


        // mint button
        <button onClick={submit}>
          MINT
        </button>
      )}
      {tokenId ? <p>token ID: {tokenId}</p> : <></>}


    </div>
  );
};

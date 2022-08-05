import React, { useState, useEffect } from "react";

import { UserAuth } from "../../../context/AuthContext";
import { useLocation } from "react-router-dom";

const CreateUserImg = () => {
  const { user } = UserAuth();
  const { upload } = UserAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  );
  const [error, setError] = useState("");
  const location = useLocation();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await upload(photo, user, setLoading, setPhotoURL);
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   const fileRef = ref(storage, currentUser.uid + ".png");
  //   try {
  //     setLoading(true);
  //     setPhotoURL(await getDownloadURL(fileRef));
  //     await upload(user, photoURL);
  //     setLoading(false);
  //     console.log("File Uploaded!");
  //   } catch (e) {
  //     setError(e.message);
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (user.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  return (
    <div>
      <div className="flex justify-center">
        <img
          src={photoURL}
          alt="Avatar "
          className="align-middle rounded-full border-2 border-gray-200 border-solid w-28"
        />
      </div>
      {user.photoURL && location.pathname === "/account" ? (
        <></>
      ) : (
        <div className="flex justify-center mt-3">
          <div className="flex justify-center mt-2 border bg-gray-200 hover:bg-gray-100 ">
            <input type="file" id="upload" hidden onChange={handleChange} />
            <label
              className="w-full font-medium cursor-pointer p-2"
              htmlFor="upload"
            >
              Choose Image
            </label>
          </div>
          <div className="flex justify-center mt-2 border ml-5 bg-gray-200 hover:bg-gray-100 ">
            <button
              className="w-full font-medium cursor-pointer p-2"
              disabled={loading || !photo}
              onClick={handleClick}
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { CreateUserImg };

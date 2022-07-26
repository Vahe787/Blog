import React, { useState, useEffect } from "react";

import { UserAuth } from "../../context/AuthContext";

const CreateUserImg = () => {
  const { user } = UserAuth();
  const { upload } = UserAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  );

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleClick = () => {
    upload(photo, user, setLoading, setPhotoURL);
  };

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
          className="align-middle rounded-full border-2 border-gray-400 border-solid w-28"
        />
        {/* <input type="file" id="upload" hidden onChange={handleChange} />
        <label
          className="inline-block text-gray-400 border p-3 cursor-pointer"
          for="upload"
        >
          Choose File
        </label>
        <button
          className="font-mono p-2 text-2xl text-gray-400 hover:text-gray-700 border"
          disabled={loading || !photo}
          onClick={handleClick}
        >
          Upload
        </button> */}
      </div>
    </div>
  );
};

export { CreateUserImg };

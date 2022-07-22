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
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>
        Upload
      </button>
      <img
        src={photoURL}
        alt="Avatar "
        className="align-middle rounded-full border-2 border-gray-400 border-solid w-20 h20"
      />
    </div>
  );
};

export { CreateUserImg };

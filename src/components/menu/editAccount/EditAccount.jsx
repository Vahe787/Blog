import React, { useState } from "react";
import { UserAuth } from "../../../context/AuthContext";

const EditAccount = () => {
  const { user } = UserAuth();

  return (
    <div>
      <div className="flex felx-col justify-center">
        <div>
          <img
            alt="Avatar "
            className="align-middle rounded-full border-2 border-gray-400 border-solid w-28"
            src={user.photoURL}
          />
        </div>
      </div>
      <div className=" flex justify-center items-center mt-5">
        <input
          defaultValue={user.displayName}
          className="border outline-none w-1/3"
        />
      </div>
    </div>
  );
};

export { EditAccount };

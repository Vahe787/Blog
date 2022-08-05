import React from "react";
import { UserAuth } from "../../../context/AuthContext";
import { CreateUserImg } from "../uploadAvatarImage/CreateUserImg";

const EditAccount = () => {
  const { user } = UserAuth();

  return (
    <div>
      <div className="flex felx-col justify-center">
        <div>
          <CreateUserImg />
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

import React from "react";
import { GoTrashcan } from "react-icons/go";

// Local imports
import { User } from "@/typings";
import { removeUser } from "@/store";
import useThunk from "@/hooks/useThunk";
import Button from "./Button";

interface Props {
  user: User;
}

const UsersListItem: React.FC<Props> = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleRemoveUser = () => {
    doRemoveUser(user);
  };

  return (
    <div
      key={user.id}
      className={`mb-2 border rounded mt-2 ${error && "bg-red-100"}`}
    >
      <div className="flex p-2 justify-between items-center cursor-pointer border">
        <div className="flex gap-3">
          <Button loading={isLoading} onClick={handleRemoveUser}>
            <GoTrashcan />
          </Button>
          {error ? (
            <div>
              Error deleting User <i className="underline">{user.name}</i>
            </div>
          ) : (
            user.name
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;

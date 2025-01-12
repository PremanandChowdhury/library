import React from "react";
import { GoTrashcan } from "react-icons/go";

// Local imports
import { User } from "@/typings";
import { removeUser } from "@/store";
import useThunk from "@/hooks/useThunk";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

interface Props {
  user: User;
}

const UsersListItem: React.FC<Props> = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleRemoveUser = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
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
    </>
  );

  return (
    <ExpandablePanel header={header} error={error}>
      <p>content</p>
    </ExpandablePanel>
  );
};

export default UsersListItem;

import React, { useEffect, useState } from "react";
import { deleteUser } from "../actions/userActions";
import { logoutGames } from "../actions/gamesActions";
import { logout } from "../actions/userActions";

const useConfirm = (dispatch, token, id) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [message, setMessage] = useState("");

  const handlerShowConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  const handlerConfirm = () => {
    if (confirm) {
      dispatch(
        deleteUser(
          token,
          id,
          setMessage,
          handlerShowConfirm,
          logout,
          logoutGames
        )
      );
      setConfirm(false);
    }
  };

  useEffect(() => {
    handlerConfirm();
  }, [confirm]);

  return {
    showConfirm,
    handlerShowConfirm,
    message,
    setConfirm,
  };
};

export { useConfirm };

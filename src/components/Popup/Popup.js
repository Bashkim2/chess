import { useAppContext } from "../../contexts/Context";
import "../../css/Popup.css";
import React from "react";
import { closePopup } from "../../reducer/actions/popup";
import { Status } from "../../constant";
import PromotionBox from "./PromotionBox/Promotions";

const Popup = ({children}) => {

  const { appState : {status}, dispatch } = useAppContext();

  const onClosePopup = () => {
      dispatch(closePopup())
  }

  if (status === Status.ongoing)
      return null

  return <div className="popup">
      <PromotionBox onClosePopup={onClosePopup}/>
  </div>
}

export default Popup

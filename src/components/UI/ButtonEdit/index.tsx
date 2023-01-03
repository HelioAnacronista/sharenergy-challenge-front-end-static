import { MdChangeCircle } from "react-icons/md";

function ButtonEdit() {
   return (
      <button disabled className="btn-action-style" style={{color : 'rgb(255, 187, 85)'}}>
         <MdChangeCircle size={30}></MdChangeCircle>
      </button>
   );
}

export default ButtonEdit;
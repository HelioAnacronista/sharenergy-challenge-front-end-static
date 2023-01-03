import { MdDeleteForever } from "react-icons/md";

function ButtonDelete(props : any) {

   const { ...inputProps } = props;

   return (  
      <button className="btn-action-style"   style={{color: '#FF7782', marginLeft: '20px'}} {...inputProps}>
         <MdDeleteForever size={30} ></MdDeleteForever>
      </button>
   );
}

export default ButtonDelete;
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSnowflake,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(faTrash, faSignOutAlt, faEdit, faSnowflake, faPlusCircle);
};

export default Icons;

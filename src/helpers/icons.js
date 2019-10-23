import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSnowflake,
  faPlusCircle,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSnowflake,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faUser
  );
};

export default Icons;

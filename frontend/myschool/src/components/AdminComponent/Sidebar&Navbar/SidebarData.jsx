import { RiHome3Line } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { RiBook2Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { TbCashBanknote } from "react-icons/tb";
import { TbHandStop } from "react-icons/tb";
import { RiPencilRuler2Line } from "react-icons/ri";


export const SidebarData = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <RiHome3Line/>
  },  
  {
    name: "Class",
    path: "/class",
    icon:<SiGoogleclassroom/>,
  },
  {
    name: "Subject",
    path:"/subject",
    icon: <RiBook2Line/>
  },
  {
    name: "Students",
    path:"/student",
    icon: <BsPeople/>

  },
  {
    name: "Employees",
    path:"/admin-employee",
    icon:<MdWorkOutline/>
  },
  {
    name:"Accounts",
    path:"",
    icon:<MdOutlineAccountBalanceWallet/>

  },
  {
    name:"Fees",
    path:"",
    icon:<BsCash/>

  },
  {
    name: "Salary",
    path:"",
    icon:<TbCashBanknote/>

  },
  {
    name:"Attendance",
    path:"",
    icon:<TbHandStop/>
  },
  {
    name:"Exam",
    path:"",
    icon:<RiPencilRuler2Line/>

  }
];

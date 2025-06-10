import { GoArrowUpRight } from "react-icons/go";
import servicecart1 from "../Assets/servicecart1.png";
import servicecart2 from "../Assets/servicecart2.png";
import servicecart3 from "../Assets/servicecart3.png";

export const ServiceDataCards = [
    {
        id: 1,
        head: "HOUSEKEEPING",
        title: "We aim to create a healthy and clean workplace that your employees and customers would love to be in.",
        icon: [<GoArrowUpRight />],
        image: servicecart1
    },
    {
        id: 2,
        head: "SECURITY",
        title: "In a rapidly changin1g world, it is c1rucial to stay alert to avoid the risk of threats and menaces. ",
        icon: [<GoArrowUpRight />],
        image: servicecart2
    },
    {
        id: 3,
        head: "PANTRY SERVICE",
        title: "We have the right expertise and experience in complete management of kitchen premises. ",
        icon: [<GoArrowUpRight />],
        image: servicecart3
    }
];
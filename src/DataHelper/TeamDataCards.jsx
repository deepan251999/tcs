import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaSkype } from "react-icons/fa";
import Team1 from "../Assets/team1.png";
import Team2 from "../Assets/team2.png";
import Team3 from "../Assets/team3.png";
import Team4 from "../Assets/team4.png";

export const TeamDataCards = [
    {
        id: 1,
        head: "GINGER GRIFFITH",
        title: "Founder & CEO",
        icon: [<GrFacebookOption />, <FaTwitter />, <FaSkype />],
        image: Team1
    },
    {
        id: 2,
        head: "SABRINA TUCKER",
        title: "Project Manager",
        icon: [<GrFacebookOption />, <FaTwitter />, <FaSkype />],
        image: Team2
    },
    {
        id: 3,
        head: "WILLIAM GURRERO",
        title: "Web Developer",
        icon: [<GrFacebookOption />, <FaTwitter />, <FaSkype />],
        image: Team3
    },
    {
        id: 4,
        head: "MARION GRAHAM",
        title: "UI/UX Designer",
        icon: [<GrFacebookOption />, <FaTwitter />, <FaSkype />],
        image: Team4
    },

];

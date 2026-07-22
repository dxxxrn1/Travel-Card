import chinaImg from "../assets/China.jpg";
import jordanImg from "../assets/Jordan.jpg";
import ukImg from "../assets/UK.jpg";

const travelData = [
    {
        id: 1,
        title: "Great Wall of China",
        location: "China",
        Url: "https://www.britannica.com/topic/Great-Wall-of-China",
        date: "August 2022",
        description: "Great Wall of China, extensive bulwark erected in ancient China, one of the largest building-construction projects ever undertaken. The Great Wall actually consists of numerous walls—many of them parallel to each other—built over some two millennia across northern China and southern Mongolia.",
        img: chinaImg
    },
    {
        id: 2,
        title: "Petra",
        location: "Jordan",
        Url: "https://www.britannica.com/topic/Petra-ancient-city-Jordan",
        date: "October 2023",
        description: "Petra is a historic and archaeological city in southern Jordan. It is famous for its rock-cut architecture and water conduit system. Another name for Petra is the Rose City due to the color of the stone out of which it is carved.",
        img: jordanImg
    },
    {
        id: 3,
        title: "Stonehenge",
        location: "United Kingdom",
        Url: "https://www.britannica.com/topic/Stonehenge",
        date: "June 2024",
        description: "Stonehenge is a prehistoric monument on Salisbury Plain in Wiltshire, England. It consists of an outer ring of vertical sarsen standing stones, each around 13 feet high, seven feet wide, and weighing around 25 tons, topped by connecting horizontal lintel stones.",
        img: ukImg
    }
];

export default travelData;

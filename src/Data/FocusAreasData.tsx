import { FocusAreaType } from "@/Types/types";
import { Dna, Heart, Recycle, Settings, UtensilsCrossed, Wifi } from "lucide-react";


export const FocusAreasData: FocusAreaType[] = [
  {
    id: 1,
    icon: <Recycle size={32} />,
    title: "Waste Management",
    description:
      "Pioneering sustainable waste solutions that protect our planet and promote a cleaner, greener future.",
  },
  {
    id: 2,
    icon: <UtensilsCrossed size={32} />,
    title: "Food Innovations",
    description:
      "Revolutionizing food systems with cutting-edge research and solutions for a healthier, more sustainable world.",
  },
  {
    id: 3,
    icon: <Settings size={32} />,
    title: "Engineering",
    description:
      "Engineering the future through advanced technology and innovative solutions that drive progress and efficiency.",
  },
  {
    id: 4,
    icon: <Wifi size={32} />,
    title: "Information & Communications Technology",
    description:
      "Empowering the digital age with advancements in connectivity, data, and communication systems.",
  },
  {
    id: 5,
    icon:  <Heart size={32} />,
    title: "Medical & Health Sciences",
    description:
      "Advancing healthcare with innovative research and medical breakthroughs that enhance lives and well-being.",
  },
  {
    id: 6,
    icon: <Dna size={32} />,
    title: "Biotechnology",
    description:
      "Shaping the future with biotechnological innovations that transform industries and improve global health.",
  },
];

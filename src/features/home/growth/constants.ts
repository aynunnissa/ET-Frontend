import PeopleIcon from "../../../assets/icons/people.svg";
import CapitalIcon from "../../../assets/icons/capital.svg";
import GrowthIcon from "../../../assets/icons/growth.svg";
import GrassIcon from "../../../assets/icons/grass.svg";
import GearIcon from "../../../assets/icons/gear.svg";

interface IGrowthItem {
  icon: string,
  title: string,
  description: string
}

export const GROWTH_ITEM: Array<IGrowthItem> = [
  {
    icon: PeopleIcon,
    title: "500+",
    description: "Petani Binaan"
  },
  {
    icon: CapitalIcon,
    title: "> Rp 5 Miliar",
    description: "Pendanaan Tersalurkan"
  },
  {
    icon: GrowthIcon,
    title: "> 15%",
    description: "Peningkatan Pendapatan"
  },
  {
    icon: GrassIcon,
    title: "750 Ha +",
    description: "Luas Wilayah Binaan"
  },
  {
    icon: GearIcon,
    title: "> 20%",
    description: "Peningkatan Produktivitasn"
  },
]
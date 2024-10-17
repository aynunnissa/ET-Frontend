import CoinsIcon from "../../../assets/icons/coins.svg";
import CycleMovementIcon from "../../../assets/icons/cycle-movement.svg";
import DataShareIcon from "../../../assets/icons/data-share.svg";

interface IValueItem {
  icon: string,
  title: string,
  description: string
}

export const VALUE_ITEMS: Array<IValueItem> = [
  {
    icon: CoinsIcon,
    title: "Pembiayaan",
    description: "Eratani menyalurkan dukungan dan edukasi finansial berbasis teknologi bagi para petani yang mengalami kesulitan permodalan untuk meningkatkan produktivitas pertanian."
  },
  {
    icon: CycleMovementIcon,
    title: "Manajemen Rantai Pasok",
    description: "Eratani memfasilitasi akses kebutuhan petani melalui mitra penyedia sarana kebutuhan di bidang pertanian secara transparan dan terstandarisasi."
  },
  {
    icon: DataShareIcon,
    title: "Distribusi & Penjualan",
    description: "Eratani memfasilitasi petani untuk menjual dan mendistribusikan hasil panen secara langsung dan mudah dengan harga yang terstandarisasi."
  }
]
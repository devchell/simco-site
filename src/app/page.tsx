import { Hero } from "@/components/home/Hero";
import {
  DestaqueSuporte,
  FaixaFatos,
  FaixaMenuSimco,
  FichaModulos,
  Implantacao,
  ListaSegmentos,
  Parceiros,
} from "@/components/home/Secoes";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";

export default function Inicio() {
  return (
    <>
      <Hero />
      <FaixaFatos />
      <ListaSegmentos />
      <FichaModulos />
      <Implantacao />
      <FaixaMenuSimco />
      <DestaqueSuporte />
      <Parceiros />
      <ChamadaOrcamento />
    </>
  );
}

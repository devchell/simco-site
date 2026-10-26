import { Hero } from "@/components/home/Hero";
import {
  DestaqueSuporte,
  FaixaConfianca,
  Implantacao,
  ParaOContador,
  Recursos,
  Segmentos,
} from "@/components/home/Secoes";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";

export default function Inicio() {
  return (
    <>
      <Hero />
      <FaixaConfianca />
      <Recursos />
      <Segmentos />
      <ParaOContador />
      <Implantacao />
      <DestaqueSuporte />
      <ChamadaOrcamento />
    </>
  );
}

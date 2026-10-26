import type { Metadata } from "next";
import { empresa, enderecoCompleto } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Saiba como o site da SIMCO trata dados: sem cookies de rastreamento, sem cadastro e com formulários que apenas abrem o WhatsApp. Direitos conforme a LGPD.",
};

export default function PaginaPrivacidade() {
  return (
    <>
      <section className="border-b border-line bg-sunken pb-14 pt-16">
        <div className="wrap">
          <h1 className="text-[2.5rem] font-extrabold tracking-[-0.035em] sm:text-[3.4rem]">Política de privacidade</h1>
          <p className="mt-3 text-sm font-medium text-muted">Atualizada em 26 de outubro de 2026</p>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            Explicamos aqui, em linguagem simples, quais dados este site trata e quais são os seus direitos, de acordo
            com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <div className="prosa">
            <h2 className="!mt-0">Quem é o controlador</h2>
            <p>
              O controlador dos dados é a {empresa.razaoSocial}, CNPJ {empresa.cnpj}, com sede em {enderecoCompleto}.
            </p>

            <h2>O que este site faz e não faz</h2>
            <ul>
              <li>É um site estático, sem cadastro e sem área de login.</li>
              <li>Não usa cookies de rastreamento, ferramentas de análise de audiência nem publicidade.</li>
              <li>Não guarda o que você digita nos formulários.</li>
            </ul>

            <h2>Formulários e WhatsApp</h2>
            <p>
              Os formulários do site não enviam dados a nenhum servidor nosso. Eles apenas montam uma mensagem com o
              que você preencheu e abrem o WhatsApp no seu aparelho. Você revisa o texto e decide se envia.
            </p>
            <p>
              A partir do envio, a conversa passa a ser regida pela política de privacidade do WhatsApp e da Meta e
              pelo nosso atendimento. Usamos as informações da conversa apenas para responder ao seu pedido.
            </p>

            <h2>Vídeos do YouTube</h2>
            <p>
              Os vídeos só são carregados quando você clica para assistir, e usamos o modo de privacidade ampliada
              (youtube-nocookie). Depois do clique, o YouTube pode usar cookies próprios, conforme a política dele.
            </p>

            <h2>Hospedagem</h2>
            <p>
              O site é hospedado na Vercel, que registra dados técnicos de acesso, como endereço IP e navegador, para
              garantir a segurança e o funcionamento do serviço.
            </p>

            <h2>Por que tratamos esses dados</h2>
          <ul>
            <li>
              <strong>Mensagens que você envia pelo WhatsApp:</strong> para responder ao seu pedido de demonstração, orçamento
              ou suporte. Base legal: procedimentos preliminares ou execução de contrato a pedido do titular e legítimo
              interesse (LGPD, art. 7º, incisos V e IX).
            </li>
            <li>
              <strong>Registros técnicos de acesso:</strong> para segurança e funcionamento do site. Base legal: legítimo
              interesse e cumprimento de obrigação legal (LGPD, art. 7º, incisos II e IX; Marco Civil da Internet, art. 15).
            </li>
          </ul>

          <h2>Por quanto tempo guardamos</h2>
          <p>
            As conversas de atendimento ficam guardadas enquanto durar o atendimento ou a relação comercial e pelo prazo
            necessário para cumprir obrigações legais. Os registros de acesso seguem o prazo mínimo de 6 meses previsto no
            Marco Civil da Internet e as regras do provedor de hospedagem.
          </p>

          <h2>Transferência para fora do Brasil</h2>
          <p>
            A Vercel (hospedagem), a Meta (WhatsApp) e o Google (YouTube) podem processar dados em servidores fora do Brasil.
            Essa transferência segue as hipóteses do artigo 33 da LGPD, como as garantias contratuais oferecidas por esses
            fornecedores.
          </p>

          <h2>Segurança</h2>
          <p>
            O site funciona apenas com conexão segura (HTTPS) e não mantém banco de dados com informações de visitantes.
          </p>

          <h2>Seus direitos</h2>
            <p>Conforme o artigo 18 da LGPD, você pode pedir:</p>
            <ul>
              <li>confirmação de que tratamos dados seus;</li>
              <li>acesso aos dados;</li>
              <li>correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
              <li>informações sobre com quem compartilhamos os dados;</li>
              <li>revogação do consentimento, quando ele for a base do tratamento.</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, escreva para{" "}
              <a href={`mailto:${empresa.email}`}>{empresa.email}</a>.
            </p>

            <h2>Encarregado de dados</h2>
          <p>
            O contato com o encarregado pelo tratamento de dados pessoais (LGPD, art. 41) é feito pelo mesmo e-mail:{" "}
            <a href={`mailto:${empresa.email}`}>{empresa.email}</a>. Se não ficar satisfeito com a resposta, você também pode
            apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
          </p>

          <h2>Crianças e adolescentes</h2>
          <p>Este site é voltado a empresas e não se destina a menores de 18 anos.</p>

          <h2>Mudanças nesta política</h2>
            <p>Se algo mudar, atualizaremos esta página e a data no topo.</p>
          </div>
        </div>
      </section>
    </>
  );
}

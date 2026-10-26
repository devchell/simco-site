# SIMCO Informática — site institucional

Site da SIMCO Informática, empresa de sistemas de gestão (ERP) para autopeças, oficinas, comércio e controle de equipamentos, com central de suporte para clientes.

## Tecnologias

- [Next.js](https://nextjs.org) (App Router, páginas estáticas)
- TypeScript
- Tailwind CSS 4
- Motion (respeita a preferência de movimento reduzido no banner)
- MiniSearch (busca da central de suporte, feita no navegador)

## Rodando localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

O site abre em http://localhost:3000.

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Serve a versão de produção |
| `npm run lint` | Verifica o código com ESLint |
| `npm run typecheck` | Verifica os tipos com TypeScript |

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste.

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_INDEXAR` | `true` libera a indexação por buscadores. Qualquer outro valor envia `noindex` e bloqueia o `robots.txt`. |
| `NEXT_PUBLIC_SITE_URL` | Endereço público do site, usado no sitemap e nos dados estruturados. |

## Onde editar o conteúdo

Todo o texto fica em `src/content/`:

- `site.ts` — dados da empresa (telefones, WhatsApp de vendas e de suporte, e-mail, endereço, CNPJ, horário) e o menu.
- `segmentos.ts` — páginas de Autopeças, Oficinas, Comércio e Controle de equipamentos.
- `modulos.ts` — módulos fiscais, financeiros e integrações.
- `parceiros.ts` — parceiros e logos.
- `suporte/artigos.ts` — artigos da central de suporte.
- `suporte/rejeicoes.ts` — códigos de retorno da SEFAZ (conforme o MOC 7.0).
- `suporte/videos.ts` — vídeos tutoriais do YouTube.

Os formulários não enviam dados a um servidor: eles montam a mensagem e abrem o WhatsApp de vendas ou de suporte (`src/lib/whatsapp.ts`).

## Publicação

O projeto é publicado na Vercel. Cada push na branch `main` gera um novo deploy.

## Créditos das imagens

Fotos do banner da página inicial, baixadas do Unsplash em 26/10/2026 e usadas sob a [Licença Unsplash](https://unsplash.com/license):

| Arquivo | Autor | Origem |
| --- | --- | --- |
| `public/img/hero/gestao.jpg` | Studio Republic (@studiorepublic) | https://unsplash.com/photos/fotKKqWNMQ4 |
| `public/img/hero/automacao.jpg` | Simon Kadula (@simonkadula) | https://unsplash.com/photos/-gkndM1GvSA |
| `public/img/hero/oficina.jpg` | @mtonuk | https://unsplash.com/photos/8t6tk7LYLrE |

Logo da SIMCO e logos dos parceiros (Sweda, TecnoSpeed, JN2): material da própria SIMCO, extraído do site oficial.

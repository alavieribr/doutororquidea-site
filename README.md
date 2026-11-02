# doutororquidea.com

Site de Arthur Lavieri, o Doutor Orquídea: recuperação e cuidados caseiros de orquídeas.

## Como rodar
```
npm install
npm run dev      # http://localhost:4321
npm run build    # gera a pasta dist/
```

## Onde fica cada coisa
- `src/content/guias/` — um arquivo Markdown por guia do Pronto-socorro (modelo fixo: sintoma, causas, o que fazer hoje, próximos 30 dias, erros comuns, quando desistir, antes e depois, fontes).
- `src/pages/` — páginas: início, pronto-socorro, sobre, contato, fontes.
- `src/data/site.ts` — e-mail, Facebook e cores.
- `public/img/` — imagens (ilustrações geradas no Leonardo.ai e fotos do jardim do Arthur).

## Publicação
GitHub (`doutororquidea-site`) → Vercel (plano Hobby) → domínio doutororquidea.com (DNS na Hostinger).
Formulário de contato via FormSubmit, para arthur.eugenio@uol.com.br: o primeiro envio dispara um e-mail de ativação que precisa ser confirmado nessa caixa.

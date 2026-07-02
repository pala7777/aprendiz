# Aprendiz — plataforma de aprendizagem interativa

Projeto **independente** (sem ligação com REVOA). Uma plataforma de aprendizagem onde se **aprende fazendo** (calcular, montar, testar — não só ler). **Curso #1:** Metodologia do Treino de Trail.

> Codinome provisório "Aprendiz" — o nome fica em aberto. Para rebatizar: troque o texto do `#logo` em `index.html`, `BRAND` em `assets/js/app.js` e `--brand`/tokens em `assets/css/styles.css`.

## Como abrir
É um site estático **sem build e sem dependências**. Duas formas:
- Abrir `index.html` direto no navegador (funciona em `file://`).
- Ou servir localmente: `python3 -m http.server 8080` e acessar `http://localhost:8080`.

## O que já funciona (protótipo — Fase 1)
- **Shell de plataforma** com catálogo de cursos (trail + placeholders "em breve") e página de **Ferramentas**.
- **Triagem adaptativa** (🏃 correr / 🎓 ensinar / 🌿 40+) — muda os destaques do conteúdo; troca pela pílula no topo.
- **Módulo 0 completo** (Linguagem comum), 3 etapas, cada uma no ritmo *conceito → visual → faça você → mini-check*.
- **Ferramentas interativas de verdade:** zonas de intensidade, correr×caminhar, velocidade ascensional, + visuais (descolamento de cargas, 3 domínios, espectro fartlek↔repetições) e jogo de classificar.
- **Quiz do módulo** com feedback imediato e nota.
- **Progresso salvo** no navegador (localStorage): etapas concluídas, barra de progresso, notas dos testes.

## Estrutura
```
index.html                 shell + inclusão dos scripts
assets/css/styles.css      design system (tokens em :root)
assets/js/tools.js         ferramentas/visualizações (cada uma devolve um DOM)
assets/js/app.js           roteador (hash), estado, render, quiz, progresso
content/trail.js           CONTEÚDO do curso (dados; fácil editar/expandir)
```

## Como adicionar conteúdo
Edite `content/trail.js`. Um módulo tem `etapas[]`; cada etapa tem `blocks[]`. Tipos de bloco suportados:
`concept`, `visual` (component), `tool` (component), `callout` (com `track` p/ adaptativo), `faca`, `classify`, `check`. Módulos futuros já aparecem no mapa como "em breve" (`locked:true`) — é só preencher `etapas` e remover o lock.

## Próximas fases
2. Escrever Módulos 1–5. 3. Todas as 8 calculadoras + visualizações. 4. Flashcards com repetição espaçada + certificado. 5. Polimento/mobile/hospedagem. 6. (vender) landing + pagamento + créditos.

## Direitos
Conteúdo original em pt-BR ensinando ciência de domínio público (metodologia de treino). Não reproduz material de terceiros. Fontes creditadas quando aplicável.

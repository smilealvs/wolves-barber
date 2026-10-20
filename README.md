# Wolves Barber

Landing page de uma página para a barbearia fictícia **Wolves Barber** — peça de portfólio em HTML, CSS e JavaScript puros, sem build e sem framework.

> Projeto de demonstração. Marca, endereço, telefone, preços, horários, depoimentos e mapa são fictícios. Os botões de agendamento são intencionalmente inertes e não abrem o WhatsApp.

## Direção visual

Identidade “Cadeira à Meia-Noite”: fundo carvão, texto marfim, um único dourado e tipografia editorial (Playfair Display + Inter). A arte é toda local: logo, ilustrações da galeria, mapa e capa social em SVG/JPG. Não há widget de Instagram, iframe de mapa, vídeo ou API.

## Tecnologias

- HTML, CSS e JavaScript puros — sem framework, bundler ou dependência de runtime.
- Google Fonts via CDN (única requisição externa).
- SVGs autorais para marca e mapa; ilustrações da galeria em JPG; favicons gerados localmente.

## Estrutura

```
index.html
css/style.css
js/script.js
assets/
  favicon/        favicons, favicon.ico e site.webmanifest
  images/         marca, herói, galeria, mapa e og-cover.jpg
```

Seções: `#inicio` (herói), `#servicos`, `#galeria`, `#avaliacoes`, `#contato` e rodapé.

## Como rodar

Não há etapa de build. Sirva a pasta como conteúdo estático:

```bash
npx serve .
# ou
python -m http.server
```

Depois abra o endereço indicado no navegador. Servir via `http://` garante o funcionamento do manifest e dos caminhos locais.

## Detalhes técnicos

- **Herói sem vídeo:** `wolves-hero.svg` exibe o emblema facetado como imagem de capa, com assinatura em HTML. As animações de entrada usam apenas `opacity`, `transform` e `clip-path`.
- **Galeria local:** seis ilustrações em grade de três colunas (duas abaixo de 900px), substituindo o embed do Instagram.
- **Mapa local:** `map-wolves.svg` é uma ilustração, não um mapa geográfico.
- **Contato fictício:** telefone, Instagram e endereço são texto puro, sem links externos.
- **CTAs de demonstração:** `<button type="button">` sem destino, com `aria-describedby` apontando para a nota do rodapé.
- **Acessibilidade:** HTML semântico, foco visível, contraste AA, alvos de toque de no mínimo 44px, `aria-current` na navegação e suporte a `prefers-reduced-motion`.
- **Responsivo:** verificado de 320px a 1920px, sem overflow horizontal; o menu colapsa em 700px e o herói empilha em 900px.

## Conteúdo

Todos os dados exibidos são fictícios e podem ser editados diretamente em `index.html`. Ao reutilizar o modelo para uma barbearia real, substitua a nota de demonstração, os depoimentos ilustrativos, o mapa e os destinos dos CTAs.

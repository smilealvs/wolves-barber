// Menu expansível da navegação, só embaixo de 700px.
//
// O estado mora em um atributo só: o `aria-expanded` do botão. O CSS lê esse
// atributo direto, então não existe uma classe em paralelo para dessincronizar.
// O `data-nav-toggle="ready"` no <html> é o que autoriza o botão a aparecer e a
// nav a se recolher — sem ele o CSS mantém a nav visível, e um navegador sem
// JavaScript continua com a navegação inteira na tela.

const NAV_BREAKPOINT = "(max-width: 700px)";

document.documentElement.dataset.navToggle = "ready";

const toggle = document.querySelector(".site-nav__toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  const collapsible = window.matchMedia(NAV_BREAKPOINT);

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));

    if (open) {
      nav.dataset.open = "";
    } else {
      delete nav.dataset.open;
    }
  };

  const close = () => setOpen(false);

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Escape fecha e devolve o foco ao botão: sem isso, fechar o painel deixaria o
  // foco num link que acabou de ficar display:none, e o browser o jogaria no topo
  // do documento.
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (toggle.getAttribute("aria-expanded") !== "true") return;

    close();
    toggle.focus();
  });

  // Clique fora do header fecha. Um clique em qualquer link da nav também fecha,
  // e essa é a parte que importa para a âncora: o painel precisa estar recolhido
  // antes do scroll, senão o destino para embaixo da altura do painel aberto em vez
  // de da altura do header fechado que o --scroll-offset mede.
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) close();
  });

  document.addEventListener("click", (event) => {
    if (toggle.getAttribute("aria-expanded") !== "true") return;
    if (event.target.closest(".site-header")) return;

    close();
  });

  // Ao cruzar o corte para telas médias e grandes o menu precisa voltar ao estado
  // normal de linha única. O `matches` já é o estado novo no momento do evento,
  // então o listener só olha para ele — sem medir a largura de novo.
  const syncToBreakpoint = () => {
    if (!collapsible.matches) close();
  };

  if (typeof collapsible.addEventListener === "function") {
    collapsible.addEventListener("change", syncToBreakpoint);
  } else if (typeof collapsible.addListener === "function") {
    collapsible.addListener(syncToBreakpoint);
  }

  // Estado inicial coerente com a largura de carregamento: abrir a página já em
  // 500px não pode deixar um aria-expanded="true" herdado de nada, e o estado
  // fechado é o único que faz sentido para as duas faixas.
  syncToBreakpoint();
}

// Chegada da lista de serviços.
//
// Um <ul> aparece como lista: os nove itens entram juntos, com um passo curto
// entre eles e o atraso total travado em ~640ms pelo CSS. Chegar uma lista é
// diferente de chegar uma seção — não existe segunda passada, o grupo é
// desacoplado do observer na primeira vez que aparece.
//
// Este script só decide QUANDO marcar a chegada; ele nunca esconde nada. O
// estado visível dos itens é o estado natural do CSS, e a animação está atada a
// `[data-revealed]` no próprio CSS. Se o observer não existir, se o visitante
// pedir movimento reduzido, ou se a inicialização falhar no meio, a lista
// simplesmente aparece sem gesto — nunca some.
//
// A margem inferior de -10% segura o gatilho acima da dobra: o grupo é marcado
// quando ainda está uns 130px abaixo da tela, então a animação de chegada
// acontece enquanto ele entra em cena em vez de depois de já ter aparecido.
const revealGroups = document.querySelectorAll("[data-reveal-target]");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (revealGroups.length && "IntersectionObserver" in window && !prefersReducedMotion.matches) {
  // `threshold: 0` dispara no primeiro quadro em que UM pixel do grupo cruza a
  // raiz já encolhida em -10%. Com um limiar alto o gatilho só ocorreria depois
  // que o grupo já estivesse bem dentro da tela, e a chegada — 320ms de atraso
  // entre irmãos mais 320ms de duração — tocaria inteira fora do olhar. Assim o
  // gesto começa enquanto o grupo entra e o visitante acompanha a lista se
  // abrindo linha a linha.
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        revealObserver.unobserve(entry.target);
        entry.target.setAttribute("data-revealed", "");
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0 }
  );

  for (const group of revealGroups) {
    group.setAttribute("data-reveal", "");
    revealObserver.observe(group);
  }

  // Rede de segurança: se o observer não disparar — carregamento com âncora já
  // rolada, navegador estranho, virtual time de teste — a lista chega atrasada
  // mas chega. Preferimos perder o gesto de entrada a esconder conteúdo para
  // sempre.
  window.setTimeout(() => {
    for (const group of revealGroups) {
      if (group.hasAttribute("data-revealed")) continue;

      revealObserver.unobserve(group);
      group.setAttribute("data-revealed", "");
    }
  }, 5000);
}

// Você está aqui.
//
// Uma faixa fina no meio da viewport é a régua: a seção que a atravessa é a
// corrente, e o link correspondente recebe `aria-current="true"` — o estado que
// o CSS pinta com tinta cheia, distinto do hover. O item de CTA ("Agendar")
// fica de fora mesmo apontando para o contato: ele é uma ação dourada fixa, não
// um marcador de posição.
const sectionLinks = Array.from(
  document.querySelectorAll('.site-nav__list > li:not(.site-nav__cta) > a[href^="#"]')
);

if (sectionLinks.length && "IntersectionObserver" in window) {
  const linkById = new Map(
    sectionLinks.map((link) => [link.getAttribute("href").slice(1), link])
  );
  const sections = Array.from(linkById.keys())
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const inView = new Set();

  const syncCurrent = () => {
    let currentId = null;

    for (const section of sections) {
      if (inView.has(section)) {
        currentId = section.id;
        break;
      }
    }

    for (const [id, link] of linkById) {
      if (id === currentId) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          inView.add(entry.target);
        } else {
          inView.delete(entry.target);
        }
      }

      syncCurrent();
    },
    // A faixa fica entre 45% e 50% da altura da raiz: só há corrente quando uma
    // seção de fato cruza o olhar, sem depender do tamanho dela.
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  for (const section of sections) {
    sectionObserver.observe(section);
  }
}


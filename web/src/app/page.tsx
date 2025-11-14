import Link from "next/link";
import { Checklist, ChecklistGroup } from "@/components/Checklist";
import styles from "./page.module.css";

type Diagnosis = {
  title: string;
  description: string;
  tags: string[];
};

type Pillar = {
  title: string;
  highlight: string;
  bullets: string[];
};

type CalendarRow = {
  stage: string;
  objective: string;
  execution: string;
};

type GrowthTactic = {
  title: string;
  description: string;
  tags: string[];
};

type Resource = {
  title: string;
  description: string;
  link: string;
};

const channelUrl = "https://youtube.com/@agnussound?si=VrSSVo66rxv7FzB9";
const videoUrl = "https://youtu.be/x7vOCYb6rFA?si=35bxy24ihPoIC-Y9";

const diagnosis: Diagnosis[] = [
  {
    title: "Metadados não conversam com a busca",
    description:
      "Título genérico, ausência de palavras-chave com volume (ex: 'instrumental worship', 'oração madrugada', 'música devocional'). Tags e descrição ainda não transmitem contexto para o algoritmo.",
    tags: ["SEO", "Descoberta", "Metadados"],
  },
  {
    title: "Thumbnail e identidade pouco memoráveis",
    description:
      "Visual atual não sustenta a proposta dark/worship. Falta contraste, promessa clara e consistência para virar assinatura visual do canal.",
    tags: ["Branding", "Design", "CTR"],
  },
  {
    title: "Zero distribuição off-YouTube",
    description:
      "Sem uso de Shorts, Reels ou comunidades para levar tráfego inicial. Vídeo publicado sem divulgação em grupos, playlists colaborativas ou comunidades nichadas.",
    tags: ["Distribuição", "Aquisição", "Comunidade"],
  },
  {
    title: "Catálogo insuficiente para Watch Time",
    description:
      "Um único vídeo não gera horas suficientes. É necessário lançar séries e playlists para criar sessões de audiência e sinalizar relevância.",
    tags: ["Conteúdo", "Watch Time", "Escala"],
  },
];

const pillars: Pillar[] = [
  {
    title: "Produção e curadoria sonora",
    highlight: "Transformar IA em assinatura original e consistente.",
    bullets: [
      "Padronizar timbres, BPM (60-72) e masterização para ambiente devocional.",
      "Criar versões longas (40-90 min) + variantes curtas (3-5 min) para Shorts.",
      "Explorar temáticas (vigília, guerra espiritual, foco, cura) com storytelling.",
    ],
  },
  {
    title: "Embalagem e SEO intencional",
    highlight: "Ganhar cliques com promessa específica e linguagem do nicho.",
    bullets: [
      "Títulos modelo: palavra-chave + benefício + contexto (ex: 'Instrumental Worship 432hz para Oração Intensa | Vigília de Avivamento').",
      "Miniatura com contraste alto, frase forte e ícone visual fixo do canal.",
      "Descrição com roteiro de uso, CTAs, timestamps, recursos e links.",
    ],
  },
  {
    title: "Distribuição multiformato",
    highlight: "Transformar cada faixa longa em múltiplas portas de entrada.",
    bullets: [
      "Cortar highlights para Shorts/Reels com legendas impactantes.",
      "Criar versão 'pomodoro espiritual' (25 min) para foco/estudo.",
      "Rodar parcerias com canais de oração, playlists Spotify e communities.",
    ],
  },
];

const checklistGroups: ChecklistGroup[] = [
  {
    id: "kickoff-dia1",
    title: "Diagnóstico & Setup",
    window: "Primeiras 24h",
    focus:
      "Organizar operação, ajustar vídeo existente e criar base de análise.",
    actions: [
      {
        id: "ajuste-metadados",
        title: "Reescrever título, descrição e tags do vídeo atual",
        description:
          "Incluir palavras-chave principais, promessa clara e CTA para inscrição + playlist guardião.",
        deadline: "Hoje",
        impact: "Alta",
        resources: ["TubeBuddy / VidIQ", "Planilha de palavras-chave"],
      },
      {
        id: "nova-thumbnail",
        title: "Produzir thumbnail dark com assinatura visual",
        description:
          "Aplicar contraste forte (roxo + dourado), ícone do canal e texto curto (máx. 3 palavras).",
        deadline: "Hoje",
        impact: "Alta",
        resources: ["Canva Pro", "Mockups 16:9"],
      },
      {
        id: "hub-controle",
        title: "Criar painel de métricas e backlog de ideias",
        description:
          "Montar planilha Notion/Sheets com metas semanais, ideias de vídeos, status e KPI (Views, CTR, Retenção, Inscritos).",
        deadline: "Hoje",
        impact: "Media",
        resources: ["Notion", "Google Sheets"],
      },
    ],
  },
  {
    id: "semana1",
    title: "Lançamentos rápidos",
    window: "Dias 2-7",
    focus:
      "Publicar trinca inicial de vídeos longos + 5 Shorts para alimentar algoritmo.",
    actions: [
      {
        id: "roteiro-series",
        title: "Definir três séries principais e roteiros de legendas",
        description:
          "Ex: Vigília, Instrumental Profético, Estudo & Concentração. Planejar títulos, descrições e thumbnails.",
        deadline: "Dia 2",
        impact: "Alta",
        resources: ["Banco de prompts Suno", "Modelo de roteiro"],
      },
      {
        id: "producao-videos",
        title: "Produzir e agendar 3 vídeos longos (40-60 min)",
        description:
          "Publicar em dias alternados (seg/qua/sex) com estreia programada e chat liberado.",
        deadline: "Dia 6",
        impact: "Alta",
        resources: ["Suno AI", "DaVinci Resolve / Premiere"],
      },
      {
        id: "shorts-distribuicao",
        title: "Extrair 5 Shorts dos trechos mais impactantes",
        description:
          "Adicionar legenda dinâmica, CTA de inscrição e call para vídeo completo na descrição.",
        deadline: "Dia 7",
        impact: "Media",
        resources: ["CapCut", "Descript"],
      },
    ],
  },
  {
    id: "semana2-4",
    title: "Crescimento & comunidade",
    window: "Semanas 2-4",
    focus:
      "Consolidar frequência, ativar distribuição e iniciar relacionamentos nichados.",
    actions: [
      {
        id: "playlist-parcerias",
        title: "Criar playlists temáticas e colaborar com canais afins",
        description:
          "Enviar pitch para canais cristãos, igrejas e apps de oração com proposta de troca de playlists.",
        deadline: "Semana 3",
        impact: "Alta",
        resources: ["Lista de comunidades", "Email template"],
      },
      {
        id: "lives-devocionais",
        title: "Iniciar lives semanais com chat (30-45 min)",
        description:
          "Utilizar OBS + faixas do canal; inserir momento de oração guiada + CTA para playlist.",
        deadline: "Semana 4",
        impact: "Media",
        resources: ["OBS Studio", "Script de live"],
      },
      {
        id: "campanha-grupos",
        title: "Distribuir conteúdo em grupos de oração e apps de mensagens",
        description:
          "Compartilhar link com copy contextualizada evitando spam, convidando para playlist temática.",
        deadline: "Toda semana",
        impact: "Alta",
        resources: ["Telegram/WhatsApp", "Copy pronta"],
      },
    ],
  },
  {
    id: "mensal",
    title: "Otimização contínua",
    window: "Mensal",
    focus:
      "Avaliar dados, refinar criativos e testar formatos que acelerem Watch Time.",
    actions: [
      {
        id: "analise-metricas",
        title: "Revisar métricas-chave no YouTube Studio",
        description:
          "Acompanhar CTR, retenção de 30s, fontes de tráfego e aplicar learnings nos próximos lançamentos.",
        deadline: "Mensal",
        impact: "Alta",
        resources: ["YouTube Studio", "Planilha KPI"],
      },
      {
        id: "otimizacao-thumb",
        title: "Testar variações de título/thumbnail com experiments",
        description:
          "Rodar testes A/B (TubeBuddy/vidIQ) nos vídeos top 20% para melhorar CTR.",
        deadline: "Mensal",
        impact: "Media",
        resources: ["TubeBuddy Legend", "Canva"],
      },
      {
        id: "monetizacao-progresso",
        title: "Atualizar projeções de monetização",
        description:
          "Cruzar horas assistidas x inscritos, planejar lives especiais ou maratonas para bater 4.000h.",
        deadline: "Mensal",
        impact: "Media",
        resources: ["Planilha Monetização", "YouTube Studio"],
      },
    ],
  },
] satisfies ChecklistGroup[];

const calendar: CalendarRow[] = [
  {
    stage: "Segunda",
    objective: "Lançamento vídeo Long Form (60 min) + post comunidade",
    execution:
      "Título com palavra-chave + thumbnail high contrast; Descrição com timestamps + CTA; Post comunidade reforçando propósito da faixa.",
  },
  {
    stage: "Terça",
    objective: "Short vertical (30-45s) + distribuição orgânica",
    execution:
      "Highlight com legenda em 3 linhas; postar em Shorts, Reels, TikTok com link fixado para vídeo completo.",
  },
  {
    stage: "Quarta",
    objective: "Live curta guiada",
    execution:
      "Live 35 min com roteiro: boas-vindas, oração guiada, faixa exclusiva, CTA para playlist; usar chat para perguntas.",
  },
  {
    stage: "Quinta",
    objective: "Conteúdo valor agregado",
    execution:
      "Vídeo 'making of'/testemunho (5-8 min) ou collab com líder religioso. Incentiva retenção e storytelling do canal.",
  },
  {
    stage: "Sexta",
    objective: "Vídeo long form #2 + Shorts extra",
    execution:
      "Publicar nova faixa + Shorts focado em gatilho emocional (ex: 'som para madrugada de vigília').",
  },
  {
    stage: "Finais de semana",
    objective: "Distribuição & relacionamento",
    execution:
      "Newsletter/WhatsApp, comentários em vídeos relevantes, respostas pessoais aos inscritos e coleta de feedback.",
  },
];

const growthTactics: GrowthTactic[] = [
  {
    title: "SEO & posicionamento de títulos",
    description:
      "Seguir fórmula: Palavra-chave primária + benefício específico + contexto/emotion. Ex: 'Instrumental Worship Profético 432hz | Vigília Madrugada | Fundo para Oração'.",
    tags: ["CTR", "Busca", "Click"],
  },
  {
    title: "Thumb assinatura dark",
    description:
      "Base roxo profundo, recorte de silhueta, tipografia serifada, selo Agnus Sound. Reforça identidade e diferencia no feed.",
    tags: ["Design", "Branding", "Conversão"],
  },
  {
    title: "Playlists e funnels",
    description:
      "Criar playlists por momentos (vigília, estudos, batalha espiritual). CTAs no início e final do vídeo apontando para elas.",
    tags: ["Watch Time", "Sessões", "Playlist"],
  },
  {
    title: "Comunidades e influenciadores",
    description:
      "Mapear líderes de oração, perfis gospel e apps cristãos para co-criar sessões, lives e listas colaborativas.",
    tags: ["Parcerias", "Autoridade", "Backlinks"],
  },
];

const resources: Resource[] = [
  {
    title: "Políticas de monetização YouTube",
    description:
      "Checklist oficial para ingresso no Programa de Parcerias (YPP) e regras de conteúdo reutilizado.",
    link:
      "https://support.google.com/youtube/answer/72851?hl=pt-BR&ref_topic=9153826",
  },
  {
    title: "Guia Suno AI para consistência sonora",
    description:
      "Documento com prompts otimizados, referências de mix/master e padronização tonal.",
    link: "https://docs.suno.ai/docs/prompting",
  },
  {
    title: "Kit de thumbnail dark worship",
    description:
      "Template editável no Canva com camadas, tipografia e filtros já configurados.",
    link: "https://www.canva.com/templates/search/gospel-youtube-thumbnail/",
  },
  {
    title: "Planilha KPI & Projeção Monetização",
    description:
      "Modelo (.csv) para acompanhar inscritos, horas assistidas, CTR, retenção e evolução semanal rumo à monetização.",
    link: "/resources/agnus-kpi-template.csv",
  },
  {
    title: "Checklist de distribuição omnicanal",
    description:
      "Passo a passo para compartilhar cada lançamento em comunidades, playlists e redes sem soar spam.",
    link: "/resources/checklist-distribuicao.md",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroHeader}>
            <span className={styles.tag}>Agnus Sound · Estratégia 360º</span>
            <h1>Plano completo para crescer, engajar e monetizar em 90 dias.</h1>
            <p>
              Diagnóstico do canal dark de música instrumental worship, ações
              semanais detalhadas e estratégias de distribuição para atingir o
              Programa de Parcerias do YouTube o quanto antes.
            </p>
            <div className={styles.heroActions}>
              <Link
                href={channelUrl}
                className={styles.primaryAction}
                target="_blank"
                rel="noreferrer"
              >
                Visitar canal
              </Link>
              <Link
                href={videoUrl}
                className={styles.secondaryAction}
                target="_blank"
                rel="noreferrer"
              >
                Assistir vídeo atual
              </Link>
            </div>
          </div>

          <aside className={styles.heroMetrics}>
            <div>
              <h2>Checkpoint inicial</h2>
              <p>
                Use estes indicadores como base para acompanhar evolução semanal
                e tomar decisões baseadas em dados.
              </p>
            </div>
            <div className={styles.metricGrid}>
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>Inscritos atuais</span>
                <span className={styles.metricValue}>0-10</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>Visualizações (vídeo)</span>
                <span className={styles.metricValue}>1</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>Meta 30 dias</span>
                <span className={styles.metricValue}>500 inscritos</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>Meta monetização</span>
                <span className={styles.metricValue}>
                  1.000 inscritos · 4.000h
                </span>
              </div>
            </div>
          </aside>
        </section>

        <section className={styles.section} id="diagnostico">
          <div className={styles.sectionHeader}>
            <h2>Diagnóstico acionável</h2>
            <p>
              Quatro pilares críticos identificados após analisar canal e vídeo.
              Cada ponto possui causa raiz e direcionamento para correção
              imediata.
            </p>
          </div>

          <div className={styles.insightGrid}>
            {diagnosis.map((item) => (
              <article key={item.title} className={styles.insightCard}>
                <div className={styles.tagList}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="pilares">
          <div className={styles.sectionHeader}>
            <h2>Pilares estratégicos</h2>
            <p>
              Diretrizes para garantir consistência artística, branding forte e
              crescimento sustentável. Utilize como guia para novos conteúdos e
              decisões de posicionamento.
            </p>
          </div>

          <div className={styles.pillarGrid}>
            {pillars.map((pillar) => (
              <article key={pillar.title} className={styles.pillarCard}>
                <div className={styles.tag}>{pillar.highlight}</div>
                <h3>{pillar.title}</h3>
                <ul>
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <Checklist groups={checklistGroups} />

        <section className={styles.section} id="calendario">
          <div className={styles.sectionHeader}>
            <h2>Calendário editorial 30 dias</h2>
            <p>
              Estrutura semanal pronta para manter cadência, alimentar o
              algoritmo e conduzir a audiência por múltiplos pontos de contato.
            </p>
          </div>

          <div className={styles.calendar}>
            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Objetivo</th>
                  <th>Execução & notas</th>
                </tr>
              </thead>
              <tbody>
                {calendar.map((row) => (
                  <tr key={row.stage}>
                    <td>
                      <strong>{row.stage}</strong>
                    </td>
                    <td>
                      <span>{row.objective}</span>
                    </td>
                    <td>
                      <span>{row.execution}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section} id="distribuicao">
          <div className={styles.sectionHeader}>
            <h2>Distribuição & crescimento</h2>
            <p>
              Combine táticas orgânicas e relacionamentos estratégicos para
              abastecer o funil de audiência, gerar prova social e acelerar o
              watch time.
            </p>
          </div>

          <div className={styles.insightGrid}>
            {growthTactics.map((tactic) => (
              <article key={tactic.title} className={styles.insightCard}>
                <div className={styles.tagList}>
                  {tactic.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{tactic.title}</h3>
                <p>{tactic.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="monetizacao">
          <div className={styles.sectionHeader}>
            <h2>KPIs rumo à monetização</h2>
            <p>
              Alvos mínimos para ingressar no YouTube Partner Program + métricas
              auxiliares que indicam se a estratégia está saudável.
            </p>
          </div>

          <div className={styles.kpiGrid}>
            <div className={styles.kpiCard}>
              <strong>1.000</strong>
              <span>Inscritos orgânicos com fonte predominante de pesquisa.</span>
            </div>
            <div className={styles.kpiCard}>
              <strong>4.000h</strong>
              <span>
                Horas assistidas nos últimos 12 meses (lives + vídeos longos
                contam).
              </span>
            </div>
            <div className={styles.kpiCard}>
              <strong>50%</strong>
              <span>
                Retenção nos primeiros 30 segundos dos vídeos principais (meta
                mínima).
              </span>
            </div>
            <div className={styles.kpiCard}>
              <strong>7-9%</strong>
              <span>
                CTR de miniaturas em vídeos longos. Ajustar criativos se ficar
                abaixo de 5%.
              </span>
            </div>
          </div>

          <div className={styles.insightGrid}>
            <article className={styles.insightCard}>
              <div className={styles.tagList}>
                <span className={styles.tag}>Monetização</span>
              </div>
              <h3>Checklist YouTube Partner Program</h3>
              <p>
                Cumprindo 1.000 inscritos + 4.000 horas, habilite 2FA, aceite
                termos, conecte AdSense e solicite revisão. Mantenha biblioteca
                com 10+ vídeos originais para evitar reprovação por conteúdo
                reutilizado (common issue em canais com IA).
              </p>
            </article>
            <article className={styles.insightCard}>
              <div className={styles.tagList}>
                <span className={styles.tag}>Receita</span>
              </div>
              <h3>Próximos fluxos de renda</h3>
              <p>
                Após aprovação, diversifique: Vendas de loops exclusivos,
                Spotify/Apple Music (distribuidoras digitais), licenciamento
                para igrejas e doações recorrentes via Catarse/PicPay.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section} id="recursos">
          <div className={styles.sectionHeader}>
            <h2>Recursos e ferramentas</h2>
            <p>
              Materiais para acelerar execução, manter consistência estética e
              acompanhar resultados sem perder tempo.
            </p>
          </div>

          <div className={styles.resourceGrid}>
            {resources.map((resource) => (
              <article key={resource.title} className={styles.resourceCard}>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <Link href={resource.link} target="_blank" rel="noreferrer">
                  Abrir recurso →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <p className={styles.footerNote}>
          Atualize este plano quinzenalmente conforme métricas evoluem. Use o
          YouTube Studio para ler cada fonte de tráfego, dobre nas que entregam
          melhor retenção e elimine o que não gera resultado. Persistência,
          clareza de posicionamento e uma operação enxuta porém consistente são
          os elementos que transformarão o Agnus Sound em referência dark no
          worship instrumental.
        </p>
      </main>
    </div>
  );
}

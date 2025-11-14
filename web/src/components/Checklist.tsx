"use client";

import { useMemo, useState } from "react";
import styles from "./Checklist.module.css";

type ActionImpact = "Alta" | "Media" | "Baixa";

export type ActionItem = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  impact: ActionImpact;
  resources?: string[];
};

export type ChecklistGroup = {
  id: string;
  title: string;
  window: string;
  focus: string;
  actions: ActionItem[];
};

type ChecklistProps = {
  groups: ChecklistGroup[];
};

export function Checklist({ groups }: ChecklistProps) {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const impactLabel: Record<ActionImpact, string> = {
    Alta: "Alta",
    Media: "Média",
    Baixa: "Baixa",
  };

  const completion = useMemo(() => {
    const total = groups.reduce((acc, group) => acc + group.actions.length, 0);
    const done = Object.values(completed).filter(Boolean).length;
    return {
      total,
      done,
      percentage: total === 0 ? 0 : Math.round((done / total) * 100),
    };
  }, [groups, completed]);

  const toggle = (id: string) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <h2>Checklist de Execução</h2>
          <p>
            Acompanhe o progresso em tempo real. Priorize ações com impacto
            alto, valide resultados semanalmente e ajuste metas conforme os
            indicadores.
          </p>
        </div>
        <div className={styles.progress}>
          <span>{completion.percentage}%</span>
          <small>
            {completion.done}/{completion.total} concluídas
          </small>
        </div>
      </header>

      <div className={styles.grid}>
        {groups.map((group) => (
          <article key={group.id} className={styles.group}>
            <header className={styles.groupHeader}>
              <div>
                <span className={styles.window}>{group.window}</span>
                <h3>{group.title}</h3>
              </div>
              <p>{group.focus}</p>
            </header>

            <ul className={styles.list}>
              {group.actions.map((action) => (
                <li key={action.id} className={styles.item}>
                  <label
                    className={styles.checkbox}
                    data-checked={Boolean(completed[action.id])}
                  >
                    <input
                      type="checkbox"
                      checked={Boolean(completed[action.id])}
                      onChange={() => toggle(action.id)}
                    />
                    <span className={styles.customBox} />
                  </label>

                  <div className={styles.itemBody}>
                    <div className={styles.itemHeader}>
                      <h4>{action.title}</h4>
                      <span
                        className={`${styles.badge} ${
                          styles[`impact${action.impact}`]
                        }`}
                      >
                        Impacto: {impactLabel[action.impact]}
                      </span>
                    </div>
                    <p>{action.description}</p>
                    <div className={styles.meta}>
                      <span className={styles.deadline}>
                        Prazo: {action.deadline}
                      </span>
                      {action.resources && action.resources.length > 0 && (
                        <div className={styles.resources}>
                          {action.resources.map((resource) => (
                            <span key={resource}>{resource}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

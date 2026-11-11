import type { ReactNode } from 'react';
import './styles.css';

function ConfiguracaoRoot({ children }: { children: ReactNode }) {
  return <div className="ec-page">{children}</div>;
}

function Grupo({ title, children }: { children: ReactNode; title: string }) {
  return (
    <section className="about-group">
      <h2>{title}</h2>
      <div className="settings-sheet">{children}</div>
    </section>
  );
}

function Linha({ label, note, children }: { children?: ReactNode; label: string; note?: ReactNode }) {
  return (
    <div className="settings-row">
      <div>
        <span className="settings-row-label">{label}</span>
        {note ? <p className="about-note">{note}</p> : null}
      </div>
      {children}
    </div>
  );
}

/** Página de configuração: coluna central, grupos com cartão e linhas de opção. */
export const Configuracao = Object.assign(ConfiguracaoRoot, { Grupo, Linha });

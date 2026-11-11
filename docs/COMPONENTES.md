# Componentes

Pacote `@electron-components/ui`. Cada componente fica em `src/<nome>/`, com `index.tsx` e `styles.css`. O estilo entra junto com o componente.

```tsx
import { Configuracao, Intro, Segment, Toggle } from '@electron-components/ui';
```

Também dá para importar um só: `import { Segment } from '@electron-components/ui/segment'`.

## Intro

Casca da abertura em passos: voltar, pular, continuar, concluir e os pontos. O aplicativo entrega o conteúdo de cada passo. A flag de "já viu a introdução" fica no aplicativo.

| Prop | Tipo | Função |
| --- | --- | --- |
| `steps` | `{ id, content, illustrated? }[]` | Conteúdo de cada passo. `id` identifica o passo. `illustrated` alarga o bloco. |
| `onFinish` | `() => void` | Chamado no botão do último passo. |
| `onSkip` | `() => void` | Opcional. Mostra Pular em todos os passos menos o último. |
| `finishLabel` | `string` | Texto do último botão. O padrão é `Começar`. |

```tsx
<Intro
  steps={[
    {
      id: 'boas-vindas',
      content: (
        <>
          <h1>Boas-vindas</h1>
          <p className="welcome-lead">Uma frase curta.</p>
        </>
      ),
    },
    { id: 'segundo', content: <h1>Segundo passo</h1>, illustrated: true },
  ]}
  onSkip={fechar}
  onFinish={fechar}
/>
```

As classes `welcome-lead` e `welcome-text` fazem parte do visual do passo.

## Configuracao

Página de configurações. A coluna central empilha grupos. Cada grupo tem título e um cartão. `Configuracao.Linha` coloca o rótulo à esquerda e o controle à direita. O cartão também aceita outro conteúdo, como a lista de dispositivos.

| Parte | Props | Função |
| --- | --- | --- |
| `Configuracao` | `children` | Coluna centralizada, no máximo 720px. |
| `Configuracao.Grupo` | `title`, `children` | Título e o cartão do grupo. |
| `Configuracao.Linha` | `label`, `note?`, `children` | Rótulo, nota opcional e o controle. |

```tsx
<Configuracao>
  <Configuracao.Grupo title="Configurações">
    <Configuracao.Linha label="Iniciar com o Windows" note="Abre o aplicativo no login.">
      <Segment label="Iniciar com o Windows" value={valor} options={opcoes} onChange={definir} />
    </Configuracao.Linha>
  </Configuracao.Grupo>
</Configuracao>
```

O botão de uma linha usa a classe `ec-action`. O valor somente leitura usa a classe `about-value`.

## Toggle

Interruptor de ligado e desligado.

| Prop | Tipo | Função |
| --- | --- | --- |
| `checked` | `boolean` | Estado atual. |
| `label` | `string` | Nome acessível (`aria-label`). O rótulo visível fica ao lado. |
| `onChange` | `(checked) => void` | Chamado com o próximo estado. |
| `disabled` | `boolean` | Opcional. Trava o interruptor. |

```tsx
<Toggle checked={ligado} label="Alto-falantes" onChange={definir} />
```

## Segment

Escolha segmentada. Uma opção fica marcada. Serve para ligar e desligar uma opção, com dois valores, ou para escolher entre mais rótulos.

| Prop | Tipo | Função |
| --- | --- | --- |
| `label` | `string` | Nome acessível do grupo (`aria-label`). O rótulo visível fica na `Configuracao.Linha`. |
| `value` | `string` | Opção selecionada. |
| `options` | `{ id, label }[]` | Opções, na ordem em que aparecem. |
| `onChange` | `(id) => void` | Chamado ao escolher outra opção. |
| `disabled` | `boolean` | Opcional. Trava os botões. |

```tsx
const opcoes = [
  { id: 'sim', label: 'Sim' },
  { id: 'nao', label: 'Não' },
] as const;

<Segment
  label="Notificações"
  value={ligado ? 'sim' : 'nao'}
  options={opcoes}
  onChange={(id) => definir(id === 'sim')}
/>
```

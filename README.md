## 📚 Detalhes da Arquitetura/Design Pattern

Este projeto foi estruturado para garantir escalabilidade e facilidade de manutenção. Utilizamos `use-context-selector` para melhorar a performance e modularidade do estado global, e aplicamos a inversão de dependência na configuração do `localStorage` para maior flexibilidade.

### Estrutura de Pastas

- **/context**: Contém os provedores e hooks para acesso ao estado global com `use-context-selector`, otimizando renderizações.
- **/services**: Implementa serviços como o `localStorage`, seguindo o princípio de inversão de dependência para facilitar futuras mudanças.
- **/hooks**: Agrupa hooks reutilizáveis para encapsular lógicas complexas.

### Uso do `use-context-selector`

Esse hook permite que componentes consumam apenas partes específicas do contexto, reduzindo renderizações desnecessárias e melhorando a performance.

### Serviço de `localStorage`

A interface `StorageService` define um contrato para acesso ao `localStorage`, permitindo que a implementação seja facilmente substituída:

````typescript
export interface StorageService {
  getItem: <T>(key: string) => T | null;
  setItem: <T>(key: string, value: T) => void;
  removeItem: (key: string) => void;
}
````

Essa abordagem segue o princípio da inversão de dependência, separando o uso da implementação.

### Conclusão
Com essa arquitetura, garantimos um projeto modular, escalável e eficiente, alinhado a boas práticas de desenvolvimento como o SOLID.

```bash

├── src
│   ├
│   ├── components # Todos os componentes reutilizaveis da aplicação
│   │
│   ├── constants # Todas as constantes de configuração que serão reutilizadas no app
│   │
│   ├── contexts # Todos os contextos de gerenciamento global de estado da aplicação.
│   │
│   ├── helpers # Funções utilitárias da aplicação
│   │
│   ├── hooks # Todos os react hooks customizados da aplicação (A regra de negócio a aplicação).
│   │
│   ├── services # Todos os serviços externos da aplicação seja integração com api ou storage (No caso desta aplicação a configuração do localStorage)
│   │
│   ├── models # Todos types que representam as entities da aplicação
│   │
│   ├── styles # Todos os styles globais da aplicação

````

## Layout

[Protótipo do Adobe XD - Ticto](https://xd.adobe.com/view/180026c6-eed8-4704-ab90-0c290028331f-4d53/screen/a86bba0d-6779-47ad-b9c3-10b52cfa60e3/specs/)

## Instalando e executando o projeto

_Clone o projeto e acesse a pasta_

```bash
$ git clone https://github.com/DanielReezende/ticto-challenge-frontend.git

$ cd ticto-challenge-frontend
```

_Siga os passos abaixo_

```bash
# Instale as dependências
$ yarn or npm install

# Para inciar o projeto
$ yarn dev or npm run dev

```

## 🚀 Bibliotecas de Terceiros

- [feather-icons-react](https://www.npmjs.com/package/feather-icons-react)
- [sass](https://www.npmjs.com/package/sass)
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog)
- [@radix-ui/react-radio-group](https://www.npmjs.com/package/@radix-ui/react-radio-group)
- [usehooks-ts](https://www.npmjs.com/package/usehooks-ts)
- [use-context-selector](https://www.npmjs.com/package/zod)
- [react-hook-form](https://www.npmjs.com/package/react-hook-form)
- [zod](https://www.npmjs.com/package/zod)

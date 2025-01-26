Aqui está o README revisado, mais detalhado e completo:

---

# Sistema de Análise de Preço de Custo e Preço de Venda

Este sistema é uma ferramenta simples e prática para calcular lucros, prejuízos e fornecer sugestões de promoções baseadas na diferença entre o preço de custo e o preço de venda de um produto. Além disso, ele oferece a possibilidade de exportar os resultados em formatos CSV e PDF para facilitar o controle e análise dos dados.

## Funcionalidades

1. **Entrada de Dados**: O usuário pode inserir o preço de custo e o preço de venda de um produto.
2. **Cálculo Automático de Lucro e Prejuízo**: O sistema calcula automaticamente o lucro ou prejuízo percentual baseado nos valores inseridos.
3. **Sugestões de Promoção**: O sistema fornece sugestões sobre a necessidade de aplicar promoções com base nos cálculos de lucro ou prejuízo.
4. **Exibição de Resultados**: Os resultados da análise são exibidos diretamente em uma tabela, incluindo os dados de lucro, prejuízo e sugestão de promoção.
5. **Gráfico Interativo**: O sistema gera um gráfico de barras mostrando o lucro ou prejuízo de cada produto, ajudando na visualização dos dados de forma clara e eficiente.
6. **Exportação de Resultados**: É possível exportar a tabela de resultados para um arquivo CSV ou PDF para facilitar o controle financeiro e análises futuras.
7. **Segurança dos Dados**: Após a análise, os dados são apagados automaticamente para garantir a segurança e privacidade dos usuários, já que o sistema não armazena informações permanentemente.

## Fluxo de Uso

1. **Entrada de Dados**: O usuário insere o preço de custo e o preço de venda dos produtos.
2. **Cálculo Automático**: O sistema calcula automaticamente o lucro ou prejuízo em porcentagem com base nos valores inseridos.
3. **Sugestão de Promoção**: O sistema sugere se o preço deve ser mantido ou se uma promoção deve ser aplicada, dependendo da análise de lucro ou prejuízo.
4. **Exibição de Resultados**: Após o cálculo, os resultados são exibidos em uma tabela.
5. **Exportação de Dados**: O usuário pode baixar os resultados da análise em formato CSV ou PDF.
6. **Segurança e Privacidade**: Os dados inseridos são apagados após cada análise, garantindo a privacidade e segurança do usuário.

## Cálculos

O sistema realiza os seguintes cálculos para determinar o lucro ou prejuízo:

- **Lucro (%)**:
  
  \[
  \text{Lucro (\%)} = \left( \frac{{\text{Preço de Venda} - \text{Preço de Custo}}}{{\text{Preço de Custo}}} \right) \times 100
  \]

- **Prejuízo (%)**:

  \[
  \text{Prejuízo (\%)} = \left( \frac{{\text{Preço de Custo} - \text{Preço de Venda}}}{{\text{Preço de Custo}}} \right) \times 100
  \]

### Exemplo de Cálculo

| Preço de Custo | Preço de Venda | Lucro (%) | Prejuízo (%) | Sugestão de Promoção |
|----------------|----------------|-----------|--------------|----------------------|
| R$ 10,00       | R$ 20,00       | 100.00%   | 0.00%        | Manter Preço         |
| R$ 20,00       | R$ 15,00       | 0.00%     | 25.00%       | Aplicar Promoção     |

No exemplo acima, temos dois produtos com diferentes margens de lucro e prejuízo. O primeiro produto gera um lucro de 100%, enquanto o segundo produto apresenta um prejuízo de 25%, sugerindo uma promoção para recuperar o valor perdido.

## Arquitetura do Sistema

O sistema foi desenvolvido para ser simples e fácil de usar, utilizando tecnologias populares do frontend para garantir uma boa experiência ao usuário.

### Estrutura do Código

- **Frontend**:
  - **HTML**: Responsável pela estrutura da página, incluindo a tabela de produtos, botões de download e o gráfico.
  - **CSS**: Estilo visual da página, com design moderno, responsivo e uso de cores em degradê.
  - **JavaScript**:
    - Manipulação da tabela para entrada de dados e cálculos.
    - Geração de gráficos interativos usando a biblioteca Chart.js.
    - Funções para exportação de dados em formato CSV e PDF.

### Tecnologias Utilizadas

- **Frontend**:
  - **HTML**: Estrutura da página.
  - **CSS**: Design responsivo com cores em degradê, adaptável a diferentes dispositivos.
  - **JavaScript**: Manipulação dinâmica de dados, cálculos financeiros e gráficos interativos.
  - **Chart.js**: Biblioteca para geração de gráficos de barras.
  - **jsPDF**: Para exportação de resultados em PDF.
- **Backend (Futuro)**: Para armazenar dados e gerar relatórios persistentes, pode-se utilizar um banco de dados relacional (SQL), como MySQL, PostgreSQL ou SQLite.

## Como Usar

1. **Inserir Dados**: Digite os valores de preço de custo e preço de venda nos campos da tabela.
2. **Visualizar Resultados**: O sistema calculará automaticamente o lucro ou prejuízo de cada produto.
3. **Sugestões de Promoção**: O sistema exibirá sugestões de promoções baseadas nos cálculos de lucro ou prejuízo.
4. **Baixar Planilha**: Após visualizar os resultados, você pode baixar uma planilha em CSV ou PDF com os dados de lucro, prejuízo e sugestão de promoção.
5. **Resetar Dados**: Após cada análise, os dados inseridos são apagados automaticamente para garantir a segurança e privacidade.

## Futuras Melhorias

1. **Implementação de Banco de Dados**: Armazenamento dos resultados das análises em um banco de dados relacional para gerar histórico e relatórios persistentes.
2. **Segurança de Dados**: Implementação de criptografia e autenticação de usuários para garantir maior segurança no armazenamento e acesso aos dados.
3. **Sugestões Avançadas de Promoção**: Criação de um algoritmo mais sofisticado que sugira promoções personalizadas com base em dados históricos de vendas.
4. **Melhorias na Interface**: A interface será aprimorada para torná-la ainda mais interativa, fácil de usar e com gráficos adicionais.

## Conclusão

Este sistema de análise de preço de custo e preço de venda é uma ferramenta útil e simples para ajudar a calcular e entender a margem de lucro e prejuízo de um produto. Ele fornece sugestões de promoção baseadas na análise financeira e permite a exportação dos resultados para relatórios em formatos CSV ou PDF. Embora o sistema seja volátil, garantindo a segurança dos dados do usuário, ele oferece um ponto de partida para melhorias futuras, como o armazenamento de dados em banco de dados e algoritmos mais avançados para sugestões de promoções.

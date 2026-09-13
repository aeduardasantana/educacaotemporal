# Documento Mestre do Projeto — Calendário em Libras

**Responsável pedagógica:** Professora Eduarda Bispo  
**Repositório:** `aeduardasantana/educacaotemporal`  
**Versão do documento:** 1.0  
**Situação:** Especificação inicial para desenvolvimento

## 1. Identificação do produto

O **CALENDÁRIO EM LIBRAS** será um recurso digital permanente de ensino e orientação temporal. O sistema apresentará calendários anuais, informações do tempo presente e textos preparados para interação com o VLibras.

O calendário não ficará limitado a 2026. A pessoa poderá escolher o ano, e a página será recalculada e carregada no mesmo padrão visual, pedagógico e de acessibilidade.

## 2. Contexto pedagógico

O projeto nasce da necessidade de apoiar o ensino de conceitos temporais, principalmente:

- ontem;
- hoje;
- amanhã;
- dia;
- mês;
- ano;
- hora;
- minuto;
- segundo;
- madrugada, manhã, tarde e noite;
- passagem do tempo;
- datas comemorativas e acontecimentos do calendário.

O recurso foi idealizado pela professora Eduarda Bispo para uso educacional com pessoas surdas, incluindo estudantes com vocabulário reduzido em Libras e dificuldade na compreensão de sequência e referência temporal.

## 3. Objetivo geral

Disponibilizar um calendário digital acessível, responsivo e permanente que relacione datas, relógio, períodos do dia, fases da Lua e estações do ano, com textos explícitos que possam ser selecionados para interpretação pelo VLibras.

## 4. Objetivos específicos

- Facilitar a compreensão de passado, presente e futuro.
- Relacionar as expressões “ONTEM”, “HOJE” e “AMANHÃ” às respectivas datas.
- Apresentar os componentes da data com linguagem direta.
- Reforçar vocabulário temporal por meio de repetição estruturada.
- Permitir a consulta de diferentes anos sem mudar o padrão de uso.
- Destacar feriados, pontos facultativos e datas relevantes para a comunidade surda.
- Oferecer informações atualizadas no horário de Goiânia.
- Favorecer a interpretação dos textos pelo VLibras.

## 5. Público de uso

O sistema terá como públicos prioritários ouvintes aprendendo Libras e pessoas surdas não alfabetizadas ou em processo de alfabetização. Também poderá ser utilizado por:

- estudantes surdos;
- pessoas em processo de aquisição ou ampliação de Libras;
- professores de Libras;
- intérpretes de Libras;
- familiares;
- profissionais da Educação Especial;
- demais pessoas que necessitem de apoio visual para orientação temporal.

## 6. Escopo da primeira versão

A primeira versão deverá conter:

1. calendário anual permanente;
2. seleção do ano;
3. navegação para o ano anterior e para o próximo ano;
4. ação para retornar ao ano atual;
5. doze meses completos;
6. identificação textual de mês e dia;
7. marcação das datas passadas;
8. identificação dinâmica de ontem, hoje e amanhã;
9. relógio analógico;
10. horário atual por extenso;
11. período atual do dia;
12. estação atual e seu período;
13. fase atual da Lua e seu período;
14. feriados nacionais;
15. pontos facultativos selecionados;
16. datas relevantes para a comunidade surda;
17. integração com o VLibras;
18. adaptação para celular, tablet e computador.

## 7. Estrutura geral da página

### 7.1 Cabeçalho

O início da página deverá apresentar:

- nome do recurso: “CALENDÁRIO EM LIBRAS”, em caixa alta;
- identificação da professora Eduarda Bispo;
- seletor do ano;
- botão “ANO ANTERIOR”;
- botão “PRÓXIMO ANO”;
- botão “VOLTAR AO ANO ATUAL”.

### 7.2 Painel do tempo atual

O painel deverá apresentar:

- estação atual;
- data de início da estação;
- data de término da estação;
- fase atual da Lua;
- data de início da fase;
- data de término da fase;
- relógio analógico em funcionamento;
- horário atual em texto.

Exemplo do texto do relógio:

> AGORA 20 HORAS, 15 MINUTOS E 30 SEGUNDOS DA NOITE.

### 7.3 Calendário anual

O sistema deverá abrir inicialmente no mês atual e permitir que a pessoa escolha outro mês para visualização. Os doze meses manterão o mesmo padrão. Cada mês terá um título explícito, por exemplo:

> MÊS JANEIRO

Cada célula válida do calendário apresentará a palavra “DIA” acima do número:

> DIA 12

Os espaços necessários apenas para alinhamento das semanas não deverão ser anunciados como dias.

A semana deverá começar no domingo, com os nomes completos dos dias da semana. Cada linha semanal do mês deverá ser identificada sequencialmente como “SEMANA 1”, “SEMANA 2”, “SEMANA 3” e assim por diante.

## 8. Requisitos funcionais

### RF01 — Gerar o calendário anual

O sistema deverá gerar corretamente os doze meses do ano escolhido.

### RF02 — Selecionar o ano

A pessoa deverá poder selecionar um ano entre 2025 e 2030. Ao confirmar a escolha, toda a página deverá ser atualizada no mesmo padrão.

### RF03 — Navegar entre anos

O sistema deverá permitir avançar ou retroceder um ano por vez.

### RF04 — Voltar ao ano atual

O botão “VOLTAR AO ANO ATUAL” deverá carregar o ano correspondente à data atual no horário de Goiânia.

### RF05 — Calcular anos bissextos

O sistema deverá aplicar as regras do calendário gregoriano e exibir 29 de fevereiro somente nos anos bissextos.

### RF06 — Identificar datas passadas

Toda data anterior à data atual deverá receber um “X” visual sobre a célula, sem esconder o número nem prejudicar a seleção ou a leitura do texto.

### RF07 — Identificar ontem, hoje e amanhã

Quando as datas pertencerem ao ano exibido, deverão receber os textos:

- “ONTEM, DIA X”;
- “HOJE, DIA X”;
- “AMANHÃ, DIA X”.

O número do dia deverá permanecer em destaque.

### RF08 — Exibir o relógio analógico

O relógio deverá mostrar horas, minutos e segundos em movimento, usando o horário de Goiânia.

### RF09 — Exibir o horário em texto

O texto abaixo do relógio deverá ser atualizado a cada segundo e apresentar horas, minutos, segundos e período do dia.

### RF10 — Exibir a estação atual

O sistema deverá informar a estação vigente e seu período de início e término.

### RF11 — Exibir a fase atual da Lua

O sistema deverá informar a fase vigente da Lua e seu período de início e término.

### RF12 — Exibir datas especiais

As datas especiais deverão ser visualmente identificadas e possuir uma descrição textual selecionável.

Ao selecionar uma data comum, o texto disponível ao VLibras deverá seguir o padrão “DIA X”. Ao selecionar uma data especial, deverá seguir o padrão “DIA X, FERIADO X” ou a categoria equivalente.

### RF13 — Selecionar o mês

O sistema deverá abrir no mês atual e permitir a escolha de qualquer outro mês do ano selecionado.

### RF14 — Integrar o VLibras

O componente oficial do VLibras deverá estar disponível na página para interpretação dos textos selecionados.

## 9. Regras de negócio

### RN01 — Referência de data e horário

Os cálculos dinâmicos deverão usar o fuso horário `America/Sao_Paulo`, correspondente ao horário de Goiânia.

### RN02 — Ano atual

Quando o ano exibido for o ano atual:

- dias anteriores serão marcados como passados;
- ontem, hoje e amanhã serão identificados quando estiverem dentro desse ano;
- dias posteriores não receberão “X”.

### RN03 — Ano anterior

Quando o ano exibido for anterior ao ano atual, todas as datas válidas deverão ser marcadas como passadas.

### RN04 — Ano futuro

Quando o ano exibido for posterior ao ano atual, nenhuma data deverá ser marcada como passada.

### RN05 — Mudança de ano

Na passagem de 31 de dezembro para 1º de janeiro:

- “ONTEM” poderá aparecer no ano anterior;
- “HOJE” e “AMANHÃ” poderão aparecer no ano atual;
- cada indicação aparecerá somente quando a respectiva data pertencer ao ano que está sendo visualizado.

### RN06 — Marcação com X

O “X” indicará visualmente que o dia passou. Ele deverá ficar em uma camada que preserve:

- a leitura do número;
- o contraste;
- o clique ou seleção;
- a identificação por tecnologia assistiva.

O texto acessível deverá indicar “DIA PASSADO”, sem depender exclusivamente do símbolo visual.

### RN07 — Períodos do dia

A classificação inicial será:

- madrugada: de 00:00 a 05:59;
- manhã: de 06:00 a 11:59;
- tarde: de 12:00 a 17:59;
- noite: de 18:00 a 23:59.

### RN08 — Datas fixas e calculadas

O sistema deverá separar:

- datas fixas, repetidas anualmente;
- datas móveis, calculadas a partir da Páscoa ou de outra regra;
- datas específicas de determinado ano;
- pontos facultativos, que poderão depender de ato oficial.

### RN09 — Validação das datas

Datas legais, comemorativas e pontos facultativos deverão ter sua fonte registrada. Datas variáveis deverão ser verificadas antes de serem tratadas como permanentes.

### RN10 — Limites de navegação

O seletor deverá aceitar somente os anos de 2025 a 2030.

### RN11 — Organização das semanas

Cada semana deverá começar no domingo. Os dias da semana deverão aparecer por extenso, e as linhas deverão receber numeração mensal iniciada em “SEMANA 1”.

### RN12 — Estações e fases da Lua

Os períodos das estações do ano e das fases da Lua serão apresentados somente por datas, sem exibição do horário da mudança.

### RN13 — Abrangência das datas especiais

O calendário deverá apresentar datas nacionais e mundiais selecionadas. Não serão incluídos feriados estaduais de Goiás nem feriados municipais de Goiânia ou Trindade.

### RN14 — Cores das categorias

Domingo, feriado, ponto facultativo e data comemorativa deverão possuir cores diferentes. A cor não será o único meio de distinção: cada categoria também deverá ter identificação textual acessível.

## 10. Conteúdo inicial de datas especiais

### 10.1 Feriados nacionais informados para 2026

- 1º de janeiro — Confraternização Universal.
- 3 de abril — Paixão de Cristo.
- 21 de abril — Tiradentes.
- 1º de maio — Dia Mundial do Trabalho.
- 7 de setembro — Independência do Brasil.
- 12 de outubro — Nossa Senhora Aparecida.
- 2 de novembro — Finados.
- 15 de novembro — Proclamação da República.
- 20 de novembro — Dia Nacional de Zumbi e da Consciência Negra.
- 25 de dezembro — Natal.

### 10.2 Pontos facultativos informados para 2026

- 16 e 17 de fevereiro — Carnaval.
- 18 de fevereiro — Quarta-feira de Cinzas, com horário a confirmar conforme ato oficial aplicável.
- 4 de junho — Corpus Christi.
- 28 de outubro — Dia do Servidor Público federal.

### 10.3 Datas relacionadas à Libras e à comunidade surda

- 22 de janeiro — Dia do Tradutor e Intérprete de Libras, sujeito à validação da denominação e da fonte.
- 23 de abril — Dia Nacional da Educação de Surdos, sujeito à validação da denominação e da fonte.
- 24 de abril — Dia Nacional da Língua Brasileira de Sinais.
- 6 a 11 de setembro — memória histórica do Congresso de Milão de 1880.
- 9 de setembro — aniversário do Seminário Nacional em Defesa das Escolas Bilíngues para Surdos de 2009, sujeito à validação documental.
- 19 de setembro — Dia Nacional do Teatro Acessível.
- 21 de setembro — Dia Nacional de Luta da Pessoa com Deficiência.
- 20 a 26 de setembro — Semana Internacional dos Surdos, informada inicialmente para 2026 e sujeita à conferência anual com a WFD.
- 23 de setembro — Dia Internacional das Línguas de Sinais.
- 26 de setembro — Dia Nacional dos Surdos.
- último domingo de setembro — Dia Mundial do Surdo, conforme regra informada e sujeita à validação.
- 30 de setembro — Dia Internacional do Surdo e Dia Internacional do Tradutor e Intérprete, sujeitos à validação de denominação e fonte.

## 11. Requisitos de acessibilidade

- Todo texto importante deverá existir como texto real em HTML, e não apenas dentro de imagens.
- Os controles deverão funcionar por teclado.
- O foco do teclado deverá estar visível.
- Cores não poderão ser o único meio de transmitir significado.
- Dias passados deverão possuir indicação textual além do “X”.
- Botões deverão ter nomes claros.
- Elementos decorativos não deverão gerar leitura desnecessária.
- A ordem de leitura deverá acompanhar a organização visual.
- Os números dos dias deverão ter tamanho e contraste adequados.
- A página deverá permitir ampliação sem perda de conteúdo.
- O VLibras deverá ser integrado conforme a documentação oficial.
- Os textos temporais deverão evitar abreviações que prejudiquem a interpretação.

## 12. Requisitos não funcionais

### RNF01 — Responsividade

A página deverá funcionar em celular, tablet e computador.

### RNF02 — Desempenho

O calendário e o relógio deverão funcionar diretamente no navegador, sem necessidade de banco de dados para a primeira versão.

### RNF03 — Hospedagem

O projeto deverá ser compatível com hospedagem estática a partir do GitHub.

### RNF04 — Manutenção

Datas e descrições especiais deverão ficar organizadas em uma estrutura centralizada para facilitar correções e inclusão de novos anos.

### RNF05 — Privacidade

A primeira versão não deverá coletar dados pessoais nem exigir cadastro.

### RNF06 — Compatibilidade

O sistema deverá ser testado nas versões atuais dos principais navegadores compatíveis com o VLibras.

### RNF07 — Impressão e mídia própria

O sistema não terá função específica de impressão, áudio ou vídeos próprios em Libras. A interpretação será realizada exclusivamente pela integração com o VLibras.

### RNF08 — Autoria e proteção do código

Os arquivos de programação deverão utilizar `edufertanapo` como assinatura do código. O nome e o contato da autora deverão aparecer apenas no campo de identificação da interface, sem repetição nos cabeçalhos dos arquivos ou na documentação técnica. O repositório utilizará aviso de direitos autorais e licença proprietária, sem autorização geral de cópia, modificação, redistribuição ou comercialização.

A identificação no código constitui aviso de autoria, mas não substitui eventual registro do programa de computador no INPI. O histórico de commits deverá ser preservado como evidência complementar da evolução do projeto.

## 13. Diretrizes visuais iniciais

- A identidade visual usará azul royal como cor principal.
- O desenho será simples, profissional e sem excesso de elementos.
- Os textos principais serão apresentados em caixa alta.
- O número do dia será o elemento principal de cada célula.
- A palavra “DIA” ficará menor e acima do número.
- “ONTEM”, “HOJE” e “AMANHÃ” terão distinção visual clara.
- O “X” de data passada não poderá dominar nem ocultar o conteúdo.
- Datas especiais deverão ser reconhecíveis sem sobrecarregar a tela.
- O painel inicial deverá separar claramente estação, Lua e relógio.
- A visualização apresentará um mês por vez, inclusive no celular, com seletor para mudança do mês.
- Domingo, feriado, ponto facultativo e data comemorativa terão cores distintas e legenda textual.

## 14. Critérios de aceite da primeira versão

A primeira versão será considerada funcional quando:

1. gerar corretamente qualquer ano permitido pelo seletor;
2. apresentar os doze meses e os dias da semana corretos;
3. tratar corretamente anos bissextos;
4. marcar datas passadas sem ocultar os números;
5. identificar ontem, hoje e amanhã;
6. atualizar o relógio e o texto do horário a cada segundo;
7. informar corretamente o período do dia;
8. apresentar estação e fase da Lua com seus períodos;
9. exibir as datas especiais cadastradas;
10. disponibilizar o VLibras;
11. funcionar em celular e computador;
12. permitir navegação por teclado;
13. não depender de banco de dados;
14. poder ser publicado a partir do repositório do GitHub.

## 15. Decisões de produto confirmadas

1. Nome público: “CALENDÁRIO EM LIBRAS”.
2. Público prioritário: ouvintes aprendendo Libras e pessoas surdas não alfabetizadas ou em processo de alfabetização.
3. Identidade visual: azul royal, simples, profissional e com textos principais em caixa alta.
4. Intervalo de anos: 2025 a 2030.
5. Início da semana: domingo.
6. Linhas do calendário: “SEMANA 1”, “SEMANA 2” e seguintes.
7. Dias da semana: nomes completos.
8. Visualização: um mês por vez, abrindo no mês atual e permitindo escolha.
9. Data comum selecionada: “DIA X”.
10. Data especial selecionada: “DIA X, FERIADO X” ou categoria correspondente.
11. Estações e fases da Lua: precisão por dia, sem horário.
12. Abrangência: somente datas nacionais e mundiais selecionadas.
13. Categorias visuais: cores diferentes para domingo, feriado, ponto facultativo e data comemorativa.
14. Impressão: não será incluída.
15. Recursos em Libras: somente integração com o VLibras; não haverá áudio ou vídeos próprios na versão definida.

## 16. Etapas propostas de desenvolvimento

### Etapa 1 — Estrutura

- configurar o projeto;
- criar o cabeçalho e o seletor de ano;
- gerar os doze meses;
- implementar responsividade básica.

### Etapa 2 — Lógica temporal

- calcular data atual em Goiânia;
- identificar passado, ontem, hoje e amanhã;
- tratar anos bissextos;
- criar relógio analógico e texto em tempo real.

### Etapa 3 — Ciclos naturais

- implementar estações do ano;
- implementar fases da Lua;
- registrar períodos de início e término.

### Etapa 4 — Datas especiais

- cadastrar feriados nacionais;
- calcular datas móveis;
- cadastrar pontos facultativos;
- cadastrar e validar datas da comunidade surda.

### Etapa 5 — Acessibilidade

- integrar o VLibras;
- revisar estrutura semântica;
- testar teclado, foco, contraste e ampliação;
- revisar textos usados na interpretação.

### Etapa 6 — Validação pedagógica

- testar o recurso com a professora;
- observar a compreensão da estudante;
- registrar dificuldades;
- ajustar textos, destaques e sequência de interação.

### Etapa 7 — Publicação

- executar testes finais;
- corrigir falhas;
- preparar documentação de uso;
- publicar a versão estável.

## 17. Possibilidades futuras

- exercícios de ontem, hoje e amanhã;
- montagem orientada de datas;
- registro visual de atividades realizadas;
- calendário escolar;
- personalização da cidade e do fuso horário;
- modo de apresentação para uso em sala;
- expansão para outros anos letivos e outros públicos.

## 18. Glossário inicial

**Calendário permanente:** calendário gerado para todos os anos permitidos entre 2025 e 2030, sem ficar limitado a uma edição anual fixa.

**Data atual:** data calculada no fuso horário adotado pelo sistema.

**Data especial:** feriado, ponto facultativo, data comemorativa ou marco histórico cadastrado.

**VLibras:** conjunto de ferramentas que traduz conteúdos digitais em português para Libras por meio de um avatar.

**Responsivo:** conteúdo que reorganiza seu tamanho e disposição conforme a tela do aparelho.

**Arquivo Markdown (`.md`):** arquivo de texto simples que utiliza sinais como `#`, `-` e `**` para criar títulos, listas e destaques. O GitHub transforma essa marcação em uma página visualmente organizada.

## 19. Controle de alterações

| Versão | Alteração |
|---|---|
| 1.0 | Consolidação inicial do contexto, escopo, requisitos, regras de negócio, acessibilidade e etapas do projeto. |
| 1.1 | Definição do nome público, público prioritário, identidade visual, intervalo de anos, organização das semanas, navegação mensal, textos selecionáveis e limites de escopo. |
| 1.2 | Inclusão das regras de proteção autorais, licença proprietária e identificação da titular do código. |

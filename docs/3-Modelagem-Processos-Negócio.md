# 3. Modelagem dos Processos de Negócio
 
## 3.0.1. Introdução
 
Com o aumento do consumo energético e a busca por mais eficiência no uso da eletricidade, o monitoramento inteligente de energia se torna essencial para os usuários residenciais. Nosso sistema foi desenvolvido para oferecer uma visão clara e detalhada do consumo de energia, permitindo identificar padrões, reduzir gastos e detectar possíveis anomalias. Para garantir um funcionamento eficiente, a solução é estruturada em três categorias de processos: primários, de suporte e gerenciais.
 
## 3.0.2. Identificação e Classificação dos Processos
 
### 3.0.2.1. Processos Primários (Essenciais)
 
#### Coleta de Dados do Consumo
 
- **Descrição**: Os medidores inteligentes realizam leituras periódicas e transmitem os dados ao sistema.
- **Objetivo**: Garantir medições precisas e em tempo real.
 
#### Análise de Consumo
 
- **Descrição**: O sistema processa os dados coletados e identifica padrões de uso.
- **Objetivo**: Fornecer insights para otimização do consumo.
 
#### Notificação ao Usuário
 
- **Descrição**: O sistema envia alertas automáticos sobre consumo elevado, sugestões de economia e possíveis falhas.
- **Objetivo**: Informar e auxiliar na redução de desperdícios.
 
#### Geração de Relatórios
 
- **Objetivo**: Consolidar informações sobre consumo em períodos específicos para análise detalhada.
 
### 3.0.2.2. Processos de Suporte (Apoio)
 
#### Gerenciamento de Dispositivos
 
- **Descrição**: Cadastro e manutenção dos medidores inteligentes.
- **Objetivo**: Garantir que todos os dispositivos operem corretamente.
 
#### Gestão de Usuários
 
- **Descrição**: Controle de perfis e permissões de acesso.
- **Objetivo**: Assegurar a segurança das informações.
 
#### Infraestrutura de TI
 
- **Descrição**: Manutenção dos servidores que armazenam e processam os dados.
- **Objetivo**: Garantir estabilidade e disponibilidade do sistema.
 
### 3.0.2.3. Processos Gerenciais
 
#### Monitoramento da Qualidade do Serviço
 
- **Descrição**: Avaliação da precisão das medições e desempenho do sistema.
- **Objetivo**: Assegurar um serviço confiável.
 
#### Gestão de Anomalias
 
- **Objetivo**: Detectar e corrigir falhas no funcionamento do sistema.
 
#### Auditoria e Relatórios Gerenciais
 
- **Objetivo**: Fornecer informações para melhoria contínua do serviço.
 
## 3.0.3. Entradas e Saídas dos Processos
 
| **Processo**             | **Entradas**                          | **Saídas**                              |
|---------------------------|---------------------------------------|-----------------------------------------|
| Coleta de Dados           | Leituras dos medidores inteligentes   | Dados armazenados no banco de dados     |
| Análise de Consumo        | Dados coletados                       | Padrões detectados, alertas gerados     |
| Notificação ao Usuário    | Alertas gerados                       | Mensagens enviadas (SMS, e-mail, app)   |
| Geração de Relatórios     | Dados históricos de consumo           | Relatórios acessíveis via sistema       |
 
## 3.0.4. Localização dos Processos
 
- **Na Residência**: O medidor inteligente coleta e transmite os dados.
- **No Servidor na Nuvem**: O sistema processa os dados, identifica padrões e gera relatórios.
- **No App/Site do Usuário**: O usuário acessa seu consumo, recebe alertas e visualiza relatórios.
- **No Painel do Administrador**: Equipes de suporte acompanham o desempenho do sistema e gerenciam dispositivos.
 
## 3.0.5. Participantes do Processo
 
Cada etapa do monitoramento conta com diferentes participantes:
 
- **Medidores Inteligentes**: Dispositivos responsáveis pela coleta de dados.
- **Sistema de Monitoramento**: Processa informações e gera insights para os usuários.
- **Equipe Técnica**: Garante a manutenção dos dispositivos e servidores.
- **Administradores**: Supervisionam o desempenho do sistema e gerenciam acessos.
 
## 3.0.6. Produtos de Informação
 
- **Relatórios de Consumo**: Apresentação visual do histórico de consumo.
- **Alertas de Consumo Elevado**: Notificações automáticas sobre gastos acima da média.
- **Relatórios Técnicos**: Logs detalhados do funcionamento do sistema.
- **Relatórios de Gestão**: Dados analíticos sobre otimização energética.
 
## 3.0.7. Conexão com a Arquitetura do Software
 
- **Usuários e Permissões**: O sistema conta com perfis diferenciados (morador, administrador, técnico).
- **Banco de Dados**: Estruturado para armazenar informações essenciais, como:
  - Tabela Usuários (id, nome, e-mail, tipo de usuário).
  - Tabela Medidores (id, residência, status, último envio de dados).
  - Tabela Registros de Consumo (medidor_id, timestamp, consumo).
  - Tabela Alertas (usuário_id, tipo, data).
  - Tabela Relatórios (usuário_id, período, dados).
# 3.1. Modelagem da situação atual (Modelagem AS IS)
 
Atualmente, muitas pessoas enfrentam problemas com contas de luz elevadas, o que representa um grande impacto financeiro, principalmente em residências que possuem um uso descontrolado de energia. Isso acontece por diversas razões:
 
### Falta de Informação Clara
 
Muitas vezes, os usuários não têm uma visão detalhada e compreensível do seu consumo de energia. As informações fornecidas pelas distribuidoras de energia são, em geral, complexas e difíceis de interpretar, o que gera desconhecimento sobre o consumo real.
 
### Dificuldade de Identificação de Padrões de Consumo
 
O consumo de energia muitas vezes é afetado por práticas diárias que podem ser difíceis de identificar sem uma análise detalhada. Lâmpadas deixadas acesas, aparelhos em stand-by ou uso excessivo de aquecedores são exemplos de fatores que podem aumentar a conta de luz, mas que muitas pessoas não percebem no dia a dia.
 
### Processos Manuais e Fragmentados
 
Em muitos casos, os consumidores tentam monitorar o consumo de energia por conta própria, seja com anotações manuais ou por meio de ferramentas complicadas. Isso gera retrabalho, erros de cálculo e confusão.
 
### Falta de Ações Corretivas
 
Sem uma ferramenta clara e acessível para identificar o consumo elevado, muitos consumidores não conseguem tomar ações corretivas a tempo. Isso resulta em alta frequência de contas de energia elevadas, o que afeta o orçamento doméstico e impacta negativamente o meio ambiente devido ao consumo excessivo.
 
## Problemas Identificados
 
Os principais problemas associados a esse cenário são:
 
- **Desconhecimento do Consumo Real**: O consumidor muitas vezes não tem uma visão clara de quando ou por que está gastando mais energia.
- **Dificuldade de Ação**: A falta de ferramentas fáceis de usar impede que os consumidores tomem decisões rápidas para reduzir o consumo, como desligar aparelhos quando não estão em uso.
- **Impacto Econômico e Ambiental**: O consumo elevado de energia não só resulta em contas altas, mas também contribui para maiores emissões de CO2, impactando negativamente o meio ambiente.
 
## Solução Proposta com a Automação
 
O uso de nosso aplicativo de monitoramento de consumo de energia propõe uma solução simples, intuitiva e eficiente para resolver esses problemas:
 
### Interface Simples e Acessível
 
- **Solução**: O aplicativo oferece uma interface amigável e de fácil compreensão, com linguagem clara e simples, ideal até mesmo para idosos.
- **Benefício**: Com isso, qualquer usuário, independentemente da idade, poderá compreender seu consumo de energia e tomar decisões informadas para reduzi-lo.
 
### Monitoramento em Tempo Real
 
- **Solução**: O sistema irá monitorar o consumo de energia em tempo real, identificando o gasto energético de cada aparelho individualmente e fornecendo dados atualizados sobre o consumo diário e mensal de cada dispositivo.
- **Benefício**: Os usuários terão uma visão instantânea e precisa do que estão gastando, permitindo que tomem ações corretivas imediatas (como desligar aparelhos ou otimizar o uso de energia).
 
### Alertas e Recomendações Personalizadas
 
- **Solução**: O aplicativo enviará alertas automáticos caso o consumo ultrapasse um limite preestabelecido ou se identificar padrões de consumo elevados.
- **Benefício**: Os usuários receberão alertas de como reduzir o consumo de energia.
 
### Relatórios Simples e Visuais
 
- **Solução**: O sistema gerará relatórios visuais e fáceis de entender, com gráficos simples que mostram o histórico de consumo.
- **Benefício**: Esses relatórios permitem que os usuários vejam claramente a diferença de consumo de um aparelho para o outro.

# 3.2. Descrição geral da proposta (Modelagem TO BE)

Tendo identificado os gargalos dos modelos AS IS, apresentem uma descrição da proposta de solução, buscando maior eficiência com a introdução da tecnologia. Abordem também os limites dessa solução e o seu alinhamento com as estratégias e objetivos do contexto de negócio escolhido. 
Colem aqui os modelos da solução proposta (modelo TO BE) elaborados com o apoio da ferramenta baseada em BPMN utilizada na disciplina.
Cada processo identificado deve ter seu modelo TO-BE específico. Descrevam as oportunidades de melhoria de cada processo da solução proposta.

_Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias._

# 3.3. Modelagem dos processos

[PROCESSO 1 - Nome do Processo](./processos/processo-1-nome-do-processo.md "Detalhamento do Processo 1.")

[PROCESSO 2 - Nome do Processo](./processos/processo-2-nome-do-processo.md "Detalhamento do Processo 2.")

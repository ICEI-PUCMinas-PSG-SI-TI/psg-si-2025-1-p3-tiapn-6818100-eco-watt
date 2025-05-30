# 3. Modelagem dos Processos de Negócio

Introdução
Com o aumento do consumo energético e a busca por eficiência no uso da eletricidade, o monitoramento inteligente de energia se torna essencial para usuários residenciais. Nosso sistema foi desenvolvido para oferecer uma visão clara e detalhada do consumo, permitindo identificar padrões, reduzir gastos e detectar anomalias. A solução é estruturada em três categorias de processos: primários, de suporte e gerenciais, com melhorias nos fluxos de cadastro, análise e geração de relatórios.

Processos Primários são coleta de Dados do Consumo, Análise de Consumo, Notificação ao Usuário, Geração de Relatórios
Processos de Suporte são Gerenciamento de Dispositivos, Gestão de Usuários, Infraestrutura de TI, Cadastro de Eletrodomésticos, Cadastro do Fórum, Cadastro de Dicas
Processos Gerenciais, Monitoramento da Qualidade do Serviço, Gestão de Anomalias, Auditoria e Relatórios Gerenciais
Entradas e Saídas dos Processos

| Processo                  | Entradas                              | Saídas                                   |
|---------------------------|---------------------------------------|------------------------------------------|
| Coleta de Dados           | Leituras dos medidores inteligentes   | Dados armazenados no banco de dados      |
| Análise de Consumo        | Dados coletados                       | Padrões detectados, alertas gerados      |
| Notificação ao Usuário    | Alertas gerados                       | Mensagens enviadas (SMS, e-mail, app)    |
| Geração de Relatórios     | Dados históricos de consumo           | Relatórios acessíveis via sistema        |
| Cadastro de Eletrodomésticos | Dados do aparelho (potência, uso)  | Estimativas de consumo por dispositivo   |
| Cadastro do Fórum         | Postagens e interações dos usuários   | Banco de conhecimento compartilhado      |
| Cadastro de Dicas         | Dicas personalizadas                  | Recomendações para redução de consumo    |

Localização dos Processos Na Residência:** Medidor inteligente coleta e transmite dados.No Servidor na Nuvem: Sistema processa dados, identifica padrões e gera relatórios. No App/Site do Usuário:** Acesso a consumo, alertas, fórum e dicas.No Painel do Administrador: Equipes de suporte gerenciam dispositivos e monitoram desempenho.
Participantes do Processo Medidores Inteligentes: Coletam dados de consumo.Sistema de Monitoramento:** Processa informações e gera insights. Usuários: Cadastram eletrodomésticos, interagem no fórum e recebem dicas. Equipe Técnica: Mantém dispositivos e servidores. Administradores: Supervisionam desempenho e gerenciam acessos.

Produtos de Informação Relatórios de Consumo: Histórico detalhado com gráficos e comparações. Alertas de Consumo Elevado: Notificações em tempo real. Relatórios Técnicos: Logs de funcionamento do sistema. Relatórios de Gestão:** Dados analíticos para otimização energética. Dicas Personalizadas:** Sugestões baseadas no perfil de consumo.

Conexão com a Arquitetura do Software - Usuários e Permissões:** Perfis diferenciados (morador, administrador, técnico).
Banco de Dados: Estrutura ampliada para suportar novos recursos: - Tabela Eletrodomésticos (id, usuário_id, nome, potência, tempo_uso) - Tabela Fórum (id, usuário_id, postagem, data) - Tabela Dicas (id, categoria, conteúdo) - Tabela Usuários (id, nome, e-mail, tipo) - Tabela Medidores (id, residência, status) - Tabela Registros de Consumo (medidor_id, timestamp, consumo) - Tabela Alertas (usuário_id, tipo, data) - Tabela Relatórios (usuário_id, período, dados)

# 3.1. Modelagem da situação atual (Modelagem AS IS)
Atualmente, muitas pessoas enfrentam problemas com contas de luz elevadas, o que representa um grande impacto financeiro, principalmente em residências que possuem um uso descontrolado de energia. Isso acontece por diversas razões:
 
 Falta de Informação Clara
 Muitas vezes, os usuários não têm uma visão detalhada e compreensível do seu consumo de energia. As informações fornecidas pelas distribuidoras de energia são, em geral, complexas e difíceis de interpretar, o que gera desconhecimento sobre o consumo real.
 
 Dificuldade de Identificação de Padrões de Consumo
 O consumo de energia muitas vezes é afetado por práticas diárias que podem ser difíceis de identificar sem uma análise detalhada. Lâmpadas deixadas acesas, aparelhos em stand-by ou uso excessivo de aquecedores são exemplos de fatores que podem aumentar a conta de luz, 
 mas que muitas pessoas não percebem no dia a dia.
 
 Processos Manuais e Fragmentados
 Em muitos casos, os consumidores tentam monitorar o consumo de energia por conta própria, seja com anotações manuais ou por meio de ferramentas complicadas. Isso gera retrabalho, erros de cálculo e confusão.
 
 Falta de Ações Corretivas
 Sem uma ferramenta clara e acessível para identificar o consumo elevado, muitos consumidores não conseguem tomar ações corretivas a tempo. Isso resulta em alta frequência de contas de energia elevadas, o que afeta o orçamento doméstico e impacta negativamente o meio 
 ambiente devido ao consumo excessivo.
 
 Problemas Identificados
 Os principais problemas associados a esse cenário são:
 Desconhecimento do Consumo Real: O consumidor muitas vezes não tem uma visão clara de quando ou por que está gastando mais energia. Dificuldade de Ação: A falta de ferramentas fáceis de usar impede que os consumidores tomem decisões rápidas para reduzir o consumo, como desligar aparelhos quando não estão em uso. Impacto Econômico e Ambiental: O consumo elevado de energia não só resulta em contas altas, mas também contribui para maiores emissões de CO2, impactando negativamente o meio ambiente.
 
Solução Proposta com a Automação
 O uso de nosso aplicativo de monitoramento de consumo de energia propõe uma solução simples, intuitiva e eficiente para resolver esses problemas:
 Interface Simples e Acessível
 
 Solução**: O aplicativo oferece uma interface amigável e de fácil compreensão, com linguagem clara e simples, ideal até mesmo para idosos.
 Benefício**: Com isso, qualquer usuário, independentemente da idade, poderá compreender seu consumo de energia e tomar decisões informadas para reduzi-lo.
 
 Monitoramento em Tempo Real
 Solução: O sistema irá monitorar o consumo de energia em tempo real, identificando o gasto energético de cada aparelho individualmente e fornecendo dados atualizados sobre o consumo diário e mensal de cada dispositivo. Benefício: Os usuários terão uma visão 
 instantânea e precisa do que estão gastando, permitindo que tomem ações corretivas imediatas (como desligar aparelhos ou otimizar o uso de energia).
 
 Alertas e Recomendações Personalizadas
 Solução: O aplicativo enviará alertas automáticos caso o consumo ultrapasse um limite preestabelecido ou se identificar padrões de consumo elevados.Benefício**: Os usuários receberão alertas de como reduzir o consumo de energia.
 
 Relatórios Simples e Visuais
 Solução: O sistema gerará relatórios visuais e fáceis de entender, com gráficos simples que mostram o histórico de consumo.
 Benefício**: Esses relatórios permitem que os usuários vejam claramente a diferença de consumo de um aparelho para o outro.

# 3.2. Descrição geral da proposta (Modelagem TO BE)
A solução proposta busca otimizar o monitoramento do consumo de energia por meio intelignte. Com a introdução de um sistema digital integrado, os usuários terão acesso a dados em tempo real, notificações personalizadas e insights para reduzir desperdícios.

 Alinhamento com a Estratégia e Objetivos do Negócio
- Eficiência Energética: Permitir que os usuários identifiquem desperdícios e otimizem o uso de eletricidade.
- Acessibilidade e Usabilidade: Interface intuitiva, fácil de interpretar e adaptável para diferentes perfis de usuários.
- Automação de Processos: Redução da necessidade de monitoramento manual, tornando o acompanhamento do consumo mais preciso.
- Sustentabilidade: Incentivo a práticas mais ecológicas por meio de recomendações inteligentes.

Limitações da Solução
- Dependência de Hardware: Necessário o uso de medidores inteligentes compatíveis.
- Conectividade: O funcionamento em tempo real depende de conexão estável com a internet.
- Adoção pelo Usuário: Alguns usuários podem ter dificuldades na adaptação a novas tecnologias.


# 3.3. Modelagem dos processos

### Processo 1: Cadastro de usuários

Este processo automatiza o cadastro de novos usuários no sistema, desde o acesso ao formulário até a criação da conta e redirecionamento para a página de login. O usuário preenche seus dados, o sistema valida as informações, persiste o registro e fornece feedback imediato sobre sucesso ou erro.

![image](https://github.com/user-attachments/assets/3713b8de-3bb5-4254-9a20-43d7d9ddaa6e)

| **Processo**                | **Entradas**                                       | **Saídas**                                             |
|----------------------------|----------------------------------------------------|--------------------------------------------------------|
| Acessar página de cadastro | URL da aplicação                                   | Formulário de cadastro exibido                        |
| Preencher formulário       | Nome completo, E-mail, Senha, Confirmação de senha | Dados do formulário prontos para envio               |
| Enviar dados para o sistema| Dados do formulário                                | Requisição de cadastro enviada                        |
| Validar dados              | Dados do formulário                                | **Se válidos:** objeto DTO de usuário<br>**Se inválidos:** lista de erros de validação |
| Decisão: dados válidos?    | Resultado da validação                             | Fluxo "válido" ou "inválido"                          |
| Criar conta no banco de dados | DTO de usuário válido                           | Registro de usuário criado no BD                     |
| Reportar erro de validação | Lista de erros de validação                        | Mensagem de erro formatada para o usuário            |
| Redirecionar para página de login | Usuário criado com sucesso                  | Página de login exibida e toast "Cadastro realizado" |
| Armazenar log de auditoria | Evento de cadastro (sucesso/erro)                  | Entrada de log no sistema (audit trail)              |



### Processo 2: Login de Cadastro
Participantes: Usuário e Sistema.

O sistema permite que usuários façam login ou criem uma conta. Ele valida as credenciais informadas e, caso estejam corretas, concede acesso ao sistema. Se os dados forem inválidos, exibe mensagens de erro apropriadas. No caso de cadastro, o sistema valida os dados inseridos e cria a conta, permitindo o acesso logo em seguida.

Fluxo do Processo: 
![image](https://github.com/user-attachments/assets/36e22971-94a6-4068-872c-875910389d5c)


| **Processo**              | **Entradas**                       | **Saídas**                       |
| ------------------------- | ---------------------------------- | -------------------------------- |
| Inserir login e senha     | Dados do usuário                   | Credenciais inseridas            |
| Já tem conta?             | Credenciais inseridas              | Escolha entre login ou cadastro  |
| Validar Credenciais       | Dados do login                     | Login válido ou inválido         |
| Exibir erro de login      | Credenciais inválidas              | Mensagem de erro exibida         |
| Acessar sistema           | Login ou cadastro bem-sucedido     | Usuário dentro do sistema        |
| Preencher cadastro        | Dados pessoais do usuário          | Formulário preenchido            |
| Validar dados de cadastro | Formulário preenchido              | Dados válidos ou inválidos       |
| Exibir erro de cadastro   | Dados inválidos                    | Mensagem de erro                 |
| Criar conta               | Dados válidos                      | Conta criada                     |
| Credenciais válidas?      | Resultado da validação de login    | Direciona para acesso ou erro    |
| Dados válidos?            | Resultado da validação de cadastro | Conta criada ou exibição de erro |


### Processo 3: Gerar histórico de usuário 
participantes: Sistema e usuário.

Este processo tem como objetivo monitorar automaticamente os dados de consumo dos usuários, identificar padrões de consumo excessivo ou incomum, e notificar os usuários com alertas e sugestões de economia. Além disso, o sistema mantém um histórico das interações e decisões do usuário, permitindo o acompanhamento de melhorias e ajustes no consumo ao longo do tempo.
Fluxo do Processo:
![diagrama3](https://github.com/user-attachments/assets/6b69d933-aa4d-4037-9af9-caf9b32e8615)

| **Processo**                             | **Entradas**                                 | **Saídas**                                           |
|-----------------------------------------|----------------------------------------------|------------------------------------------------------|
| Receber dados de consumo                | Dados coletados dos dispositivos do usuário  | Dados disponíveis para validação                    |
| Validar dados recebidos                 | Dados brutos de consumo                      | Dados prontos para análise                          |
| Analisar padrão de consumo              | Dados validados                              | Padrão identificado / Detecção de anomalias         |
| Verificar consumo excessivo             | Padrão de consumo analisado                  | (Sim) → prosseguir com alerta / (Não) → registrar como normal |
| Registrar consumo normal                | Consumo dentro do padrão esperado            | Dados registrados no histórico                      |
| Gerar alerta                            | Consumo excessivo detectado                  | Alerta de consumo gerado                            |
| Gerar sugestão de economia              | Alerta gerado                                | Sugestão personalizada criada                       |
| Enviar notificação ao usuário           | Alerta e sugestão disponíveis                | Notificação entregue ao usuário                     |
| Receber notificação                     | Notificação enviada pelo sistema             | Ação do usuário iniciada (acesso à plataforma)      |
| Acessar plataforma                      | Notificação recebida                         | Tela de login aberta                                |
| Fazer login                             | E-mail e senha do usuário                    | Acesso concedido à conta                            |
| Visualizar alerta e sugestão           | Acesso à plataforma                          | Informações de alerta/sugestão exibidas             |
| Interagir com a sugestão               | Alerta e sugestão exibidos                   | (Sim) → aplicar sugestão / (Não) → apenas visualizar |
| Registrar sugestão aplicada             | Ação do usuário (aplicar sugestão)           | Sugestão registrada no histórico                    |
| Registrar visualização do alerta       | Ação do usuário (visualização sem ação)      | Visualização registrada no histórico                |

### Processo 4: Pesquisar Eletrodoméstico
Participantes: Sistema e Usuário

O sistema permite que o usuário utilize uma calculadora de consumo energético e pesquise eletrodomésticos com base em critérios inseridos manualmente. Após a busca, o sistema consulta o banco de dados e retorna os resultados encontrados, que são então exibidos para o usuário de forma simples e acessível:

Fluxo do Processo:
![image](https://github.com/user-attachments/assets/2e0e3e8d-d030-4c25-8b18-a4de05598574)

| **Processo**                     | **Entradas**               | **Saídas**                           |
| -------------------------------- | -------------------------- | ------------------------------------ |
| Abrir calculadora de consumo     | Acesso do usuário          | Tela da calculadora aberta           |
| Usar a calculadora               | Dados de consumo inseridos | Resultado do cálculo                 |
| Digitar nome do eletrodoméstico  | Nome digitado pelo usuário | Termo de busca                       |
| Receber solicitação de pesquisa  | Termo de busca             | Solicitação recebida                 |
| Buscar eletrodomésticos no banco | Solicitação recebida       | Lista de eletrodomésticos            |
| Retornar resultados da busca     | Lista de eletrodomésticos  | Resultados da busca                  |
| Visualizar resultados            | Resultados da busca        | Eletrodomésticos exibidos ao usuário |


### Oportunidades de Melhoria
- Personalização dos alertas com base no perfil do usuário.
- Automação de resposta, permitindo desligamento remoto de dispositivos.

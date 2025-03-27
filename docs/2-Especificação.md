# Especificações do Projeto
## Personas

1.	Maria Fernandes tem 64 anos, é professora aposentada e gosta de passar o tempo em casa lendo e cuidando do jardim. Ela se preocupa com os gastos domésticos e busca maneiras de economizar. Maria deseja reduzir sua conta de energia, mas não entende muito de tecnologia e precisa de informações simples e diretas. Seu maior desafio é identificar quais aparelhos consomem mais energia em sua casa. Para ela, um sistema fácil de usar, com explicações claras e didáticas, seria ideal. Seu objetivo é encontrar formas de economizar sem precisar investir em novos equipamentos caros.

2.	João Carlos tem 27 anos, é analista de marketing digital e mora sozinho em um apartamento alugado. Ele se preocupa com o impacto ambiental de suas ações e procura formas sustentáveis de viver. João quer otimizar seu consumo de energia para reduzir tanto seu impacto ambiental quanto os custos da conta de luz. Seu maior desafio é entender quais equipamentos trocar ou como utilizá-los de maneira mais eficiente. Ele busca aprender novas práticas sustentáveis e deseja interagir com outras pessoas no fórum para trocar experiências sobre economia de energia.
   
3.	Juliana Lopes tem 39 anos, é empresária e mãe de dois filhos. Como responsável pelo orçamento doméstico, está sempre buscando formas de reduzir gastos sem comprometer o conforto da família. Juliana quer controlar melhor o consumo energético da casa, já que os filhos utilizam muitos aparelhos eletrônicos diariamente. Seu desafio é encontrar sugestões viáveis para economizar sem precisar substituir todos os eletrodomésticos de uma vez. Seu objetivo é melhorar a eficiência do consumo de energia e ensinar hábitos mais sustentáveis para seus filhos.
	
4.	Rafael Martins tem 33 anos, é dono de uma cafeteria e se preocupa tanto com os custos do seu negócio quanto com a sustentabilidade. Ele quer adotar medidas ecológicas que também sejam financeiramente vantajosas. Além da conta de luz de sua casa, Rafael precisa entender como otimizar o consumo energético de seu estabelecimento. Seu maior desafio é encontrar informações claras sobre equipamentos mais eficientes e adaptar hábitos de consumo para reduzir gastos sem comprometer a operação do seu negócio. Seu objetivo é aprender a reduzir o consumo de energia no dia a dia e aplicar esse conhecimento para tornar sua cafeteria mais sustentável.
	
5.	Diego Souza tem 21 anos, é estudante de Engenharia Ambiental e mora em uma república com amigos. Ele é interessado em tecnologia e sustentabilidade, utilizando muitos eletrônicos para estudo e lazer. Diego deseja aprender mais sobre consumo energético e compartilhar conhecimento no fórum com outras pessoas interessadas no tema. Seu maior desafio é encontrar informações detalhadas e embasadas sobre o impacto dos aparelhos elétricos no consumo de energia. Seu objetivo é aplicar o conhecimento adquirido na faculdade para melhorar a eficiência energética em sua casa e influenciar seus amigos a adotarem práticas mais sustentáveis



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Maria Fernandes | Verificar de forma simples quais eletrodomesticos estão pesando na conta de luz | Diminuir o custo da conta sem precisar comprar equipamentos novos. |
|João Carlos | Verificar quais eletrodomesticos são mais sustetaveis para a natureza em longo prazo | Ter uma vida mais Sustentável |
|Diego Souza | Interagir no forum | Aprender mais sobre sustentabilidade  |
|Juliana Lopes | Receber dicas práticas para ensinar meus filhos a economizar energia | Controlar os gastos da casa e criar hábitos sustentáveis na família. |




## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir que o usuário realize cadastro e login (e-mail e senha). | ALTA | 
|RF-002| O sistema deve permitir que o usuário pesquise eletrodomésticos por nome, categoria ou eficiência energética. | ALTA |
|RF-003| Permitir que o usuário crie posts/tópicos no fórum. | ALTA |
|RF-004| Permitir que o usuário comente em posts existentes no fórum. | BAIXA |
|RF-005| O sistema deve exibir uma tela detalhada do eletrodoméstico com dados de consumo, comparação com modelos eficientes e dicas de economia. | ALTA |
|RF-006| Desenvolver a tela de histórico de visualizações dos eletrodomésticos pesquisados. | BAIXA |
|RF-007| O sistema deve permitir que moderadores apaguem ou editem posts/comentários inapropriados. | BAIXA |
|RF-008| O sistema deve permitir que administradores cadastrem/atualizem dados de eletrodomésticos no banco de dados. | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema deve garantir criptografia de dados (HTTPS e hash para senhas). |  BAIXA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |





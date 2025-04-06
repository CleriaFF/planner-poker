

# planner-poker
Projeto Angular de uma aplicação de <ins>Planning Poker</ins>, utilizando arquitetura hexagonal.

A arquitetura hexagonal separa a lógica de negócio (domínio) das camadas externas (como UI, APIs, ou serviços), utilizando "portas" (interfaces) e "adaptadores" (implementações). No caso do Angular, isso significa isolar a lógica de negócio dos componentes visuais e serviços HTTP, por exemplo.


# Adapters
- São implementações das portas, eles traduzem as chamadas do domínio à recursos externos e vice-versa
    - primários: São os adaptadores de entrada (ou "driving adapters"). Eles iniciam a interação com o sistema, enviando comandos ou solicitações para o núcleo da aplicação.
Traduzem ações do mundo externo (como cliques do usuário, chamadas de API REST recebidas, etc.) em chamadas para as portas de entrada definidas no domínio. (MUNDO EXTERNO PARA O NÚCLEO)
    
    - secundários: São os adaptadores de saída (ou "driven adapters"). Eles são acionados pelo núcleo da aplicação para interagir com sistemas externos (banco de dados, APIs, armazenamento, etc.). Implementam as portas de saída definidas no domínio, conectando a lógica de negócio a tecnologias específicas (ex.: HTTP, localStorage)

# Domain
 É o núcleo da arquitetura, contendo entidades e regras de negócio. É o "coração" da aplicação, onde é definido o que ela faz, mas não como ela se conecta ao mundo externo.
(Entidades e Regras de negócio).

# Ports 
Interfaces que definem como o domínio se comunica com o exterior.

> [!Info]
> Os adaptadores (primários ou secundários) implementam essas interfaces, conectando o domínio ao mundo real.
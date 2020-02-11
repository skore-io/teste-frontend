<h1 align="center">Teste Frontend</h1>
<h5 align="center">Nosso teste para conhecer como você codifica no dia-dia</h5>

### Tecnologias na Skore

Nossa stack é a seguinte:

- VueJS
- Nuxt
- Javascript

Sugerimos que tente utilizar o mais próximo disso, mas sinta-se à vontade para utilizar o que te deixar mais confortável
e que consiga demonstrar o seu melhor.

### Observações

Esta é uma avaliação básica de código.

O objetivo é conhecer um pouco do seu conhecimento/práticas código.

Recomendamos que você não gaste mais do que 4 - 6 horas.

Faça um fork deste repositório.

Ao finalizar o teste, submeta um pull request para o repositório que nosso time será notificado.

### Tarefas

No skore temos uma feature que chamamos de missões, que podemos associar com cursos no nosso dia-dia.

Sua tarefa é construir a página que apresenta um resumos das missões de um usuário

Com a seguinte representação de uma lista de resumo de missões:

```json
{
  "items": [
    {
      "id": "15a9LAUXCm9FkAVexH4q",
      "company_id": "114",
      "name": "Desenvolvedor Backend",
      "thumb_url": "https://img.skore.io/image/upload/v1566918438/retool/c6mjszo.png",
      "priority": 1,
      "due_date": {
        "available_at": 1572127435329
      },
      "status": "IN_PROGRESS",
      "enrollment": {
        "id": "114_15a9LAUXCm9FkAVexH4q_453995",
        "percentage": 21
      }
    },
    {
      "id": "OgYPcZXbYgHQCFCS3b8a",
      "company_id": "114",
      "name": "Desenvolvedor Frontend",
      "thumb_url": "https://img.skore.io/image/upload/v1566918438/retool/c6mjszo.png",
      "priority": 1,
      "due_date": {
        "available_at": 1577460755435
      },
      "status": "NOT_STARTED"
    },
    {
      "id": "0DynFIwidEoqpJxbpmQK",
      "company_id": "114",
      "name": "Desenvolvedor iOS",
      "thumb_url": "https://img.skore.io/image/upload/v1566918438/retool/c6mjszo.png",
      "priority": 1,
      "status": "IN_PROGRESS",
      "enrollment": {
        "id": "114_0DynFIwidEoqpJxbpmQK_453995",
        "percentage": 63
      },
      "due_date": null
    },
    {
      "id": "3b0557ab-c9d6-40e8-9a62-5f0b012cafe7",
      "company_id": "114",
      "name": "Desenvolvedor Android",
      "thumb_url": null,
      "priority": 1,
      "status": "COMPLETED",
      "enrollment": {
        "id": "114_3b0557ab-c9d6-40e8-9a62-5f0b012cafe7_453995",
        "percentage": 100
      },
      "due_date": null
    },
    {
      "id": "Jx0TJYrLFhYOeIc4boBL",
      "company_id": "114",
      "name": "Desenvolvedor Flutter",
      "thumb_url": "https://img.skore.io/image/upload/v1566918438/retool/c6mjszo.png",
      "priority": 1,
      "status": "NOT_STARTED",
      "due_date": null
    },
    {
      "id": "Jx0TJYrLFhYOeIc4boBL",
      "company_id": "114",
      "name": "Site Reliability Engineer",
      "thumb_url": "https://img.skore.io/image/upload/v1566918438/retool/c6mjszo.png",
      "priority": 1,
      "status": "BLOCKED",
      "due_date": null
    }
  ]
}
```

Construa uma aplicação que renderize da maneira mais próxima desse print:

![Alt text](pages.png?raw=true "Print Exemplo")

### Dicas

- O layout não precisa ser exatamente igual ao do print
- Sinta-se a vontade para fazer adaptações
- Caso tenha alguma dúvida, tome uma decisão e explique no PR
- Testes são sempre bem-vindos :smiley:

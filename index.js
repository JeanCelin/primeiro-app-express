import express from "express";

const server = express();

server.get("/books", (req, res) => {
  return res.json([
    {
      id: 1,
      title: "Star Wars",
      author: "George Lucas",
      theme: "ficcao-cientifica",
      description:
        "Trilogia épica de ação e aventura no espaço, explorando a luta entre o bem e o mal em uma galáxia distante.",
      anoPublicacao: 1977,
      paginas: 320,
    },
    {
      id: 2,
      title: "Dom Quixote",
      author: "Miguel de Cervantes",
      theme: "aventura",
      description:
        "Um fidalgo enlouquecido pelas histórias de cavalaria decide se tornar cavaleiro andante e viver grandes aventuras.",
      anoPublicacao: 1605,
      paginas: 863,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      theme: "distopia",
      description:
        "Uma crítica ao totalitarismo e à vigilância extrema, ambientada em um futuro sombrio e opressor.",
      anoPublicacao: 1949,
      paginas: 328,
    },
    {
      id: 4,
      title: "O Senhor dos Anéis",
      author: "J.R.R. Tolkien",
      theme: "fantasia",
      description:
        "Uma jornada épica pela Terra-média em busca de destruir o Um Anel e derrotar o Senhor do Escuro.",
      anoPublicacao: 1954,
      paginas: 1178,
    },
    {
      id: 5,
      title: "Harry Potter e a Pedra Filosofal",
      author: "J.K. Rowling",
      theme: "juvenil",
      description:
        "Um jovem descobre ser um bruxo e entra em um mundo mágico cheio de aventuras e mistérios.",
      anoPublicacao: 1997,
      paginas: 223,
    },
    {
      id: 6,
      title: "A Revolução dos Bichos",
      author: "George Orwell",
      theme: "filosofia",
      description:
        "Uma fazenda tomada por animais que tentam criar uma sociedade igualitária, mas acabam reproduzindo as injustiças humanas.",
      anoPublicacao: 1945,
      paginas: 152,
    },
    {
      id: 7,
      title: "O Pequeno Príncipe",
      author: "Antoine de Saint-Exupéry",
      theme: "infantil",
      description:
        "Um menino vindo de outro planeta ensina lições profundas sobre amor, amizade e o sentido da vida.",
      anoPublicacao: 1943,
      paginas: 96,
    },
    {
      id: 8,
      title: "It: A Coisa",
      author: "Stephen King",
      theme: "terror",
      description:
        "Um grupo de amigos enfrenta uma criatura maligna que se alimenta dos medos e das crianças de uma pequena cidade.",
      anoPublicacao: 1986,
      paginas: 1104,
    },
    {
      id: 9,
      title: "Orgulho e Preconceito",
      author: "Jane Austen",
      theme: "romance",
      description:
        "Um retrato elegante e irônico da sociedade inglesa do século XIX e das complexidades do amor e do casamento.",
      anoPublicacao: 1813,
      paginas: 432,
    },
    {
      id: 10,
      title: "O Código Da Vinci",
      author: "Dan Brown",
      theme: "suspense",
      description:
        "Um professor de simbologia é envolvido em uma conspiração que liga a Igreja, sociedades secretas e mistérios históricos.",
      anoPublicacao: 2003,
      paginas: 480,
    },
    {
      id: 11,
      title: "Mindset: A Nova Psicologia do Sucesso",
      author: "Carol S. Dweck",
      theme: "autoajuda",
      description:
        "Explora como a mentalidade influencia o sucesso pessoal e profissional, com base em décadas de pesquisa em psicologia.",
      anoPublicacao: 2006,
      paginas: 320,
    },
    {
      id: 12,
      title: "Minha História",
      author: "Michelle Obama",
      theme: "autobiografia",
      description:
        "A trajetória inspiradora da ex-primeira-dama dos Estados Unidos, desde a infância até a Casa Branca.",
      anoPublicacao: 2018,
      paginas: 464,
    },
    {
      id: 13,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      theme: "biografia",
      description:
        "A vida e o legado do fundador da Apple, com base em entrevistas exclusivas e depoimentos de pessoas próximas.",
      anoPublicacao: 2011,
      paginas: 656,
    },
    {
      id: 14,
      title: "O Príncipe",
      author: "Nicolau Maquiavel",
      theme: "filosofia",
      description:
        "Uma análise realista do poder político e da liderança, escrita no século XVI e ainda atual.",
      anoPublicacao: 1532,
      paginas: 192,
    },
    {
      id: 15,
      title: "Pai Rico, Pai Pobre",
      author: "Robert T. Kiyosaki",
      theme: "negocios",
      description:
        "Uma abordagem sobre educação financeira e mentalidade de riqueza, contrastando dois estilos de pensamento sobre dinheiro.",
      anoPublicacao: 1997,
      paginas: 336,
    },
  ]);
});

server.listen(3000);

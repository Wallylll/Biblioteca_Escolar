/*const livros = [
  {
    id: "bk001",
    nome: "Sombras do Amanhã",
    autor: "Lucas Andrade",
    editora: "Horizonte Editorial",
    dataLancamento: "2011-02-14",
    genero: "Ficção Científica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9874851-L.jpg"
  },
  {
    id: "bk002",
    nome: "Caminhos de Areia",
    autor: "Marta Pires",
    editora: "Editora Horizonte",
    dataLancamento: "2015-07-09",
    genero: "Romance",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8228752-L.jpg"
  },
  {
    id: "bk003",
    nome: "O Último Jardim",
    autor: "Renato Mota",
    editora: "Vértice Press",
    dataLancamento: "2019-06-03",
    genero: "Fantasia",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9876310-L.jpg"
  },
  {
    id: "bk004",
    nome: "Ecos de Silêncio",
    autor: "Juliana Tavares",
    editora: "Lume Literário",
    dataLancamento: "2017-09-25",
    genero: "Drama",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9256721-L.jpg"
  },
  {
    id: "bk005",
    nome: "A Lenda de Seraphim",
    autor: "Diego Neves",
    editora: "Mundo Novo",
    dataLancamento: "2020-12-11",
    genero: "Fantasia Épica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9872404-L.jpg"
  },
  {
    id: "bk006",
    nome: "Códigos e Sombras",
    autor: "André Vilela",
    editora: "TechBooks",
    dataLancamento: "2014-03-30",
    genero: "Suspense Tecnológico",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9123451-L.jpg"
  },
  {
    id: "bk007",
    nome: "Jardins Invisíveis",
    autor: "Paula Duarte",
    editora: "Editora Aurora",
    dataLancamento: "2018-08-21",
    genero: "Poesia",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8342512-L.jpg"
  },
  {
    id: "bk008",
    nome: "O Guardião da Chuva",
    autor: "Caio Albuquerque",
    editora: "Sol Nascente",
    dataLancamento: "2013-04-18",
    genero: "Ficção Fantástica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8245222-L.jpg"
  },
  {
    id: "bk009",
    nome: "Fragmentos do Tempo",
    autor: "Larissa Mendes",
    editora: "Estação Letras",
    dataLancamento: "2016-10-04",
    genero: "Ficção Histórica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/11153210-L.jpg"
  },
  {
    id: "bk010",
    nome: "Ventos do Norte",
    autor: "Rogério Bastos",
    editora: "Alvorada",
    dataLancamento: "2021-02-10",
    genero: "Aventura",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610310-L.jpg"
  },
  {
    id: "bk011",
    nome: "Crônicas do Deserto",
    autor: "Lívia Souza",
    editora: "Ponto Final",
    dataLancamento: "2010-08-08",
    genero: "Aventura / Mitologia",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9871121-L.jpg"
  },
  {
    id: "bk012",
    nome: "Os Segredos do Mar",
    autor: "Thiago Melo",
    editora: "Mar Azul",
    dataLancamento: "2013-01-17",
    genero: "Fantasia / Natureza",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8251742-L.jpg"
  },
  {
    id: "bk013",
    nome: "Sussurros da Cidade",
    autor: "Marina Freitas",
    editora: "Editora Reflexo",
    dataLancamento: "2018-05-14",
    genero: "Realismo Urbano",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8221234-L.jpg"
  },
  {
    id: "bk014",
    nome: "O Livro das Horas",
    autor: "César Nogueira",
    editora: "Tempo Editorial",
    dataLancamento: "2020-11-19",
    genero: "Ficção Filosófica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610401-L.jpg"
  },
  {
    id: "bk015",
    nome: "Entre o Céu e a Névoa",
    autor: "Rafaela Lima",
    editora: "Névoa Editora",
    dataLancamento: "2017-07-23",
    genero: "Romance Sobrenatural",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/11153142-L.jpg"
  },
  {
    id: "bk016",
    nome: "Páginas Perdidas",
    autor: "Henrique Cardoso",
    editora: "Biblios",
    dataLancamento: "2012-09-01",
    genero: "Mistério",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9262121-L.jpg"
  },
  {
    id: "bk017",
    nome: "O Som das Montanhas",
    autor: "Aiko Tanaka",
    editora: "Hanami Books",
    dataLancamento: "2015-12-09",
    genero: "Ficção Japonesa",
    linguagem: "Japonês",
    ilustracao: "https://covers.openlibrary.org/b/id/9876643-L.jpg"
  },
  {
    id: "bk018",
    nome: "Luz em Meio ao Caos",
    autor: "Fernando Brito",
    editora: "Sirius Editorial",
    dataLancamento: "2023-03-07",
    genero: "Drama Contemporâneo",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610143-L.jpg"
  },
  {
    id: "bk019",
    nome: "Cartas para o Infinito",
    autor: "Isabela Monteiro",
    editora: "Verbo Editora",
    dataLancamento: "2022-04-12",
    genero: "Romance Epistolar",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610199-L.jpg"
  },
  {
    id: "bk020",
    nome: "Sombras e Lembranças",
    autor: "Rodrigo Pacheco",
    editora: "Escarlate Press",
    dataLancamento: "2019-09-27",
    genero: "Suspense Psicológico",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9875542-L.jpg"
  },
  {
    id: "bk021",
    nome: "Corações em Cinza",
    autor: "Beatriz Campos",
    editora: "Viva Letras",
    dataLancamento: "2011-10-10",
    genero: "Drama / Romance",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8256211-L.jpg"
  },
  {
    id: "bk022",
    nome: "Labirinto de Espelhos",
    autor: "Daniel Azevedo",
    editora: "Miragem Editorial",
    dataLancamento: "2017-05-04",
    genero: "Thriller",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8336721-L.jpg"
  },
  {
    id: "bk023",
    nome: "O Astrônomo Cego",
    autor: "Vítor Farias",
    editora: "Editora Celeste",
    dataLancamento: "2015-01-11",
    genero: "Ficção Científica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9261111-L.jpg"
  },
  {
    id: "bk024",
    nome: "As Chamas do Inverno",
    autor: "Carolina Braga",
    editora: "Inverno Editorial",
    dataLancamento: "2016-11-02",
    genero: "Romance Histórico",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/11153012-L.jpg"
  },
  {
    id: "bk025",
    nome: "Memórias Submersas",
    autor: "Eduardo Ramos",
    editora: "Ânfora",
    dataLancamento: "2010-03-15",
    genero: "Mistério",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9871101-L.jpg"
  },
  {
    id: "bk026",
    nome: "Códigos do Vento",
    autor: "Felipe Souza",
    editora: "Eólica",
    dataLancamento: "2021-07-20",
    genero: "Aventura",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610021-L.jpg"
  },
  {
    id: "bk027",
    nome: "O Poeta e o Relógio",
    autor: "Guilherme Lobo",
    editora: "Tempo Novo",
    dataLancamento: "2024-02-01",
    genero: "Poesia / Filosofia",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610444-L.jpg"
  },
  {
    id: "bk028",
    nome: "As Marés do Destino",
    autor: "Helena Silva",
    editora: "Maré Alta",
    dataLancamento: "2022-10-18",
    genero: "Romance",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610052-L.jpg"
  },
  {
    id: "bk029",
    nome: "Mundos Paralelos",
    autor: "João Costa",
    editora: "Universo Editora",
    dataLancamento: "2018-04-02",
    genero: "Ficção Científica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9873312-L.jpg"
  },
  {
    id: "bk030",
    nome: "O Som das Estrelas",
    autor: "Laura Fernandes",
    editora: "Constelação",
    dataLancamento: "2023-08-11",
    genero: "Fantasia / Romance",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610400-L.jpg"
  },
  {
    id: "bk031",
    nome: "As Cores da Noite",
    autor: "Miguel Borges",
    editora: "Noctis",
    dataLancamento: "2012-12-05",
    genero: "Suspense / Drama",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8256723-L.jpg"
  },
  {
    id: "bk032",
    nome: "Diário de Uma Sombra",
    autor: "Nathalia Duarte",
    editora: "Sombra Editorial",
    dataLancamento: "2019-02-21",
    genero: "Terror Psicológico",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9877721-L.jpg"
  },
  {
    id: "bk033",
    nome: "Planícies de Fogo",
    autor: "Otávio Campos",
    editora: "Terra Vermelha",
    dataLancamento: "2013-09-09",
    genero: "Aventura Épica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9245112-L.jpg"
  },
  {
    id: "bk034",
    nome: "A Casa das Sombras",
    autor: "Patrícia Leme",
    editora: "Escuridão Books",
    dataLancamento: "2016-10-10",
    genero: "Terror / Mistério",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9872723-L.jpg"
  },
  {
    id: "bk035",
    nome: "Luzes do Outono",
    autor: "Ricardo Valença",
    editora: "Folha Dourada",
    dataLancamento: "2020-11-07",
    genero: "Romance",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/11153300-L.jpg"
  },
  {
    id: "bk036",
    nome: "Som do Infinito",
    autor: "Sara Albuquerque",
    editora: "Harmonia",
    dataLancamento: "2018-06-28",
    genero: "Poesia",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8227211-L.jpg"
  },
  {
    id: "bk037",
    nome: "Além da Névoa",
    autor: "Tiago Moura",
    editora: "Horizonte Cinza",
    dataLancamento: "2014-05-05",
    genero: "Fantasia",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9876411-L.jpg"
  },
  {
    id: "bk038",
    nome: "O Enigma das Estátuas",
    autor: "Vanessa Prado",
    editora: "Misterium",
    dataLancamento: "2021-01-19",
    genero: "Mistério / Policial",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610377-L.jpg"
  },
  {
    id: "bk039",
    nome: "Guardiões do Tempo",
    autor: "William Tavares",
    editora: "Cronos Books",
    dataLancamento: "2017-08-22",
    genero: "Ficção Científica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9873222-L.jpg"
  },
  {
    id: "bk040",
    nome: "Lágrimas de Ouro",
    autor: "Ximena Ortiz",
    editora: "Sol de Andaluzia",
    dataLancamento: "2015-04-14",
    genero: "Romance Histórico",
    linguagem: "Espanhol",
    ilustracao: "https://covers.openlibrary.org/b/id/8224123-L.jpg"
  },
  {
    id: "bk041",
    nome: "O Retorno do Rei Esquecido",
    autor: "Yuri Castro",
    editora: "Coroa de Ferro",
    dataLancamento: "2019-11-13",
    genero: "Fantasia Épica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9877411-L.jpg"
  },
  {
    id: "bk042",
    nome: "Crônicas da Neve Eterna",
    autor: "Zélia Mendes",
    editora: "Inverno Eterno",
    dataLancamento: "2023-07-29",
    genero: "Fantasia / Aventura",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610455-L.jpg"
  },
  {
    id: "bk043",
    nome: "A Ponte e o Abismo",
    autor: "Alice Vieira",
    editora: "Verbo e Vento",
    dataLancamento: "2016-05-18",
    genero: "Drama Filosófico",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9253412-L.jpg"
  },
  {
    id: "bk044",
    nome: "O Código dos Sonhos",
    autor: "Bruno Ribeiro",
    editora: "Onírica",
    dataLancamento: "2022-09-10",
    genero: "Ficção / Mistério",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610092-L.jpg"
  },
  {
    id: "bk045",
    nome: "Maré Alta",
    autor: "Camila Torres",
    editora: "Ondas Editora",
    dataLancamento: "2018-01-15",
    genero: "Romance Contemporâneo",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9875511-L.jpg"
  },
  {
    id: "bk046",
    nome: "A Estrada da Eternidade",
    autor: "Denis Guimarães",
    editora: "Caminho Editorial",
    dataLancamento: "2013-08-04",
    genero: "Filosofia / Ficção",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8229901-L.jpg"
  },
  {
    id: "bk047",
    nome: "Sombras do Luar",
    autor: "Elisa Prado",
    editora: "Noturna Press",
    dataLancamento: "2015-02-17",
    genero: "Romance Sobrenatural",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8342111-L.jpg"
  },
  {
    id: "bk048",
    nome: "O Último Navegante",
    autor: "Fábio Lima",
    editora: "Horizonte Azul",
    dataLancamento: "2020-12-30",
    genero: "Aventura / Ficção",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610033-L.jpg"
  },
  {
    id: "bk049",
    nome: "Letras de Ferro",
    autor: "Gabriela Mota",
    editora: "Forja Literária",
    dataLancamento: "2017-06-12",
    genero: "Distopia",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9873111-L.jpg"
  },
  {
    id: "bk050",
    nome: "O Céu de Novembro",
    autor: "Heitor Braga",
    editora: "Luz do Norte",
    dataLancamento: "2024-05-22",
    genero: "Romance Contemporâneo",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610499-L.jpg"
  }
];

export default livros;
*/

const livros = [
  {
    id: "bk001",
    nome: "Sombras do Amanhã",
    autor: "Lucas Andrade",
    editora: "Horizonte Editorial",
    dataLancamento: "2011-02-14",
    genero: "Ficção Científica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9874851-L.jpg",
    sinopse: "Em um futuro distópico, um cientista tenta salvar o mundo de uma catástrofe temporal causada por suas próprias invenções.",
    unidades: 3
  },
  {
    id: "bk002",
    nome: "Caminhos de Areia",
    autor: "Marta Pires",
    editora: "Editora Horizonte",
    dataLancamento: "2015-07-09",
    genero: "Romance",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8228752-L.jpg",
    sinopse: "Um romance sobre amor, perda e recomeços em meio às dunas de uma pequena vila litorânea.",
    unidades: 0
  },
  {
    id: "bk003",
    nome: "O Último Jardim",
    autor: "Renato Mota",
    editora: "Vértice Press",
    dataLancamento: "2019-06-03",
    genero: "Fantasia",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9876310-L.jpg",
    sinopse: "Num mundo devastado, uma jovem jardineira descobre o último fragmento de vida capaz de restaurar o planeta.",
    unidades: 5
  },
  {
    id: "bk004",
    nome: "Ecos de Silêncio",
    autor: "Juliana Tavares",
    editora: "Lume Literário",
    dataLancamento: "2017-09-25",
    genero: "Drama",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9256721-L.jpg",
    sinopse: "Uma escritora em crise criativa retorna à sua cidade natal e confronta traumas que ecoam no silêncio de seu passado.",
    unidades: 2
  },
  {
    id: "bk005",
    nome: "A Lenda de Seraphim",
    autor: "Diego Neves",
    editora: "Mundo Novo",
    dataLancamento: "2020-12-11",
    genero: "Fantasia Épica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9872404-L.jpg",
    sinopse: "Heróis esquecidos e forças antigas colidem quando o reino de Seraphim enfrenta sua maior ameaça.",
    unidades: 7
  },
  {
    id: "bk006",
    nome: "Códigos e Sombras",
    autor: "André Vilela",
    editora: "TechBooks",
    dataLancamento: "2014-03-30",
    genero: "Suspense Tecnológico",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/9123451-L.jpg",
    sinopse: "Um hacker é perseguido após decifrar um código secreto que pode expor uma conspiração global.",
    unidades: 4
  },
  {
    id: "bk007",
    nome: "Jardins Invisíveis",
    autor: "Paula Duarte",
    editora: "Editora Aurora",
    dataLancamento: "2018-08-21",
    genero: "Poesia",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8342512-L.jpg",
    sinopse: "Uma coletânea poética sobre a natureza invisível dos sentimentos e das memórias perdidas.",
    unidades: 1
  },
  {
    id: "bk008",
    nome: "O Guardião da Chuva",
    autor: "Caio Albuquerque",
    editora: "Sol Nascente",
    dataLancamento: "2013-04-18",
    genero: "Ficção Fantástica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/8245222-L.jpg",
    sinopse: "Uma história mágica sobre um menino que pode controlar a chuva e o destino das colheitas.",
    unidades: 0
  },
  {
    id: "bk009",
    nome: "Fragmentos do Tempo",
    autor: "Larissa Mendes",
    editora: "Estação Letras",
    dataLancamento: "2016-10-04",
    genero: "Ficção Histórica",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/11153210-L.jpg",
    sinopse: "Cartas e memórias entrelaçam as vidas de duas pessoas separadas por um século.",
    unidades: 6
  },
  {
    id: "bk010",
    nome: "Ventos do Norte",
    autor: "Rogério Bastos",
    editora: "Alvorada",
    dataLancamento: "2021-02-10",
    genero: "Aventura",
    linguagem: "Português",
    ilustracao: "https://covers.openlibrary.org/b/id/12610310-L.jpg",
    sinopse: "Um explorador enfrenta os ventos gelados do norte em busca de um artefato lendário perdido.",
    unidades: 3
  }
];

export default livros;

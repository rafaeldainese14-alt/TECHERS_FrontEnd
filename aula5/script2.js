
// const nomes = ['Superman','Batman','Spiderman']

// nome[0] = 'Green lantern'

// nome[2] = 'wonder woman'



const datainfo = [
    "Um cientista brilhante que sofreu mutações genéticas após um experimento dar errado. Curt Connors se transforma no monstruoso Lagarto, lutando entre sua mente humana e seus instintos animais.",
    "Um jovem fotógrafo rival de Peter Parker que se liga a um simbionte alienígena. Como Venom, ele ganha força, agilidade e um forte desejo de destruir o Homem-Aranha.",
    "Um criminoso ambicioso que usa uma armadura verde equipada com planador, bombas e tecnologia avançada. O Duende Verde se torna um dos inimigos mais perigosos do Homem-Aranha.",
    "Um engenheiro elétrico que ganha poderes após um acidente envolvendo energia experimental. Electro consegue controlar e disparar eletricidade devastadora.",
    "Um criminoso de baixo escalão que recebe um traje especial capaz de criar vibrações sônicas destrutivas, permitindo que ele execute grandes assaltos como o vilão Shocker."
  ];
  
  const headings = [
    "Lagarto",
    "Venom",
    "Duende Verde",
    "Electro",
    "Shocker"
  ];

  const imgScr = [
    'hh.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/ccaf5fa87b7acd332f7c008b43fe82c5488fd04a00a408fde6e24803ac54decf.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/ccaf5fa87b7acd332f7c008b43fe82c5488fd04a00a408fde6e24803ac54decf.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/ccaf5fa87b7acd332f7c008b43fe82c5488fd04a00a408fde6e24803ac54decf.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/ccaf5fa87b7acd332f7c008b43fe82c5488fd04a00a408fde6e24803ac54decf.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/ccaf5fa87b7acd332f7c008b43fe82c5488fd04a00a408fde6e24803ac54decf.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/ccaf5fa87b7acd332f7c008b43fe82c5488fd04a00a408fde6e24803ac54decf.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/ccaf5fa87b7acd332f7c008b43fe82c5488fd04a00a408fde6e24803ac54decf.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/ccaf5fa87b7acd332f7c008b43fe82c5488fd04a00a408fde6e24803ac54decf.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/ccaf5fa87b7acd332f7c008b43fe82c5488fd04a00a408fde6e24803ac54decf.jpg'
  ]

  const imgCard = document.getElementsByClassName('img-card')
  const titulo = document.getElementsByClassName('titulo')
  const info = document.getElementsByClassName('info')

  for(let i = 0; i < 10 ; i++){
    imgCard[i].setAttribute("scr", imgScr[i])
    titulo[i].textContent = headings[i]
    info[i].textContent = datainfo[i]
  }
/* =========================================================
   Scoop — Culture G (contenu permanent)
   Même format que data/units.js. Uniquement des faits établis et vérifiables
   (dates, œuvres, institutions) ; chaque fiche cite les repères essentiels.
   ========================================================= */
window.SCOOP_CULTURE = [
  /* ------------------------------------------------------- */
  {
    id: 'histfr', title: 'Histoire de France', subtitle: 'Des rois à la Ve République', icon: '🏰', color: '#B5651D',
    guide: [
      '**1598** : édit de Nantes (Henri IV). **14 juillet 1789** : prise de la Bastille. **26 août 1789** : Déclaration des droits de l\'homme et du citoyen.',
      '**1804** : sacre de Napoléon et Code civil. **1870** : proclamation de la IIIe République (4 septembre). **1881-1882** : lois Ferry (école gratuite, laïque et obligatoire).',
      '**1905** : séparation des Églises et de l\'État. **11 novembre 1918** : armistice. **1936** : Front populaire de Léon Blum (congés payés, 2 semaines).',
      '**18 juin 1940** : appel du général de Gaulle depuis Londres (BBC). **6 juin 1944** : débarquement en Normandie. **1944** : droit de vote des femmes.',
      '**1958** : Ve République. **1962** : accords d\'Évian, fin de la guerre d\'Algérie. **Mai 1968** : mouvement étudiant et grève générale.'
    ],
    lessons: [
      {
        title: 'Grandes dates', icon: '📜', exercises: [
          { t: 'qcm', q: 'À quelle date a eu lieu la prise de la Bastille ?', c: ['14 juillet 1789', '4 août 1789', '21 janvier 1793', '14 juillet 1790'], a: 0, x: 'Le 14 juillet 1790, c\'est la fête de la Fédération. Le 14 juillet est devenu fête nationale en 1880.' },
          { t: 'order', q: 'Remets ces événements dans l\'ordre chronologique', items: ['Prise de la Bastille', 'Sacre de Napoléon Ier', 'Commune de Paris', 'Front populaire', 'Libération de Paris'], x: '1789 → 1804 → 1871 → 1936 → 1944.' },
          { t: 'qcm', q: 'Qui a lancé l\'appel du 18 juin 1940 sur la BBC ?', c: ['Charles de Gaulle', 'Jean Moulin', 'Philippe Pétain', 'Winston Churchill'], a: 0, x: 'Depuis Londres, il appelle les Français à poursuivre le combat. Jean Moulin unifiera ensuite la Résistance intérieure.' },
          { t: 'vf', q: 'La IIIe République a été proclamée en 1870.', a: true, x: 'Elle est proclamée le 4 septembre 1870, après la défaite de Sedan, et dure jusqu\'en 1940.' },
          { t: 'match', q: 'Associe chaque personnage à ce qu\'il a laissé', pairs: [['Henri IV', 'Édit de Nantes (1598)'], ['Louis XIV', 'Château de Versailles'], ['Napoléon Ier', 'Code civil (1804)'], ['Jules Ferry', 'École gratuite, laïque et obligatoire']], x: 'Les lois Ferry datent de 1881 et 1882.' },
          { t: 'qcm', q: 'De quand date la Déclaration des droits de l\'homme et du citoyen ?', c: ['26 août 1789', '14 juillet 1789', '10 décembre 1948', '4 octobre 1958'], a: 0, x: 'Elle figure toujours dans le préambule de la Constitution de 1958. Le 10 décembre 1948, c\'est la Déclaration universelle (ONU).' },
          { t: 'input', q: 'En quelle année les accords d\'Évian ont-ils mis fin à la guerre d\'Algérie ?', a: ['1962'], x: 'Ils sont signés le 18 mars 1962. L\'Algérie devient indépendante le 5 juillet 1962.' }
        ]
      },
      {
        title: 'Le XXe siècle', icon: '🎖️', exercises: [
          { t: 'qcm', q: 'Quel jour a été signé l\'armistice de la Première Guerre mondiale ?', c: ['11 novembre 1918', '8 mai 1945', '28 juin 1919', '1er août 1914'], a: 0, x: 'Le traité de Versailles est signé le 28 juin 1919, et le 8 mai 1945 marque la capitulation allemande.' },
          { t: 'qcm', q: 'À quelle date a eu lieu le débarquement en Normandie ?', c: ['6 juin 1944', '8 mai 1945', '25 août 1944', '18 juin 1940'], a: 0, x: 'C\'est le « D-Day ». Paris est libéré le 25 août 1944.' },
          { t: 'vf', q: 'Le traité de Versailles, qui met fin à la Première Guerre mondiale, a été signé en 1919.', a: true, x: 'Il est signé le 28 juin 1919, dans la galerie des Glaces.' },
          { t: 'match', q: 'Associe chaque année à son événement', pairs: [['1914', 'Début de la Première Guerre mondiale'], ['1939', 'Début de la Seconde Guerre mondiale'], ['1958', 'Naissance de la Ve République'], ['1968', 'Mouvement de Mai']], x: 'Ce sont des repères qu\'on attend de toi sans hésitation.' },
          { t: 'qcm', q: 'Qui dirige le gouvernement du Front populaire en 1936 ?', c: ['Léon Blum', 'Jean Jaurès', 'Georges Clemenceau', 'Pierre Mendès France'], a: 0, x: 'Jean Jaurès a été assassiné en 1914, et Clemenceau était le « Père la Victoire » de 1918.' },
          { t: 'qcm', q: 'Combien de semaines de congés payés le Front populaire a-t-il instauré en 1936 ?', c: ['2 semaines', '3 semaines', '4 semaines', '5 semaines'], a: 0, x: 'La 3e semaine arrive en 1956, la 4e en 1969 et la 5e en 1982.' },
          { t: 'vf', q: 'Simone Veil a été la première présidente du Parlement européen élu au suffrage universel direct.', a: true, x: 'Elle est élue en 1979. Ministre de la Santé, elle avait porté la loi sur l\'IVG en 1975.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------- */
  {
    id: 'histmonde', title: 'Histoire du monde', subtitle: 'Révolutions, guerres, décolonisations', icon: '🌐', color: '#6A4C93',
    guide: [
      '**1492** : Christophe Colomb atteint l\'Amérique. **1776** : déclaration d\'indépendance des États-Unis. **1917** : révolutions russes.',
      '**1945** : bombes atomiques sur Hiroshima et Nagasaki, création de l\'ONU. **1947** : indépendance de l\'Inde. **1949** : proclamation de la République populaire de Chine.',
      'Guerre froide : plan Marshall (1947), mur de Berlin construit en **1961** et tombé le **9 novembre 1989**, crise des missiles de Cuba en **1962**, dissolution de l\'URSS en **1991**.',
      '**1955** : conférence de Bandung (pays d\'Asie et d\'Afrique). **1969** : Neil Armstrong marche sur la Lune. **1994** : Nelson Mandela, premier président noir d\'Afrique du Sud.'
    ],
    lessons: [
      {
        title: 'Les tournants', icon: '⏳', exercises: [
          { t: 'qcm', q: 'À quelle date est tombé le mur de Berlin ?', c: ['9 novembre 1989', '13 août 1961', '3 octobre 1990', '25 décembre 1991'], a: 0, x: 'Le mur est construit le 13 août 1961, l\'Allemagne est réunifiée le 3 octobre 1990 et l\'URSS disparaît le 25 décembre 1991.' },
          { t: 'qcm', q: 'En quelle année les États-Unis ont-ils déclaré leur indépendance ?', c: ['1776', '1789', '1492', '1865'], a: 0, x: 'La Déclaration est adoptée le 4 juillet 1776. En 1865, c\'est la fin de la guerre de Sécession.' },
          { t: 'match', q: 'Associe chaque figure à son combat', pairs: [['Nelson Mandela', 'Fin de l\'apartheid en Afrique du Sud'], ['Gandhi', 'Indépendance de l\'Inde'], ['Martin Luther King', 'Droits civiques aux États-Unis'], ['Mao Zedong', 'Proclamation de la République populaire de Chine']], x: 'Mandela est élu président en 1994, l\'Inde est indépendante en 1947 et la Chine populaire proclamée en 1949.' },
          { t: 'vf', q: 'L\'URSS a été dissoute en 1991.', a: true, x: 'Mikhaïl Gorbatchev démissionne le 25 décembre 1991.' },
          { t: 'qcm', q: 'En quelle année ont eu lieu les révolutions russes qui portent les bolcheviks au pouvoir ?', c: ['1917', '1905', '1922', '1945'], a: 0, x: 'Il y a eu deux révolutions en 1917, en février puis en octobre. L\'URSS est créée en 1922.' },
          { t: 'order', q: 'Remets dans l\'ordre chronologique', items: ['Christophe Colomb atteint l\'Amérique', 'Révolution française', 'Début de la Première Guerre mondiale', 'Crise des missiles de Cuba', 'Chute du mur de Berlin'], x: '1492 → 1789 → 1914 → 1962 → 1989.' },
          { t: 'qcm', q: 'Sur quelles villes ont été larguées les bombes atomiques en août 1945 ?', c: ['Hiroshima et Nagasaki', 'Tokyo et Osaka', 'Kyoto et Kobe', 'Hiroshima et Tokyo'], a: 0, x: 'Les bombardements ont lieu les 6 et 9 août 1945. Le Japon capitule le 2 septembre 1945.' }
        ]
      },
      {
        title: 'Guerre froide & décolonisation', icon: '🧊', exercises: [
          { t: 'qcm', q: 'Qu\'était le plan Marshall ?', c: ['Une aide américaine à la reconstruction de l\'Europe', 'Un traité de désarmement nucléaire', 'Le partage de Berlin en quatre zones', 'Une alliance militaire soviétique'], a: 0, x: 'Il est annoncé en 1947. Les pays du bloc soviétique le refusent.' },
          { t: 'qcm', q: 'Quels pays s\'opposent lors de la crise des missiles de Cuba (1962) ?', c: ['États-Unis et URSS', 'États-Unis et Chine', 'Cuba et Mexique', 'URSS et Chine'], a: 0, x: 'L\'URSS avait installé des missiles nucléaires à Cuba. Kennedy et Khrouchtchev finissent par trouver un compromis.' },
          { t: 'vf', q: 'Le mur de Berlin a été construit en 1961.', a: true, x: 'Sa construction commence dans la nuit du 12 au 13 août 1961.' },
          { t: 'qcm', q: 'Qui la conférence de Bandung (1955) a-t-elle réuni ?', c: ['Des pays d\'Asie et d\'Afrique, souvent nouvellement indépendants', 'Les membres de l\'OTAN', 'Les pays du pacte de Varsovie', 'Les puissances coloniales européennes'], a: 0, x: 'Elle a lieu en Indonésie et marque l\'émergence du « tiers-monde » et du mouvement des non-alignés.' },
          { t: 'match', q: 'Associe chaque événement à son année', pairs: [['Début de la guerre de Corée', '1950'], ['Construction du mur de Berlin', '1961'], ['Premiers pas sur la Lune', '1969'], ['Dissolution de l\'URSS', '1991']], x: 'Ce sont quatre jalons de la guerre froide.' },
          { t: 'input', q: 'Quel est le nom de famille du premier homme à avoir marché sur la Lune ?', a: ['Armstrong', 'Neil Armstrong'], x: 'Neil Armstrong (mission Apollo 11) pose le pied sur la Lune le 21 juillet 1969 (heure de Paris).' },
          { t: 'qcm', q: 'Qu\'était l\'apartheid ?', c: ['Un régime de ségrégation raciale en Afrique du Sud', 'Une guerre d\'indépendance en Algérie', 'Une réforme agraire en Inde', 'Un traité de paix au Proche-Orient'], a: 0, x: 'Il est instauré en 1948 et démantelé au début des années 1990.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------- */
  {
    id: 'geo', title: 'Géographie', subtitle: 'Cartes mentales et lieux stratégiques', icon: '🗺️', color: '#2A9D8F',
    guide: [
      'France : **101 départements** (dont 5 d\'outre-mer) et 18 régions. Le plus long fleuve est **la Loire**, le plus haut sommet **le mont Blanc**.',
      'Monde : l\'**Inde** est le pays le plus peuplé depuis 2023, la **Russie** le plus vaste, et le **Pacifique** est le plus grand océan.',
      'Capitales pièges : **Ottawa** (Canada), **Canberra** (Australie), **Brasília** (Brésil), **Ankara** (Turquie).',
      'Passages stratégiques : le **canal de Suez** (Méditerranée – mer Rouge), le **détroit d\'Ormuz** (golfe Persique, par où passe une grande partie du pétrole mondial) et le **canal de Panama**.'
    ],
    lessons: [
      {
        title: 'Repères', icon: '📍', exercises: [
          { t: 'qcm', q: 'Quel est le plus long fleuve de France ?', c: ['La Loire', 'La Seine', 'Le Rhône', 'La Garonne'], a: 0, x: 'La Loire mesure environ 1 000 km et coule entièrement en France.' },
          { t: 'qcm', q: 'Quel est le plus haut sommet des Alpes ?', c: ['Le mont Blanc', 'Le Cervin', 'La Barre des Écrins', 'Le mont Rose'], a: 0, x: 'Il culmine à plus de 4 800 m, à la frontière franco-italienne.' },
          { t: 'match', q: 'Associe chaque pays à sa capitale', pairs: [['Canada', 'Ottawa'], ['Australie', 'Canberra'], ['Brésil', 'Brasília'], ['Turquie', 'Ankara']], x: 'Le piège classique : la plus grande ville d\'un pays (Toronto, Sydney, São Paulo, Istanbul) n\'en est pas forcément la capitale.' },
          { t: 'vf', q: 'Le Nil et l\'Amazone se disputent le titre de plus long fleuve du monde.', a: true, x: 'Le classement dépend de la façon de mesurer les sources. L\'Amazone a de loin le plus grand débit.' },
          { t: 'qcm', q: 'Quel pays est le plus peuplé du monde depuis 2023 ?', c: ['L\'Inde', 'La Chine', 'Les États-Unis', 'L\'Indonésie'], a: 0, x: 'L\'Inde a dépassé la Chine selon les estimations de l\'ONU.' },
          { t: 'qcm', q: 'Combien la France compte-t-elle de départements ?', c: ['101', '96', '95', '13'], a: 0, x: 'Il y en a 96 en métropole et 5 en outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte).' },
          { t: 'input', q: 'Quel est le plus vaste océan du monde ?', a: ['Pacifique', 'le Pacifique', 'océan Pacifique', 'l\'océan Pacifique'], x: 'Il couvre environ un tiers de la surface du globe.' }
        ]
      },
      {
        title: 'Lieux stratégiques', icon: '⚓', exercises: [
          { t: 'qcm', q: 'Quelles mers le canal de Suez relie-t-il ?', c: ['La Méditerranée et la mer Rouge', 'La mer Noire et la Méditerranée', 'L\'Atlantique et le Pacifique', 'La mer Rouge et le golfe Persique'], a: 0, x: 'Il est inauguré en 1869 et nationalisé par l\'Égypte en 1956. L\'Atlantique et le Pacifique sont reliés par le canal de Panama.' },
          { t: 'qcm', q: 'Pourquoi le détroit d\'Ormuz est-il stratégique ?', c: ['Une grande partie du pétrole mondial y transite', 'Il relie l\'Europe à l\'Asie', 'C\'est le seul accès à la mer Noire', 'Il sépare l\'Espagne du Maroc'], a: 0, x: 'Il relie le golfe Persique au golfe d\'Oman, entre l\'Iran et la péninsule Arabique. Le détroit de Gibraltar sépare l\'Espagne du Maroc.' },
          { t: 'match', q: 'Où siègent ces organisations ?', pairs: [['ONU', 'New York'], ['OTAN', 'Bruxelles'], ['Cour pénale internationale', 'La Haye'], ['Unesco', 'Paris']], x: 'La CIJ siège aussi à La Haye, et l\'OMS à Genève.' },
          { t: 'vf', q: 'La Guyane est un territoire français situé en Amérique du Sud.', a: true, x: 'Elle a une frontière avec le Brésil et le Suriname. Le centre spatial de Kourou s\'y trouve.' },
          { t: 'qcm', q: 'Quel est le plus vaste pays du monde ?', c: ['La Russie', 'Le Canada', 'La Chine', 'Les États-Unis'], a: 0, x: 'Il s\'étend sur plus de 17 millions de km², à cheval sur l\'Europe et l\'Asie.' },
          { t: 'qcm', q: 'Sur quel continent se trouve le Mercosur ?', c: ['L\'Amérique du Sud', 'L\'Afrique', 'L\'Asie', 'L\'Europe'], a: 0, x: 'C\'est le marché commun du Sud (Brésil, Argentine, Uruguay, Paraguay…). L\'accord commercial UE-Mercosur fait débat en Europe.' },
          { t: 'vf', q: 'La Suisse est membre de l\'Union européenne.', a: false, x: 'Elle n\'est pas membre de l\'UE, mais elle fait partie de l\'espace Schengen et elle est liée à l\'UE par des accords bilatéraux.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------- */
  {
    id: 'arts', title: 'Arts & littérature', subtitle: 'Œuvres et auteurs incontournables', icon: '🎨', color: '#E76F51',
    guide: [
      'Romans : Victor Hugo (*Les Misérables*, 1862), Émile Zola (*Germinal*, 1885), Marcel Proust (*À la recherche du temps perdu*), Albert Camus (*L\'Étranger*, 1942), George Orwell (*1984*, 1949).',
      '**« J\'accuse…! »** : lettre d\'Émile Zola publiée dans *L\'Aurore* en **1898** pour défendre Dreyfus. C\'est un texte fondateur de l\'engagement par la presse.',
      'Prix : le **Goncourt** (décerné en novembre), le **Nobel de littérature** (Annie Ernaux en 2022), la **Palme d\'or** à Cannes et les **César** pour le cinéma français.',
      'Peinture : *La Joconde* (Léonard de Vinci), *Guernica* (Picasso, 1937), *Impression, soleil levant* (Monet, qui a donné son nom à l\'impressionnisme), *La Nuit étoilée* (Van Gogh).',
      'Cinéma : les **frères Lumière** inventent le cinématographe et organisent la première projection publique payante en **1895**.'
    ],
    lessons: [
      {
        title: 'Littérature', icon: '📚', exercises: [
          { t: 'match', q: 'Associe chaque auteur à son œuvre', pairs: [['Victor Hugo', 'Les Misérables'], ['Albert Camus', 'L\'Étranger'], ['Émile Zola', 'Germinal'], ['Marcel Proust', 'À la recherche du temps perdu']], x: 'Ce sont des classiques à citer dans une copie, à bon escient.' },
          { t: 'qcm', q: 'Dans quel journal Émile Zola a-t-il publié « J\'accuse…! » en 1898 ?', c: ['L\'Aurore', 'Le Figaro', 'Le Petit Journal', 'L\'Humanité'], a: 0, x: 'C\'est une lettre ouverte au président Félix Faure pour défendre le capitaine Dreyfus. Le titre est de Clemenceau, alors éditorialiste à L\'Aurore.' },
          { t: 'qcm', q: 'Quelle autrice française a reçu le prix Nobel de littérature en 2022 ?', c: ['Annie Ernaux', 'Marguerite Duras', 'Leïla Slimani', 'Simone de Beauvoir'], a: 0, x: 'C\'est la première Française à recevoir ce prix. Patrick Modiano l\'avait obtenu en 2014.' },
          { t: 'vf', q: 'Le prix Goncourt est décerné chaque année en novembre.', a: true, x: 'Il est remis au restaurant Drouant, à Paris. Le lauréat reçoit un chèque symbolique de 10 euros.' },
          { t: 'qcm', q: 'Quel était le vrai nom de Molière ?', c: ['Jean-Baptiste Poquelin', 'François-Marie Arouet', 'Henri Beyle', 'Aurore Dupin'], a: 0, x: 'François-Marie Arouet, c\'est Voltaire, Henri Beyle, c\'est Stendhal, et Aurore Dupin, c\'est George Sand.' },
          { t: 'qcm', q: 'Qui a écrit « 1984 », roman sur la surveillance et la propagande ?', c: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'H. G. Wells'], a: 0, x: 'Il est publié en 1949 et a donné « Big Brother » et la « novlangue ». Huxley a écrit *Le Meilleur des mondes*.' },
          { t: 'input', q: 'Qui a écrit « Le Petit Prince » (nom de famille) ?', a: ['Saint-Exupéry', 'Antoine de Saint-Exupéry', 'de Saint-Exupéry', 'Saint Exupery'], x: 'Antoine de Saint-Exupéry publie le livre en 1943. Il était aussi aviateur.' }
        ]
      },
      {
        title: 'Arts & cinéma', icon: '🎬', exercises: [
          { t: 'match', q: 'Associe chaque peintre à son tableau', pairs: [['Léonard de Vinci', 'La Joconde'], ['Pablo Picasso', 'Guernica'], ['Claude Monet', 'Impression, soleil levant'], ['Vincent van Gogh', 'La Nuit étoilée']], x: 'La Joconde est au Louvre, et Guernica au musée Reina Sofía à Madrid.' },
          { t: 'qcm', q: 'D\'où vient le nom « impressionnisme » ?', c: ['D\'un tableau de Monet, « Impression, soleil levant »', 'D\'un manifeste de Baudelaire', 'D\'une école d\'art lyonnaise', 'D\'un procédé d\'imprimerie'], a: 0, x: 'Un critique a repris ironiquement le titre du tableau, présenté lors de la première exposition du groupe en 1874.' },
          { t: 'qcm', q: 'Quelle est la récompense suprême du Festival de Cannes ?', c: ['La Palme d\'or', 'Le Lion d\'or', 'L\'Ours d\'or', 'Le César du meilleur film'], a: 0, x: 'Le Lion d\'or est remis à Venise, l\'Ours d\'or à Berlin. Les César récompensent le cinéma français.' },
          { t: 'qcm', q: 'Quel événement « Guernica » (1937) dénonce-t-il ?', c: ['Le bombardement d\'une ville basque pendant la guerre d\'Espagne', 'La Première Guerre mondiale', 'La bombe d\'Hiroshima', 'La guerre d\'Algérie'], a: 0, x: 'La ville est bombardée par l\'aviation allemande, alliée de Franco, le 26 avril 1937.' },
          { t: 'vf', q: 'Les frères Lumière ont organisé l\'une des premières projections publiques et payantes de cinéma en 1895.', a: true, x: 'Elle a lieu le 28 décembre 1895, au Salon indien du Grand Café, à Paris.' },
          { t: 'qcm', q: 'Quel musée est régulièrement cité comme le plus visité au monde ?', c: ['Le Louvre', 'Le British Museum', 'Le Metropolitan Museum', 'Le musée du Prado'], a: 0, x: 'Il dépasse souvent les 8 millions de visiteurs par an.' },
          { t: 'qcm', q: 'Que récompensent les César ?', c: ['Le cinéma français', 'La musique française', 'Le théâtre', 'La télévision'], a: 0, x: 'Ils sont créés en 1976. En musique, ce sont les Victoires de la musique, et au théâtre les Molières.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------- */
  {
    id: 'sciences', title: 'Sciences & numérique', subtitle: 'Découvertes, climat, régulation du net', icon: '🔬', color: '#4361EE',
    guide: [
      'Savants : Isaac Newton (gravitation), Charles Darwin (évolution, 1859), Louis Pasteur (vaccin contre la rage, 1885), Marie Curie (radioactivité, deux prix Nobel), Albert Einstein (relativité).',
      'Climat : le **GIEC** (créé en 1988) synthétise la science du climat, et le **CO2** est le principal gaz à effet de serre émis par l\'humanité.',
      'Numérique : le **Web** est inventé par **Tim Berners-Lee** au CERN (1989). La **CNIL** date de 1978. Le **RGPD** s\'applique depuis 2018 et le **DSA** (Digital Services Act) encadre les grandes plateformes.',
      'Vocabulaire : un **deepfake** est un contenu audio ou vidéo truqué par IA, et l\'**IA générative** produit du texte ou des images.'
    ],
    lessons: [
      {
        title: 'Grandes découvertes', icon: '🧪', exercises: [
          { t: 'qcm', q: 'Quelle est la formule chimique de l\'eau ?', c: ['H2O', 'CO2', 'O2', 'H2O2'], a: 0, x: 'Elle est formée de deux atomes d\'hydrogène et d\'un atome d\'oxygène. H2O2 est l\'eau oxygénée.' },
          { t: 'qcm', q: 'Qui a formulé la théorie de la relativité ?', c: ['Albert Einstein', 'Isaac Newton', 'Niels Bohr', 'Stephen Hawking'], a: 0, x: 'La relativité restreinte date de 1905 et la relativité générale de 1915.' },
          { t: 'match', q: 'Associe chaque savant à sa découverte', pairs: [['Marie Curie', 'Radioactivité'], ['Louis Pasteur', 'Vaccin contre la rage'], ['Charles Darwin', 'Théorie de l\'évolution'], ['Isaac Newton', 'Gravitation universelle']], x: 'Marie Curie est la seule personne récompensée par deux prix Nobel scientifiques différents (physique et chimie).' },
          { t: 'vf', q: 'La lumière du Soleil met environ 8 minutes à nous parvenir.', a: true, x: 'La distance est d\'environ 150 millions de km, et la vitesse de la lumière d\'environ 300 000 km/s.' },
          { t: 'qcm', q: 'Que signifie GIEC ?', c: ['Groupe d\'experts intergouvernemental sur l\'évolution du climat', 'Groupement international des écologistes', 'Grand institut européen du climat', 'Groupe intergouvernemental pour l\'énergie et le carbone'], a: 0, x: 'Il est créé en 1988 par l\'ONU (OMM et PNUE). Ses rapports servent de base aux COP.' },
          { t: 'qcm', q: 'Quel est le principal gaz à effet de serre émis par les activités humaines ?', c: ['Le dioxyde de carbone (CO2)', 'L\'oxygène', 'L\'azote', 'L\'hélium'], a: 0, x: 'Le méthane (CH4) est le deuxième contributeur.' },
          { t: 'input', q: 'Quelle planète est la plus proche du Soleil ?', a: ['Mercure'], x: 'L\'ordre est Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus, Neptune.' }
        ]
      },
      {
        title: 'Le numérique', icon: '💻', exercises: [
          { t: 'qcm', q: 'Qui a inventé le World Wide Web ?', c: ['Tim Berners-Lee', 'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg'], a: 0, x: 'Il l\'invente au CERN, près de Genève, en 1989. Internet, le réseau, est plus ancien que le Web.' },
          { t: 'qcm', q: 'Qu\'est-ce que le RGPD ?', c: ['Le règlement européen sur la protection des données personnelles', 'Une loi française sur la presse', 'Un réseau de satellites', 'Un label de qualité alimentaire'], a: 0, x: 'Il s\'applique depuis le 25 mai 2018. En France, la CNIL veille à son respect.' },
          { t: 'match', q: 'Associe chaque service à son propriétaire', pairs: [['Instagram', 'Meta'], ['YouTube', 'Alphabet (Google)'], ['LinkedIn', 'Microsoft'], ['Twitch', 'Amazon']], x: 'Connaître les propriétaires des plateformes est utile pour analyser l\'économie des médias.' },
          { t: 'vf', q: 'Un « deepfake » est un contenu audio ou vidéo truqué à l\'aide de l\'intelligence artificielle.', a: true, x: 'C\'est un enjeu majeur de vérification pour les rédactions, surtout en période électorale.' },
          { t: 'qcm', q: 'Que régule le DSA (Digital Services Act) européen ?', c: ['Les grandes plateformes en ligne (modération, transparence)', 'Le prix des abonnements téléphoniques', 'Les droits d\'auteur des musiciens', 'Les cryptomonnaies'], a: 0, x: 'Il impose des obligations renforcées aux très grandes plateformes, avec des amendes pouvant atteindre 6 % du chiffre d\'affaires mondial.' },
          { t: 'qcm', q: 'En quelle année a été créée la CNIL ?', c: ['1978', '1998', '2008', '2018'], a: 0, x: 'Elle naît avec la loi « Informatique et libertés » du 6 janvier 1978.' },
          { t: 'qcm', q: 'Que fait une IA générative ?', c: ['Elle produit du texte, des images ou des sons à partir de ce qu\'elle a appris', 'Elle répare des ordinateurs', 'Elle génère de l\'électricité', 'Elle remplace les moteurs de recherche par la loi'], a: 0, x: 'Pour la presse, ses enjeux sont la fiabilité, le droit d\'auteur (accords de licence) et la transparence sur son usage.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------- */
  {
    id: 'idees', title: 'Idées & philosophie', subtitle: 'Les penseurs qui structurent le débat', icon: '💭', color: '#9D4EDD',
    guide: [
      'Lumières (XVIIIe siècle) : Montesquieu (séparation des pouvoirs, *De l\'esprit des lois*, 1748), Voltaire (*Candide*), Rousseau (*Du contrat social*, 1762), et l\'*Encyclopédie* de Diderot et d\'Alembert.',
      'Avant : Machiavel (*Le Prince*, 1532), Descartes (« Je pense, donc je suis », *Discours de la méthode*, 1637).',
      'XIXe-XXe siècle : Tocqueville (*De la démocratie en Amérique*), Simone de Beauvoir (*Le Deuxième Sexe*, 1949), Hannah Arendt (« banalité du mal », procès Eichmann).',
      'Notions : le **quatrième pouvoir** désigne la presse, le **soft power** (Joseph Nye) l\'influence par l\'attractivité. La **Déclaration universelle des droits de l\'homme** est adoptée en 1948 à Paris.'
    ],
    lessons: [
      {
        title: 'Les penseurs', icon: '🏛️', exercises: [
          { t: 'match', q: 'Associe chaque penseur à son idée ou son œuvre', pairs: [['Descartes', '« Je pense, donc je suis »'], ['Montesquieu', 'Séparation des pouvoirs'], ['Rousseau', 'Du contrat social'], ['Voltaire', 'Candide']], x: 'La séparation des pouvoirs est exposée dans *De l\'esprit des lois* (1748).' },
          { t: 'qcm', q: 'À quel siècle se rattache le mouvement des Lumières ?', c: ['Au XVIIIe siècle', 'Au XVIe siècle', 'Au XIXe siècle', 'Au XVIIe siècle'], a: 0, x: 'Il défend la raison, la tolérance et le progrès, et prépare les idées de 1789.' },
          { t: 'qcm', q: 'Quel livre de Simone de Beauvoir est devenu un texte fondateur du féminisme ?', c: ['Le Deuxième Sexe', 'La Femme rompue', 'Les Mandarins', 'Mémoires d\'une jeune fille rangée'], a: 0, x: 'Publié en 1949, il contient la formule « On ne naît pas femme : on le devient ».' },
          { t: 'vf', q: 'Hannah Arendt a forgé l\'expression « banalité du mal » à propos du procès d\'Adolf Eichmann.', a: true, x: 'Elle couvre le procès à Jérusalem (1961) pour le *New Yorker*. C\'est un exemple de philosophie née d\'un reportage.' },
          { t: 'qcm', q: 'Qui a écrit « De la démocratie en Amérique » ?', c: ['Alexis de Tocqueville', 'Benjamin Constant', 'Raymond Aron', 'Jean Jaurès'], a: 0, x: 'Il paraît en 1835 et 1840. Tocqueville y analyse l\'égalité des conditions et le risque de « tyrannie de la majorité ».' },
          { t: 'qcm', q: 'Qui a dirigé l\'Encyclopédie au XVIIIe siècle ?', c: ['Diderot et d\'Alembert', 'Voltaire et Rousseau', 'Montesquieu et Condorcet', 'Pascal et Descartes'], a: 0, x: 'Elle est publiée de 1751 à 1772, malgré la censure.' },
          { t: 'input', q: 'Quel penseur florentin a écrit « Le Prince » (1532) ?', a: ['Machiavel', 'Nicolas Machiavel', 'Machiavelli'], x: 'Il a donné l\'adjectif « machiavélique ».' }
        ]
      },
      {
        title: 'Notions clés', icon: '🔑', exercises: [
          { t: 'match', q: 'Associe chaque notion à sa définition', pairs: [['Laïcité', 'Neutralité de l\'État vis-à-vis des religions'], ['Souveraineté', 'Pouvoir suprême d\'un État sur son territoire'], ['Populisme', 'Opposition revendiquée entre le « peuple » et les « élites »'], ['Multilatéralisme', 'Coopération entre plusieurs États au sein d\'institutions communes']], x: 'Ces mots reviennent sans cesse à l\'oral : sache les définir en une phrase.' },
          { t: 'qcm', q: 'Que désigne l\'expression « quatrième pouvoir » ?', c: ['La presse et les médias', 'Le Conseil constitutionnel', 'Les syndicats', 'L\'armée'], a: 0, x: 'Elle vient après les pouvoirs exécutif, législatif et judiciaire. Le contre-pouvoir de la presse est un grand sujet de concours.' },
          { t: 'qcm', q: 'Qui a théorisé le « soft power » ?', c: ['Joseph Nye', 'Henry Kissinger', 'Samuel Huntington', 'Francis Fukuyama'], a: 0, x: 'Huntington est l\'auteur du « choc des civilisations », Fukuyama de la « fin de l\'histoire ».' },
          { t: 'vf', q: 'Une « fake news » est une information délibérément fausse présentée comme vraie.', a: true, x: 'On distingue souvent la désinformation (intentionnelle) de la mésinformation (erreur partagée de bonne foi).' },
          { t: 'qcm', q: 'Où et quand la Déclaration universelle des droits de l\'homme a-t-elle été adoptée ?', c: ['À Paris, en 1948', 'À New York, en 1945', 'À Genève, en 1949', 'À Paris, en 1789'], a: 0, x: 'Elle est adoptée le 10 décembre 1948 au palais de Chaillot. René Cassin a contribué à sa rédaction.' },
          { t: 'qcm', q: 'Que désigne l\'« ère de la post-vérité » ?', c: ['Un contexte où émotions et croyances pèsent plus que les faits', 'Une période sans journaux', 'L\'époque des premières agences de presse', 'Un courant artistique'], a: 0, x: '« Post-truth » a été désigné mot de l\'année 2016 par le dictionnaire d\'Oxford.' },
          { t: 'qcm', q: 'À quel philosophe associe-t-on la notion d\'« espace public » ?', c: ['Jürgen Habermas', 'Michel Foucault', 'Pierre Bourdieu', 'Karl Marx'], a: 0, x: 'C\'est le lieu du débat rationnel entre citoyens, où la presse joue un rôle central. Bourdieu a analysé la télévision (*Sur la télévision*, 1996).' }
        ]
      }
    ]
  }
];

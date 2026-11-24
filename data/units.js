/* =========================================================
   Scoop — Parcours concours (contenu permanent)
   Types d'exercices :
     qcm   {t, q, c:[choix], a:index, x}
     vf    {t, q:affirmation, a:true|false, x}
     input {t, q, a:[réponses acceptées], hint?, x}
     order {t, q, items:[dans le BON ordre], x}
     match {t, q?, pairs:[[gauche, droite], ...], x}
     write {t, q, src?, model, crit:[critères]}
   ========================================================= */
window.SCOOP_UNITS = [
  /* ------------------------------------------------------- */
  {
    id: 'inst', title: 'Institutions françaises', subtitle: 'La Ve République sans trou de mémoire', icon: '🏛️', color: '#3A86FF',
    guide: [
      '**Constitution du 4 octobre 1958.** Président élu au suffrage universel direct depuis le référendum de **1962**, pour **5 ans** depuis le référendum de **2000** (appliqué en 2002).',
      '**Parlement bicaméral** : Assemblée nationale (**577 députés**, 5 ans, suffrage direct) et Sénat (**348 sénateurs**, 6 ans, suffrage indirect, renouvelé par moitié tous les 3 ans). Réunis à Versailles, ils forment le **Congrès**.',
      'Articles à connaître : **8** (nomination du Premier ministre), **11** (référendum), **12** (dissolution, pas de nouvelle dissolution dans l\'année qui suit les élections), **16** (pouvoirs exceptionnels), **47** (budget : 70 jours), **49.3** (adoption sans vote sauf censure), **89** (révision : 3/5 des suffrages exprimés au Congrès ou référendum).',
      '**Motion de censure** : adoptée à la majorité absolue des membres de l\'Assemblée (289 voix). Seuls les votes « pour » comptent.',
      '**Conseil constitutionnel** : 9 membres nommés pour 9 ans (3 par le président de la République, 3 par le président de l\'Assemblée, 3 par le président du Sénat). Depuis 2010, la **QPC** permet à tout justiciable de contester une loi en vigueur.',
      'Sommets des juridictions : **Cour de cassation** (ordre judiciaire), **Conseil d\'État** (ordre administratif). La **Cour des comptes** contrôle l\'argent public.'
    ],
    lessons: [
      {
        title: 'Les fondamentaux', icon: '🗳️', exercises: [
          { t: 'qcm', q: 'De quand date la Constitution de la Ve République ?', c: ['4 octobre 1958', '27 octobre 1946', '28 octobre 1962', '14 juillet 1958'], a: 0, x: 'Elle est promulguée le **4 octobre 1958**, après son approbation par référendum le 28 septembre. 1946 correspond à la IVe République.' },
          { t: 'vf', q: 'Depuis 1962, le président de la République est élu au suffrage universel direct.', a: true, x: 'Le référendum d\'octobre **1962**, voulu par le général de Gaulle, instaure l\'élection directe. Première application : la présidentielle de 1965.' },
          { t: 'qcm', q: 'Combien de députés siègent à l\'Assemblée nationale ?', c: ['348', '577', '720', '925'], a: 1, x: '**577 députés.** Le Sénat compte 348 sénateurs ; ensemble (925 parlementaires), ils forment le Congrès. 720 est le nombre d\'eurodéputés.' },
          { t: 'match', q: 'Associe chaque institution à son rôle', pairs: [['Assemblée nationale', 'Vote la loi et peut renverser le gouvernement'], ['Sénat', 'Assure la représentation des collectivités territoriales'], ['Conseil constitutionnel', 'Vérifie la conformité des lois à la Constitution'], ['Conseil d\'État', 'Conseille le gouvernement et juge l\'administration']], x: 'Seule l\'Assemblée nationale peut renverser le gouvernement, via une motion de censure.' },
          { t: 'qcm', q: 'Qui nomme le Premier ministre ?', c: ['L\'Assemblée nationale', 'Le président de la République', 'Le Sénat', 'Le Conseil constitutionnel'], a: 1, x: '**Article 8** : le président nomme le Premier ministre. Il met fin à ses fonctions sur présentation de la démission du gouvernement.' },
          { t: 'vf', q: 'Les sénateurs sont élus au suffrage universel direct.', a: false, x: 'Suffrage **indirect** : ils sont élus par environ 160 000 grands électeurs (surtout des délégués des conseils municipaux), pour 6 ans.' },
          { t: 'input', q: 'Depuis le référendum de 2000, combien d\'années dure le mandat présidentiel ?', a: ['5', 'cinq', '5 ans', 'cinq ans'], x: 'Le **quinquennat** remplace le septennat. Il s\'applique dès 2002.' },
          { t: 'order', q: 'Remets ces étapes dans l\'ordre chronologique', items: ['Adoption de la Constitution de la Ve République', 'Élection du président au suffrage universel direct', 'Passage au quinquennat', 'Grande révision constitutionnelle (QPC, encadrement du 49.3)'], x: '1958 → 1962 → 2000 → 2008.' }
        ]
      },
      {
        title: 'Les articles qui font l\'actu', icon: '📜', exercises: [
          { t: 'qcm', q: 'Que permet l\'article 49.3 ?', c: ['Faire adopter un texte sans vote, sauf si une motion de censure est votée', 'Dissoudre l\'Assemblée nationale', 'Organiser un référendum', 'Déclarer l\'état d\'urgence'], a: 0, x: 'Le gouvernement engage sa responsabilité sur un texte. Depuis 2008 : sans limite pour les textes budgétaires, une seule fois par session pour un autre texte.' },
          { t: 'match', q: 'Associe chaque article de la Constitution à son contenu', pairs: [['Article 12', 'Dissolution de l\'Assemblée'], ['Article 16', 'Pouvoirs exceptionnels du président'], ['Article 89', 'Révision de la Constitution'], ['Article 11', 'Référendum législatif']], x: 'Ces quatre articles reviennent souvent dans les QCM d\'actualité.' },
          { t: 'qcm', q: 'Pour réviser la Constitution par la voie du Congrès, quelle majorité faut-il ?', c: ['Les 3/5 des suffrages exprimés', 'La majorité simple', 'Les 2/3 des députés', 'L\'unanimité'], a: 0, x: 'Article 89 : le projet est voté dans les mêmes termes par les deux assemblées, puis approuvé soit par **référendum**, soit par le **Congrès à 3/5**. C\'est le chemin évoqué pour une « règle d\'or » budgétaire.' },
          { t: 'vf', q: 'Une motion de censure est adoptée si elle recueille la majorité absolue des membres de l\'Assemblée, soit 289 voix.', a: true, x: 'Seuls les votes favorables sont comptés. Exemple : le gouvernement de Michel Barnier a été renversé le 4 décembre 2024.' },
          { t: 'vf', q: 'Après une dissolution, le président peut à nouveau dissoudre l\'Assemblée dès le mois suivant les élections.', a: false, x: 'Article 12 : il est impossible de procéder à une nouvelle dissolution **dans l\'année** qui suit les élections législatives.' },
          { t: 'qcm', q: 'Que se passe-t-il si le Parlement ne s\'est pas prononcé sur le budget dans un délai de 70 jours ?', c: ['Le gouvernement peut le mettre en vigueur par ordonnance', 'Le budget précédent est reconduit automatiquement', 'L\'Assemblée est dissoute', 'Le Conseil constitutionnel rédige le budget'], a: 0, x: '**Article 47.** Autre outil : la « loi spéciale », qui autorise à lever l\'impôt en attendant un budget (utilisée fin 2024).' },
          { t: 'input', q: 'Combien de membres nommés compte le Conseil constitutionnel ?', a: ['9', 'neuf'], x: '9 membres nommés pour 9 ans, renouvelés par tiers tous les 3 ans.' }
        ]
      },
      {
        title: 'Justice & contre-pouvoirs', icon: '⚖️', exercises: [
          { t: 'match', q: 'Associe chaque institution à sa mission', pairs: [['Cour de cassation', 'Sommet de l\'ordre judiciaire'], ['Conseil d\'État', 'Sommet de l\'ordre administratif'], ['Cour des comptes', 'Contrôle l\'usage de l\'argent public'], ['Défenseur des droits', 'Défend les citoyens face aux administrations']], x: 'Le Défenseur des droits a été créé par la révision constitutionnelle de 2008.' },
          { t: 'qcm', q: 'Que permet la question prioritaire de constitutionnalité (QPC) ?', c: ['À un justiciable de contester une loi déjà en vigueur', 'Au président de saisir l\'ONU', 'Aux députés de bloquer un décret', 'Au Sénat de dissoudre l\'Assemblée'], a: 0, x: 'Créée en 2008 et en vigueur depuis le 1er mars 2010, elle est transmise au Conseil constitutionnel via la Cour de cassation ou le Conseil d\'État.' },
          { t: 'vf', q: 'La Cour des comptes est une juridiction.', a: true, x: 'C\'est une juridiction financière. Elle juge les comptes publics, contrôle la gestion et publie des rapports très repris par la presse (retraites, budget…).' },
          { t: 'qcm', q: 'Qui peut saisir le Conseil constitutionnel avant la promulgation d\'une loi ?', c: ['60 députés ou 60 sénateurs', 'N\'importe quel citoyen', 'Seulement le président de la République', 'Le Conseil d\'État'], a: 0, x: 'Aussi : le président de la République, le Premier ministre et les présidents des deux assemblées. Les citoyens passent par la QPC, après promulgation.' },
          { t: 'qcm', q: 'Comment l\'état d\'urgence est-il déclaré ?', c: ['Par décret en Conseil des ministres, puis prolongé par la loi au-delà de 12 jours', 'Par un vote du Sénat', 'Par référendum', 'Par le Conseil constitutionnel'], a: 0, x: 'Il est régi par la **loi du 3 avril 1955**. Il ne faut pas le confondre avec l\'article 16 ni avec l\'état de siège.' },
          { t: 'order', q: 'Remets dans l\'ordre le parcours d\'une loi', items: ['Dépôt d\'un projet ou d\'une proposition de loi', 'Examen en commission', 'Vote dans la première assemblée', 'Navette avec la seconde assemblée', 'Promulgation par le président de la République'], x: 'Un projet vient du gouvernement, une proposition vient des parlementaires.' },
          { t: 'vf', q: 'Le Premier ministre peut révoquer le président de la République.', a: false, x: 'Seul le Parlement réuni en Haute Cour peut destituer le président, pour un manquement manifestement incompatible avec l\'exercice de son mandat (article 68).' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------- */
  {
    id: 'monde', title: 'Europe & monde', subtitle: 'UE, ONU, justice internationale, géopolitique', icon: '🌍', color: '#0FA3B1',
    guide: [
      '**UE : 27 États membres** depuis le Brexit (effectif le 31 janvier 2020). La Commission (Bruxelles) propose, le Parlement (Strasbourg, 720 eurodéputés dont 81 Français) et le Conseil de l\'UE votent.',
      '**Piège classique** : le Conseil européen réunit les chefs d\'État et de gouvernement, le Conseil de l\'UE réunit les ministres, et le **Conseil de l\'Europe** (46 États, hors UE) veille à la Convention européenne des droits de l\'homme.',
      '**BCE** à Francfort : sa mission est la stabilité des prix. Critères de **Maastricht** : déficit public ≤ 3 % du PIB et dette ≤ 60 %.',
      '**ONU : 193 États membres**, siège à New York. Le Conseil de sécurité compte 15 membres, dont 5 permanents avec droit de veto : États-Unis, Russie, Chine, France, Royaume-Uni.',
      '**CIJ** (La Haye) : juge les **États**. **CPI** (La Haye, statut de Rome de 1998) : juge les **individus**. La **CEDH** (Strasbourg) juge les violations de la Convention européenne des droits de l\'homme.',
      '**OTAN** : fondée en 1949, siège à Bruxelles, 32 membres (Finlande en 2023, Suède en 2024). **Accord de Paris** (COP21, 2015) : contenir le réchauffement nettement en dessous de 2 °C, et viser 1,5 °C.'
    ],
    lessons: [
      {
        title: 'L\'Union européenne', icon: '💶', exercises: [
          { t: 'qcm', q: 'Combien d\'États compte l\'Union européenne ?', c: ['25', '27', '28', '30'], a: 1, x: '27 depuis la sortie du Royaume-Uni (28 avant le Brexit).' },
          { t: 'match', q: 'Ne confonds plus ces conseils', pairs: [['Conseil européen', 'Réunit les chefs d\'État et de gouvernement de l\'UE'], ['Conseil de l\'UE', 'Réunit les ministres des États membres'], ['Conseil de l\'Europe', 'Organisation de 46 États, gardienne de la CEDH'], ['Commission européenne', 'Propose les textes et veille aux traités']], x: 'Le Conseil de l\'Europe ne fait **pas** partie de l\'UE.' },
          { t: 'qcm', q: 'Où le Parlement européen tient-il ses sessions plénières ?', c: ['Bruxelles', 'Luxembourg', 'Strasbourg', 'Francfort'], a: 2, x: 'Strasbourg pour les plénières. Les commissions se réunissent à Bruxelles et le secrétariat est installé à Luxembourg.' },
          { t: 'vf', q: 'Le Royaume-Uni a officiellement quitté l\'Union européenne le 31 janvier 2020.', a: true, x: 'Il fait suite au référendum de juin 2016. La relation avec l\'UE reste un sujet politique majeur outre-Manche.' },
          { t: 'qcm', q: 'Selon les critères de Maastricht, le déficit public ne doit pas dépasser…', c: ['1 % du PIB', '3 % du PIB', '5 % du PIB', '60 % du PIB'], a: 1, x: '3 % du PIB pour le déficit et 60 % du PIB pour la dette publique.' },
          { t: 'input', q: 'Combien d\'eurodéputés la France a-t-elle élus en 2024 ?', a: ['81', 'quatre-vingt-un', 'quatre vingt un'], x: 'Sur 720 eurodéputés. Les prochaines européennes auront lieu en 2029.' },
          { t: 'vf', q: 'La Banque centrale européenne siège à Bruxelles.', a: false, x: 'Elle siège à **Francfort**, en Allemagne.' },
          { t: 'order', q: 'Remets dans l\'ordre chronologique', items: ['Traité de Rome', 'Acte unique européen', 'Traité de Maastricht', 'Pièces et billets en euros', 'Traité de Lisbonne'], x: '1957 → 1986 → 1992 → 2002 → 2007.' }
        ]
      },
      {
        title: 'ONU & justice internationale', icon: '🕊️', exercises: [
          { t: 'qcm', q: 'Combien d\'États sont membres de l\'ONU ?', c: ['150', '177', '193', '211'], a: 2, x: '193 États membres. Le Saint-Siège et la Palestine ont un statut d\'observateur.' },
          { t: 'qcm', q: 'Lequel de ces pays n\'est PAS membre permanent du Conseil de sécurité ?', c: ['Chine', 'Allemagne', 'Royaume-Uni', 'Russie'], a: 1, x: 'Les cinq permanents sont les États-Unis, la Russie, la Chine, la France et le Royaume-Uni.' },
          { t: 'match', q: 'Qui juge quoi ?', pairs: [['CIJ', 'Juge les différends entre États'], ['CPI', 'Juge des individus (génocide, crimes de guerre…)'], ['CEDH', 'Juge les violations de la Convention européenne des droits de l\'homme'], ['Conseil de sécurité', 'Maintient la paix et la sécurité internationales']], x: 'Pense à « I » comme individus pour la CPI.' },
          { t: 'vf', q: 'La CIJ et la CPI siègent toutes les deux à La Haye.', a: true, x: 'Les deux siègent à La Haye, aux Pays-Bas, mais ce sont deux juridictions distinctes. La CIJ est l\'organe judiciaire principal de l\'ONU.' },
          { t: 'qcm', q: 'Quel État a saisi la CIJ en 2019 contre la Birmanie pour le génocide des Rohingya ?', c: ['La Gambie', 'Le Bangladesh', 'La France', 'L\'Afrique du Sud'], a: 0, x: 'La **Gambie**, au nom de l\'Organisation de la coopération islamique. L\'Afrique du Sud a saisi la CIJ contre Israël en décembre 2023.' },
          { t: 'qcm', q: 'Qui est le secrétaire général de l\'ONU dont le second mandat s\'achève fin 2026 ?', c: ['Ban Ki-moon', 'Kofi Annan', 'António Guterres', 'Boutros Boutros-Ghali'], a: 2, x: 'Le Portugais António Guterres est en poste depuis le 1er janvier 2017.' },
          { t: 'vf', q: 'Un membre permanent du Conseil de sécurité peut bloquer seul une résolution.', a: true, x: 'C\'est le **droit de veto**, souvent utilisé par la Russie et les États-Unis ces dernières années.' }
        ]
      },
      {
        title: 'Climat & géopolitique', icon: '🧭', exercises: [
          { t: 'qcm', q: 'Que signifie « COP » dans « COP31 » ?', c: ['Conférence des parties', 'Comité pour la protection', 'Convention océans et planète', 'Conseil des organisations publiques'], a: 0, x: 'C\'est la Conférence des parties à la Convention-cadre des Nations unies sur les changements climatiques (CCNUCC), adoptée au sommet de Rio en 1992.' },
          { t: 'qcm', q: 'Quel objectif fixe l\'Accord de Paris (COP21, 2015) ?', c: ['Contenir le réchauffement nettement en dessous de 2 °C, en visant 1,5 °C', 'Interdire le charbon d\'ici 2020', 'Réduire de 10 % les émissions mondiales', 'Planter un milliard d\'arbres'], a: 0, x: 'Chaque État fixe ses propres engagements (les « contributions déterminées au niveau national »).' },
          { t: 'vf', q: 'L\'OTAN a été fondée en 1949.', a: true, x: 'Elle a été fondée par le traité de Washington. Son article 5 prévoit la défense collective. Elle compte 32 membres depuis l\'adhésion de la Suède en 2024.' },
          { t: 'qcm', q: 'Lequel de ces pays ne fait PAS partie du G7 ?', c: ['Japon', 'Canada', 'Chine', 'Italie'], a: 2, x: 'Le G7 réunit les États-Unis, le Canada, la France, l\'Allemagne, l\'Italie, le Japon et le Royaume-Uni (et l\'UE y est associée).' },
          { t: 'order', q: 'Remets ces événements dans l\'ordre', items: ['Chute du mur de Berlin', 'Attentats du 11-Septembre', 'Annexion de la Crimée par la Russie', 'Invasion à grande échelle de l\'Ukraine'], x: '1989 → 2001 → 2014 → 24 février 2022.' },
          { t: 'qcm', q: 'Quel pays domine très largement l\'extraction et surtout le raffinage des terres rares ?', c: ['Les États-Unis', 'La Chine', 'Le Brésil', 'L\'Australie'], a: 1, x: 'D\'où les stratégies européennes et françaises pour réduire cette dépendance (stocks stratégiques, nouvelles mines, recyclage).' },
          { t: 'input', q: 'Dans quelle ville se trouve le siège de l\'OTAN ?', a: ['Bruxelles'], x: 'Bruxelles, comme la Commission européenne.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------- */
  {
    id: 'medias', title: 'Histoire & paysage des médias', subtitle: 'De la Gazette aux pure players', icon: '📰', color: '#E63946',
    guide: [
      '**1631** : Théophraste Renaudot fonde *La Gazette*. **29 juillet 1881** : la loi sur la liberté de la presse, texte fondateur toujours en vigueur.',
      '**1944** : ordonnances sur la presse et création de l\'**AFP** (héritière de l\'agence Havas, fondée en 1835). La même année, Hubert Beuve-Méry fonde *Le Monde*.',
      'Dates clés : *Le Figaro* (1826, le plus ancien quotidien encore publié), *Le Canard enchaîné* (1915), *Libération* (1973), *Mediapart* (2008). L\'ORTF disparaît en 1974, Canal+ naît en 1984 et TF1 est privatisée en 1987.',
      '**Arcom** (2022) : fusion du CSA et de la Hadopi, elle régule l\'audiovisuel et le numérique. En février 2025, C8 et NRJ12 ont quitté la TNT faute de renouvellement de leurs fréquences.',
      '**Droits voisins** (directive européenne de 2019, loi française de juillet 2019) : ils permettent aux éditeurs de presse d\'être rémunérés par les plateformes qui réutilisent leurs contenus.',
      'Grandes enquêtes : **Watergate** (*Washington Post*, démission de Nixon en 1974), **Pentagon Papers** (*New York Times*, 1971), **affaire Cahuzac** (Mediapart, 2012), **Panama Papers** (ICIJ, 2016).'
    ],
    lessons: [
      {
        title: 'Les grandes dates', icon: '🗓️', exercises: [
          { t: 'qcm', q: 'De quand date la grande loi sur la liberté de la presse ?', c: ['14 juillet 1789', '29 juillet 1881', '9 décembre 1905', '26 août 1944'], a: 1, x: 'Elle proclame que « l\'imprimerie et la librairie sont libres » et encadre aussi les abus (diffamation, injure…).' },
          { t: 'qcm', q: 'Qui a fondé La Gazette, l\'un des premiers périodiques français, en 1631 ?', c: ['Émile de Girardin', 'Théophraste Renaudot', 'Victor Hugo', 'Charles Havas'], a: 1, x: 'Un prix littéraire porte son nom. Émile de Girardin a lancé la presse bon marché avec *La Presse* en 1836.' },
          { t: 'order', q: 'Remets dans l\'ordre chronologique', items: ['La Gazette de Renaudot', 'Loi sur la liberté de la presse', 'Création de l\'AFP', 'Fin de l\'ORTF', 'Privatisation de TF1'], x: '1631 → 1881 → 1944 → 1974 → 1987.' },
          { t: 'vf', q: 'L\'AFP a été créée à la Libération, en 1944, dans la lignée de l\'agence Havas.', a: true, x: 'Son statut actuel date de 1957 et garantit son indépendance. C\'est l\'une des trois grandes agences mondiales, avec Reuters et AP.' },
          { t: 'match', q: 'Associe chaque journal à son origine', pairs: [['Le Figaro', '1826, plus ancien quotidien encore publié'], ['Le Monde', '1944, fondé par Hubert Beuve-Méry'], ['Libération', '1973, avec Jean-Paul Sartre'], ['Mediapart', '2008, pure player d\'Edwy Plenel']], x: 'Ce sont des classiques des QCM de culture médiatique.' },
          { t: 'qcm', q: 'En quelle année est né Le Canard enchaîné ?', c: ['1915', '1945', '1968', '1981'], a: 0, x: 'Il est né pendant la Première Guerre mondiale, contre le « bourrage de crâne ». C\'est un hebdomadaire satirique, sans publicité.' },
          { t: 'vf', q: 'Le Watergate, révélé par le Washington Post, a conduit à la démission de Richard Nixon en 1974.', a: true, x: 'L\'enquête est signée Bob Woodward et Carl Bernstein, aidés par une source surnommée « Deep Throat ».' }
        ]
      },
      {
        title: 'Le paysage actuel', icon: '📡', exercises: [
          { t: 'qcm', q: 'De quelle fusion est née l\'Arcom en 2022 ?', c: ['CSA + Hadopi', 'CNIL + CSA', 'AFP + INA', 'Hadopi + CNIL'], a: 0, x: 'L\'Autorité de régulation de la communication audiovisuelle et numérique veille notamment au pluralisme et attribue les fréquences.' },
          { t: 'qcm', q: 'Quel est le quotidien le plus diffusé en France ?', c: ['Le Monde', 'Le Figaro', 'Ouest-France', 'Le Parisien'], a: 2, x: '**Ouest-France**, titre de presse quotidienne régionale (PQR), dont le siège est à Rennes.' },
          { t: 'vf', q: 'En février 2025, C8 a cessé d\'émettre sur la TNT après le non-renouvellement de sa fréquence par l\'Arcom.', a: true, x: 'NRJ12 a connu le même sort. Cette décision a relancé le débat sur le pluralisme et les obligations des chaînes.' },
          { t: 'match', q: 'Associe chaque média à sa catégorie', pairs: [['AFP', 'Agence de presse'], ['Ouest-France', 'Presse quotidienne régionale'], ['Mediapart', 'Pure player'], ['France Inter', 'Radio de service public']], x: 'Un pure player est un média qui n\'existe qu\'en ligne.' },
          { t: 'qcm', q: 'À quoi servent les « droits voisins » ?', c: ['Rémunérer les éditeurs de presse quand les plateformes réutilisent leurs contenus', 'Protéger la vie privée des voisins de célébrités', 'Partager les fréquences radio entre pays voisins', 'Autoriser la reprise gratuite d\'articles'], a: 0, x: 'Ils sont issus d\'une directive européenne de 2019. La France a été le premier pays à la transposer, en juillet 2019.' },
          { t: 'input', q: 'Quel grand reporter donne son nom au prix le plus prestigieux du journalisme francophone ?', a: ['Albert Londres', 'Londres', 'prix Albert Londres', 'prix Albert-Londres'], x: 'Le prix Albert-Londres existe depuis 1933. Sa devise : « porter la plume dans la plaie ».' },
          { t: 'vf', q: 'Le classement mondial de la liberté de la presse est publié chaque année par Reporters sans frontières.', a: true, x: 'RSF a été fondée en 1985 à Montpellier. Le classement couvre 180 pays et territoires.' }
        ]
      },
      {
        title: 'Grandes enquêtes', icon: '🔎', exercises: [
          { t: 'qcm', q: 'Quel consortium a coordonné les « Panama Papers » en 2016 ?', c: ['L\'ICIJ', 'L\'AFP', 'Reporters sans frontières', 'L\'Unesco'], a: 0, x: 'Le Consortium international des journalistes d\'investigation a coordonné le travail de plus de 370 journalistes sur 11,5 millions de documents. Le Monde était le partenaire français.' },
          { t: 'qcm', q: 'Quel média a révélé en 2012 le compte caché à l\'étranger du ministre du Budget Jérôme Cahuzac ?', c: ['Le Canard enchaîné', 'Mediapart', 'Le Point', 'Libération'], a: 1, x: 'Le ministre a fini par avouer en avril 2013. L\'affaire a conduit à la création de la Haute Autorité pour la transparence de la vie publique.' },
          { t: 'qcm', q: 'Sur quel sujet portaient les « Pentagon Papers » publiés en 1971 ?', c: ['La guerre du Vietnam', 'La conquête spatiale', 'Le Watergate', 'La crise de Cuba'], a: 0, x: 'Le New York Times les a publiés. La Cour suprême a ensuite confirmé le droit de publier au nom du Premier amendement.' },
          { t: 'vf', q: 'L\'attentat contre la rédaction de Charlie Hebdo a eu lieu le 7 janvier 2015.', a: true, x: 'Il a fait douze morts, dont les dessinateurs Cabu, Charb, Honoré, Tignous et Wolinski.' },
          { t: 'match', q: 'Associe chaque lanceur d\'alerte à ses révélations', pairs: [['Edward Snowden', 'Surveillance de masse de la NSA (2013)'], ['Chelsea Manning', 'Documents militaires américains via WikiLeaks (2010)'], ['Antoine Deltour', 'LuxLeaks, accords fiscaux au Luxembourg (2014)'], ['Frances Haugen', 'Facebook Files (2021)']], x: 'En France, la loi Sapin II (2016) a défini un statut de lanceur d\'alerte, renforcé en 2022.' },
          { t: 'qcm', q: 'À qui doit-on la formule « porter la plume dans la plaie » ?', c: ['Albert Londres', 'Émile Zola', 'Joseph Kessel', 'Françoise Giroud'], a: 0, x: 'Elle est souvent citée pour définir le journalisme d\'enquête et de reportage.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------- */
  {
    id: 'deonto', title: 'Déontologie & droit', subtitle: 'Ce qu\'un·e journaliste peut (et ne peut pas) faire', icon: '⚖️', color: '#8E44AD',
    guide: [
      '**Charte d\'éthique du SNJ** (1918, révisée en 1938 et en 2011) et **Charte de Munich** (1971, Déclaration des devoirs et des droits des journalistes) : respect de la vérité, recoupement, refus de confondre journalisme et publicité.',
      '**Loi Brachard (1935)** : elle crée le statut de journaliste professionnel, la carte de presse (délivrée par la CCIJP à qui tire l\'essentiel de ses revenus du journalisme) et la **clause de conscience**.',
      '**Secret des sources** : il est protégé par la loi du 4 janvier 2010 (« loi Dati »). On ne peut y porter atteinte qu\'à titre exceptionnel, pour un impératif prépondérant d\'intérêt public.',
      '**Diffamation** : imputation d\'un fait précis qui porte atteinte à l\'honneur. **Injure** : expression outrageante sans fait précis. Délai de **prescription : 3 mois** (1 an pour les propos racistes ou discriminatoires).',
      '**Bonne foi**, 4 critères : légitimité du but, absence d\'animosité personnelle, prudence et mesure dans l\'expression, sérieux de l\'enquête. **Droit de réponse** : article 13 de la loi de 1881.',
      '**Présomption d\'innocence** (article 9-1 du Code civil) : on écrit « suspect », « mis en examen », « prévenu », « accusé »… jamais « coupable » avant un jugement définitif.'
    ],
    lessons: [
      {
        title: 'Les textes fondateurs', icon: '📘', exercises: [
          { t: 'qcm', q: 'Qu\'est-ce que la Charte de Munich (1971) ?', c: ['La Déclaration des devoirs et des droits des journalistes', 'Le traité fondateur de l\'UE', 'Un code de la publicité', 'La charte de l\'audiovisuel public allemand'], a: 0, x: 'Elle a été adoptée par des syndicats de journalistes européens. Elle énonce 10 devoirs et 5 droits.' },
          { t: 'qcm', q: 'De quand date la première charte déontologique des journalistes français (SNJ) ?', c: ['1881', '1918', '1945', '1971'], a: 1, x: 'Elle a été révisée en 1938 puis en 2011 (« Charte d\'éthique professionnelle des journalistes »).' },
          { t: 'vf', q: 'La loi Brachard de 1935 a créé le statut de journaliste professionnel et la clause de conscience.', a: true, x: 'Elle a aussi donné naissance à la carte de presse, délivrée par la Commission de la carte d\'identité des journalistes professionnels (CCIJP).' },
          { t: 'qcm', q: 'Que permet la clause de conscience ?', c: ['Quitter son média avec indemnités en cas de changement notable de sa ligne éditoriale', 'Refuser de payer ses impôts', 'Ne jamais citer ses sources', 'Publier sans relecture'], a: 0, x: 'La clause de cession, elle, joue en cas de rachat du média.' },
          { t: 'input', q: 'Comment surnomme-t-on la loi du 4 janvier 2010 qui protège le secret des sources ?', a: ['loi Dati', 'Dati'], hint: 'Du nom de la garde des Sceaux de l\'époque.', x: 'Elle a été portée par Rachida Dati, alors ministre de la Justice.' },
          { t: 'vf', q: 'En France, le secret des sources est absolu : aucune exception n\'est possible.', a: false, x: 'Une atteinte est possible « à titre exceptionnel », si un **impératif prépondérant d\'intérêt public** la justifie.' },
          { t: 'vf', q: 'La Charte de Munich demande de ne jamais confondre le métier de journaliste avec celui de publicitaire ou de propagandiste.', a: true, x: 'C\'est l\'un de ses devoirs essentiels, avec le respect de la vérité et la rectification des informations inexactes.' }
        ]
      },
      {
        title: 'Diffamation & compagnie', icon: '🧑‍⚖️', exercises: [
          { t: 'match', q: 'Associe chaque notion à sa définition', pairs: [['Diffamation', 'Imputation d\'un fait précis qui porte atteinte à l\'honneur'], ['Injure', 'Expression outrageante sans imputation de fait'], ['Droit de réponse', 'Faire publier sa réponse quand on est mis en cause'], ['Présomption d\'innocence', 'Ne pas présenter comme coupable une personne non jugée']], x: 'Ces quatre notions tombent très souvent aux concours.' },
          { t: 'qcm', q: 'Quel est le délai de prescription de la diffamation « simple » ?', c: ['24 heures', '3 mois', '3 ans', '10 ans'], a: 1, x: '**3 mois** après la publication. Le délai passe à 1 an pour les diffamations à caractère raciste ou discriminatoire.' },
          { t: 'qcm', q: 'Lequel n\'est PAS un critère de la bonne foi du journaliste ?', c: ['Le sérieux de l\'enquête', 'La prudence dans l\'expression', 'L\'absence d\'animosité personnelle', 'Le nombre de lecteurs de l\'article'], a: 3, x: 'Les 4 critères sont la légitimité du but, l\'absence d\'animosité personnelle, la prudence et la mesure, et le sérieux de l\'enquête.' },
          { t: 'vf', q: 'Écrire « le coupable présumé » respecte la présomption d\'innocence.', a: false, x: 'On parle de « suspect », de « mis en cause », de « mis en examen » ou de « prévenu ». La personne est **présumée innocente**.' },
          { t: 'qcm', q: 'Que signifie « mis en examen » ?', c: ['Il existe des indices graves ou concordants de sa participation aux faits', 'La personne a été condamnée', 'La personne est simplement témoin', 'L\'enquête est classée'], a: 0, x: 'C\'est une étape de l\'instruction et non une condamnation. Le « témoin assisté » est un statut intermédiaire.' },
          { t: 'vf', q: 'Une personne peut s\'opposer à la diffusion de son image, sauf exceptions comme l\'information sur l\'actualité ou un débat d\'intérêt général.', a: true, x: 'Le droit à l\'image découle du respect de la vie privée (article 9 du Code civil). Les tribunaux mettent en balance ce droit et la liberté d\'informer.' }
        ]
      },
      {
        title: 'Cas pratiques', icon: '🧩', exercises: [
          { t: 'qcm', q: 'Une source vous livre une information explosive mais refuse d\'être citée. Premier réflexe ?', c: ['Recouper l\'information auprès d\'autres sources avant de publier', 'Publier immédiatement en écrivant « selon une source »', 'Révéler son nom pour être crédible', 'Abandonner le sujet'], a: 0, x: 'Une source anonyme peut être protégée, mais l\'information doit être **vérifiée et recoupée**.' },
          { t: 'qcm', q: 'Une vidéo spectaculaire « de l\'attaque d\'hier » devient virale. Que faites-vous en premier ?', c: ['Une recherche d\'image inversée pour retrouver son origine et sa date', 'La partager avec la mention « à vérifier »', 'L\'intégrer à l\'article : elle a beaucoup de vues', 'Demander l\'avis des commentateurs'], a: 0, x: 'Les vieilles vidéos recyclées sont un grand classique de l\'infox. Il faut chercher la première publication, géolocaliser la scène et la dater.' },
          { t: 'qcm', q: 'Qu\'est-ce qu\'un « embargo » ?', c: ['L\'interdiction de publier une information avant une date ou une heure fixée', 'Une sanction de l\'Arcom', 'Un article payant', 'Un démenti officiel'], a: 0, x: 'Il est fréquent pour les études, les rapports ou les discours transmis à l\'avance aux rédactions.' },
          { t: 'qcm', q: 'Une marque vous invite tous frais payés au lancement d\'un produit dont vous devez parler. Que faire ?', c: ['Refuser, ou le mentionner clairement et garder une totale liberté de ton', 'Accepter et écrire un article élogieux', 'Accepter sans le dire', 'Demander à la marque de relire l\'article'], a: 0, x: 'C\'est une question d\'indépendance et de transparence : on ne fait jamais relire un article par la personne ou la marque concernée.' },
          { t: 'vf', q: 'On peut publier le nom d\'un mineur victime d\'une agression sexuelle si l\'information est vraie.', a: false, x: 'La loi de 1881 interdit de diffuser des éléments permettant d\'identifier un mineur victime, ou une victime d\'agression sexuelle sans son accord.' },
          { t: 'qcm', q: 'Vous avez publié une erreur factuelle. Que dit la déontologie ?', c: ['Rectifier rapidement et de façon visible', 'Supprimer l\'article sans rien dire', 'Attendre une plainte', 'Ne rien faire si personne ne l\'a remarquée'], a: 0, x: 'La Charte de Munich impose de rectifier toute information publiée qui se révèle inexacte.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------- */
  {
    id: 'ecriture', title: 'Techniques d\'écriture', subtitle: 'Titrer, attaquer, hiérarchiser', icon: '✍️', color: '#F4A261',
    guide: [
      '**Pyramide inversée** : l\'essentiel d\'abord (qui, quoi, où, quand), puis les explications (comment, pourquoi), et le contexte en dernier.',
      '**QQOQCP** : Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ? (en anglais, les « 5 W »). Une bonne attaque répond déjà à la plupart.',
      'Anatomie d\'un article : **titre**, **chapô** (2 ou 3 lignes qui résument et donnent envie), **attaque** (première phrase), **relances** et **intertitres**, **chute** (dernière phrase).',
      'Titre **informatif** (il dit l\'info) ou **incitatif** (jeu de mots, image, il pousse à lire). Au concours, la clarté prime.',
      'Genres : brève, filet, compte rendu, reportage (choses vues et entendues), portrait, interview, enquête, éditorial (position du journal), billet, chronique, tribune (auteur extérieur).',
      'Style : phrases courtes, voix active, verbes précis, chiffres arrondis et sourcés. On évite les adjectifs inutiles et le jargon. Pour introduire une citation de façon neutre, on écrit « a déclaré » ou « a dit ».'
    ],
    lessons: [
      {
        title: 'Les bases', icon: '🔺', exercises: [
          { t: 'qcm', q: 'Quel est le principe de la pyramide inversée ?', c: ['Commencer par l\'information essentielle', 'Garder la révélation pour la fin', 'Raconter dans l\'ordre chronologique', 'Commencer par une citation'], a: 0, x: 'Le lecteur peut s\'arrêter à tout moment et il aura quand même eu l\'essentiel.' },
          { t: 'order', q: 'Ordonne les éléments selon la pyramide inversée', items: ['L\'information principale (qui, quoi, où, quand)', 'Les explications (comment, pourquoi)', 'Les réactions et les détails', 'Le contexte et l\'arrière-plan'], x: 'L\'ordre va du plus important au moins important.' },
          { t: 'match', q: 'Associe chaque élément de l\'article à son rôle', pairs: [['Chapô', 'Court texte sous le titre qui résume et accroche'], ['Attaque', 'Première phrase de l\'article'], ['Chute', 'Dernière phrase, qui conclut'], ['Intertitre', 'Titre intermédiaire qui relance la lecture']], x: 'L\'attaque et la chute sont les deux phrases les plus travaillées d\'un article.' },
          { t: 'qcm', q: 'Lequel de ces titres est INCITATIF ?', c: ['« Au bal des pétroliers, le climat fait tapisserie »', '« La conférence sur le climat s\'achève sans accord »', '« Les négociations climatiques échouent sur les énergies fossiles »', '« Pas d\'accord final à la conférence climat »'], a: 0, x: 'Un titre incitatif joue sur une image ou un jeu de mots. Il est souvent accompagné d\'un sous-titre informatif.' },
          { t: 'vf', q: 'Un éditorial exprime la position de la rédaction ou du journal.', a: true, x: 'Il est souvent signé par le directeur ou la directrice de la rédaction. Il ne faut pas le confondre avec la tribune, écrite par une personne extérieure.' },
          { t: 'match', q: 'Associe chaque genre journalistique à sa définition', pairs: [['Brève', 'Information de quelques lignes, sans titre développé'], ['Reportage', 'Récit de terrain, fait de choses vues et entendues'], ['Portrait', 'Article centré sur une personne'], ['Enquête', 'Travail de fond qui révèle des faits cachés']], x: 'Les concours demandent souvent un reportage ou un portrait.' },
          { t: 'input', q: 'Comment appelle-t-on un sujet qui revient tous les ans à la même période (rentrée, soldes, canicule…) ?', a: ['marronnier', 'un marronnier', 'le marronnier'], x: 'Le mot viendrait d\'un marronnier du jardin des Tuileries qui fleurissait chaque année très tôt, au printemps.' },
          { t: 'write', q: 'Titre cette dépêche (10 mots maximum)', src: '(Dépêche fictive) Le conseil municipal de Saint-Aubin-sur-Loire a voté lundi soir la gratuité des bus pour les moins de 26 ans à partir du 1er janvier. La mesure coûtera 1,2 million d\'euros par an à la commune.', model: 'Saint-Aubin-sur-Loire : bus gratuits pour les moins de 26 ans dès janvier', crit: ['10 mots maximum', 'L\'information principale est immédiatement claire', 'Le lieu ou le public concerné apparaît', 'Pas de jeu de mots qui brouille le sens'] }
        ]
      },
      {
        title: 'Vocabulaire de rédaction', icon: '🗞️', exercises: [
          { t: 'match', q: 'Parle comme en conférence de rédaction', pairs: [['Bouclage', 'Moment où l\'on termine le journal avant impression'], ['Ours', 'Encadré qui liste l\'équipe et l\'éditeur'], ['Manchette', 'Titre principal de la une'], ['Secrétaire de rédaction', 'Relit, corrige, titre et calibre les articles']], x: 'Le secrétaire de rédaction (SR) est un maillon essentiel, souvent méconnu.' },
          { t: 'qcm', q: 'Qu\'est-ce qu\'un ou une pigiste ?', c: ['Un·e journaliste rémunéré·e à l\'article ou au sujet', 'Un·e stagiaire non payé·e', 'Le ou la responsable de la publicité', 'Un·e photographe de presse uniquement'], a: 0, x: 'Être payé « à la pige » est un statut fréquent en début de carrière. Les pigistes peuvent obtenir la carte de presse.' },
          { t: 'qcm', q: 'En journalisme, qu\'est-ce que l\'« angle » ?', c: ['Le point de vue précis choisi pour traiter un sujet', 'La place de l\'article sur la page', 'L\'orientation politique du journal', 'Le cadrage de la photo'], a: 0, x: 'Un sujet (« les crues ») n\'est pas un angle (« comment les sinistrés font face aux assurances »).' },
          { t: 'vf', q: 'Une dépêche est un texte produit par une agence de presse.', a: true, x: 'Elle est factuelle et rapide, et suit la pyramide inversée. Les rédactions la reprennent ou s\'en servent comme alerte.' },
          { t: 'qcm', q: 'Que désigne « le desk » dans une rédaction ?', c: ['Les journalistes qui traitent l\'info depuis la rédaction, sans aller sur le terrain', 'Le bureau du directeur', 'Le service publicité', 'Les archives'], a: 0, x: 'On l\'oppose aux reporters de terrain. Le desk édite, vérifie et met en forme l\'information.' },
          { t: 'input', q: 'Comment s\'appelle un texte d\'opinion écrit par une personne extérieure à la rédaction ?', a: ['tribune', 'une tribune', 'la tribune'], x: 'Le Monde en publie chaque jour dans ses pages « Débats ».' }
        ]
      },
      {
        title: 'Atelier : angle & style', icon: '🖋️', exercises: [
          { t: 'qcm', q: 'Sujet : « les crues dans le Nord ». Lequel de ces choix est un véritable ANGLE ?', c: ['Comment les sinistrés affrontent la course aux indemnisations', 'Les crues', 'La météo dans le Nord', 'L\'eau'], a: 0, x: 'Un angle se résume en une phrase précise et dit ce que l\'article va montrer.' },
          { t: 'order', q: 'Remets les paragraphes de cette brève dans l\'ordre (pyramide inversée)', items: ['La France va constituer des stocks stratégiques de terres rares.', 'La Caisse des dépôts pilotera le projet.', 'Objectif : réduire la dépendance du pays à la Chine.', 'Ces métaux sont indispensables aux batteries, aux éoliennes et à l\'électronique.'], x: 'Les phrases vont de l\'annonce à la mise en œuvre, puis à l\'objectif et au contexte.' },
          { t: 'write', q: 'Réécris cette phrase en style journalistique : court, actif, précis', src: 'Il a été décidé par le conseil d\'administration, lors d\'une réunion qui s\'est tenue hier, que le directeur général serait remplacé dans ses fonctions.', model: 'Le conseil d\'administration a décidé hier de remplacer le directeur général.', crit: ['Voix active (le sujet fait l\'action)', 'Moins de 15 mots', 'Aucune information perdue', 'Pas de formule administrative (« il a été décidé que »)'] },
          { t: 'vf', q: 'Dans un article d\'information, on privilégie les phrases courtes et la voix active.', a: true, x: 'Comptez une idée par phrase. La voix passive cache souvent qui agit.' },
          { t: 'qcm', q: 'Quel verbe introduit une citation de la façon la plus NEUTRE ?', c: ['a déclaré', 'a avoué', 'a prétendu', 'a reconnu'], a: 0, x: '« Avouer » ou « reconnaître » supposent une faute, et « prétendre » met en doute la parole. Ce sont des jugements implicites.' },
          { t: 'write', q: 'Écris un chapô (2 phrases) à partir de ces faits', src: '(Faits fictifs) Lycée Jean-Moulin de Saint-Aubin · 240 élèves · club de journalisme créé il y a 3 ans · leur journal « La Plume » vient de remporter un prix national de presse lycéenne · remis mercredi à Paris.', model: 'Trois ans après sa création, le club de journalisme du lycée Jean-Moulin de Saint-Aubin décroche un prix national. Son journal, « La Plume », a été récompensé mercredi à Paris.', crit: ['L\'information principale (le prix) arrive tout de suite', 'Qui, quoi, où, quand sont présents', 'Deux phrases, sans détail superflu', 'Donne envie de lire la suite'] }
        ]
      }
    ]
  },

  /* ------------------------------------------------------- */
  {
    id: 'langue', title: 'Langue française', subtitle: 'Zéro faute dans ta copie', icon: '🔤', color: '#D6336C',
    guide: [
      '**Pallier** est transitif direct : on pallie *un* problème (pas « à »). On se rappelle *quelque chose* (pas « de »). Pas de « malgré que » : on écrit « bien que » + subjonctif.',
      '**Après que** + indicatif (« après qu\'il est parti »). **Bien que** + subjonctif.',
      'Participe passé avec **avoir** : il s\'accorde avec le COD placé avant (« les mesures qu\'il a prises »). Avec **fait + infinitif**, il est invariable (« elle s\'est fait opérer »). On écrit « ils se sont succédé » (on succède *à* quelqu\'un).',
      '**Quatre-vingts** et **deux cents** prennent un s s\'ils sont multipliés et ne sont suivis d\'aucun autre nombre. On écrit donc quatre-vingt-trois. **Mille** est invariable.',
      'Paronymes : **censé** (supposé) ou **sensé** (raisonnable), **conjoncture** (situation) ou **conjecture** (hypothèse), **davantage** (plus) ou **d\'avantage** (de bénéfice).',
      'Typographie : espace avant **: ; ? !** et guillemets français **« »**. On écrit « XXIe siècle », « 1er janvier », « les années 1990 ».'
    ],
    lessons: [
      {
        title: 'Pièges classiques', icon: '⚠️', exercises: [
          { t: 'qcm', q: 'Quelle phrase est correcte ?', c: ['Il faut pallier ce problème.', 'Il faut pallier à ce problème.', 'Il faut palier ce problème.'], a: 0, x: '« Pallier » est transitif direct, et un « palier » est une plateforme d\'escalier.' },
          { t: 'qcm', q: 'Laquelle de ces phrases est correcte ?', c: ['Bien qu\'il pleuve, la manifestation est maintenue.', 'Malgré qu\'il pleuve, la manifestation est maintenue.', 'Malgré qu\'il pleut, la manifestation est maintenue.'], a: 0, x: '« Malgré que » est à proscrire. On écrit « bien que » + subjonctif ou « malgré » + nom (« malgré la pluie »).' },
          { t: 'qcm', q: 'Complète : « Les mesures qu\'il a ___ sont impopulaires. »', c: ['prises', 'pris', 'prise', 'prit'], a: 0, x: 'Le COD « qu\' » (mis pour « les mesures », féminin pluriel) est placé avant l\'auxiliaire avoir, donc le participe s\'accorde.' },
          { t: 'qcm', q: 'Complète : « Le ministre est ___ annoncer sa réforme demain. »', c: ['censé', 'sensé', 'sencé'], a: 0, x: '« Censé » signifie supposé, et « sensé » signifie qui a du bon sens.' },
          { t: 'vf', q: '« Après qu\'il soit parti » est correct.', a: false, x: 'On écrit « après qu\'il **est** parti » : « après que » exprime un fait accompli, donc il se construit avec l\'indicatif.' },
          { t: 'qcm', q: 'Complète : « Les deux présidents se sont ___ à la tête du parti. »', c: ['succédé', 'succédés', 'succédées'], a: 0, x: 'On succède **à** quelqu\'un : « se » est COI, donc le participe ne s\'accorde pas.' },
          { t: 'input', q: 'Écris en toutes lettres : 80', a: ['quatre-vingts', 'quatre vingts'], x: 'Il prend un **s** car il est multiplié et n\'est suivi d\'aucun nombre. Mais on écrit quatre-vingt-un, quatre-vingt-trois…' },
          { t: 'qcm', q: 'Complète : « Il y a ___ de candidats cette année. »', c: ['davantage', 'd\'avantage', 'davantages'], a: 0, x: '« Davantage » veut dire plus. « D\'avantage » veut dire de bénéfice (« il n\'en tire pas d\'avantage »).' }
        ]
      },
      {
        title: 'Pléonasmes & impropriétés', icon: '🧽', exercises: [
          { t: 'match', q: 'Associe chaque pléonasme à sa correction', pairs: [['Prévoir à l\'avance', 'Prévoir'], ['Monter en haut', 'Monter'], ['Au jour d\'aujourd\'hui', 'Aujourd\'hui'], ['Voire même', 'Voire']], x: 'Un pléonasme répète inutilement une idée déjà contenue dans le mot.' },
          { t: 'qcm', q: 'Complète : « La ___ économique reste difficile. »', c: ['conjoncture', 'conjecture'], a: 0, x: 'La conjoncture est la situation du moment. Une conjecture est une hypothèse.' },
          { t: 'qcm', q: 'Quelle phrase est correcte ?', c: ['Je me rappelle cet été-là.', 'Je me rappelle de cet été-là.'], a: 0, x: 'On se rappelle quelque chose, mais on se **souvient de** quelque chose.' },
          { t: 'qcm', q: 'Quelle graphie est correcte ?', c: ['Quoi qu\'il en soit', 'Quoiqu\'il en soit'], a: 0, x: '« Quoi que » en deux mots veut dire quelle que soit la chose que. « Quoique » en un mot veut dire bien que.' },
          { t: 'qcm', q: 'Complète : « Elle s\'est ___ opérer la semaine dernière. »', c: ['fait', 'faite'], a: 0, x: '« Fait » suivi d\'un infinitif est toujours invariable.' },
          { t: 'qcm', q: 'Complète : « Elles sont ___ contentes du résultat. »', c: ['toutes', 'tout'], a: 0, x: 'Devant un adjectif féminin qui commence par une consonne, « tout » adverbe s\'accorde : « toutes contentes ». Mais on écrit « tout étonnées ».' },
          { t: 'input', q: 'Corrige l\'orthographe de ce mot souvent écorché : « infractus »', a: ['infarctus'], x: 'On écrit « infarctus », du latin *infarcire* (« farcir, remplir »).' }
        ]
      },
      {
        title: 'Typographie de presse', icon: '🔠', exercises: [
          { t: 'vf', q: 'En français, on met une espace avant les deux-points, le point-virgule, le point d\'interrogation et le point d\'exclamation.', a: true, x: 'C\'est idéalement une espace insécable, qui évite que le signe se retrouve seul en début de ligne.' },
          { t: 'qcm', q: 'Quelle graphie est correcte ?', c: ['le XXIe siècle', 'le 21ème siècle', 'le XXIème siècle', 'le vingt-et-unième Siècle'], a: 0, x: 'On écrit les siècles en chiffres romains (en petites capitales dans l\'idéal), suivis d\'un « e » en exposant.' },
          { t: 'qcm', q: 'Quels guillemets utilise-t-on en français ?', c: ['« … »', '" … "', '“ … ”', '‹ … ›'], a: 0, x: 'Ce sont les guillemets français, avec des espaces insécables à l\'intérieur. Les guillemets anglais “ ” servent pour une citation à l\'intérieur d\'une autre.' },
          { t: 'qcm', q: 'Comment écrit-on la date du Nouvel An ?', c: ['1er janvier', '1 janvier', '1ier janvier', '1° janvier'], a: 0, x: 'On écrit « 1er » pour premier, mais 2 janvier ou 3 janvier sans abréviation.' },
          { t: 'vf', q: 'On écrit « les années 1990 » plutôt que « les années 90’s ».', a: true, x: 'Le pluriel à l\'anglaise est fautif. Dans la presse, on écrit « les années 1990 » ou « les années 90 ».' },
          { t: 'qcm', q: 'Lequel est un acronyme (il se prononce comme un mot) ?', c: ['Otan', 'SNCF', 'RATP', 'BCE'], a: 0, x: 'Un sigle s\'épelle (SNCF), un acronyme se prononce comme un mot (Otan, Unesco). Beaucoup de rédactions écrivent les acronymes en minuscules après la première lettre.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------- */
  {
    id: 'societe', title: 'Économie & société', subtitle: 'Les repères qu\'on attend de toi', icon: '📊', color: '#2B9348',
    guide: [
      '**PIB** : valeur de la richesse produite dans un pays sur une période. **Inflation** : hausse générale et durable des prix. La **BCE** vise 2 % d\'inflation à moyen terme.',
      '**Déficit** : écart annuel entre dépenses et recettes. **Dette** : stock accumulé des emprunts. Ne pas les confondre !',
      '**Règle d\'or** budgétaire : principe d\'équilibre des comptes. L\'Allemagne a inscrit son « frein à l\'endettement » dans sa Loi fondamentale en **2009**.',
      'Retraites **par répartition** : les cotisations des actifs financent les pensions des retraités du moment.',
      'Repères : séparation des Églises et de l\'État (**1905**), droit de vote des femmes (**1944**, premier vote en 1945), loi Veil sur l\'IVG (**1975**), abolition de la peine de mort (**1981**), mariage pour tous (**2013**), IVG inscrite dans la Constitution (**2024**).',
      'Lieux de pouvoir : **Élysée** (président), **Matignon** (Premier ministre), **Palais-Bourbon** (Assemblée), **Palais du Luxembourg** (Sénat), **Bercy** (ministère de l\'Économie).'
    ],
    lessons: [
      {
        title: 'Les indicateurs', icon: '📈', exercises: [
          { t: 'qcm', q: 'Que mesure le PIB ?', c: ['La richesse produite dans un pays sur une période', 'Le patrimoine total des ménages', 'La dette publique', 'Le niveau des prix'], a: 0, x: 'Produit intérieur brut : la somme des valeurs ajoutées produites sur le territoire.' },
          { t: 'qcm', q: 'Qu\'est-ce que l\'inflation ?', c: ['Une hausse générale et durable des prix', 'Une hausse des salaires', 'Une baisse du chômage', 'Une hausse de la dette'], a: 0, x: 'Son contraire est la déflation. La BCE vise 2 % d\'inflation à moyen terme.' },
          { t: 'vf', q: 'Déficit public et dette publique, c\'est la même chose.', a: false, x: 'Le déficit est un **flux** annuel (dépenses moins recettes). La dette est un **stock**, qui augmente chaque année où l\'État est en déficit.' },
          { t: 'match', q: 'Que veulent dire ces sigles ?', pairs: [['Insee', 'Institut national de la statistique et des études économiques'], ['Smic', 'Salaire minimum interprofessionnel de croissance'], ['CAC 40', 'Indice des 40 principales valeurs de la Bourse de Paris'], ['PLFSS', 'Projet de loi de financement de la Sécurité sociale']], x: 'Le PLF (budget de l\'État) et le PLFSS sont examinés chaque automne au Parlement.' },
          { t: 'qcm', q: 'Quel pays a inscrit un « frein à l\'endettement » dans sa Constitution en 2009 ?', c: ['L\'Allemagne', 'La France', 'L\'Italie', 'Le Royaume-Uni'], a: 0, x: 'La *Schuldenbremse* limite le déficit structurel fédéral à 0,35 % du PIB. Elle a été assouplie en 2025 pour la défense et les infrastructures.' },
          { t: 'qcm', q: 'Que signifie un système de retraite « par répartition » ?', c: ['Les cotisations des actifs paient les pensions des retraités actuels', 'Chacun épargne pour sa propre retraite', 'L\'État verse la même pension à tous', 'Les entreprises paient seules les retraites'], a: 0, x: 'Le système par capitalisation repose, lui, sur l\'épargne placée de chacun.' }
        ]
      },
      {
        title: 'Repères de société', icon: '🧭', exercises: [
          { t: 'order', q: 'Remets ces grandes lois dans l\'ordre chronologique', items: ['Séparation des Églises et de l\'État', 'Droit de vote des femmes', 'Loi Veil sur l\'IVG', 'Abolition de la peine de mort', 'Mariage pour tous'], x: '1905 → 1944 → 1975 → 1981 → 2013.' },
          { t: 'qcm', q: 'Qui a porté l\'abolition de la peine de mort en 1981 ?', c: ['Robert Badinter', 'Simone Veil', 'Christiane Taubira', 'Pierre Mendès France'], a: 0, x: 'Le garde des Sceaux de François Mitterrand. Il est entré au Panthéon en octobre 2025.' },
          { t: 'vf', q: 'La liberté de recourir à l\'IVG est inscrite dans la Constitution française depuis 2024.', a: true, x: 'Elle a été adoptée par le Congrès réuni à Versailles le 4 mars 2024. La France est le premier pays à le faire.' },
          { t: 'match', q: 'Qui habite où ?', pairs: [['Élysée', 'Président de la République'], ['Matignon', 'Premier ministre'], ['Palais-Bourbon', 'Assemblée nationale'], ['Palais du Luxembourg', 'Sénat']], x: 'Les journalistes utilisent ces métonymies (« Matignon a annoncé… ») en permanence.' },
          { t: 'vf', q: 'Depuis 2016, la France métropolitaine compte 13 régions.', a: true, x: '13 régions métropolitaines (dont la Corse) et 5 régions d\'outre-mer, soit 18 au total.' },
          { t: 'qcm', q: 'En quelle année les Françaises ont-elles obtenu le droit de vote ?', c: ['1848', '1919', '1944', '1958'], a: 2, x: 'Par l\'ordonnance du 21 avril 1944. Elles votent pour la première fois aux municipales d\'avril 1945.' }
        ]
      }
    ]
  }
];

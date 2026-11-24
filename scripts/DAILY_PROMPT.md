# Scoop : consigne de mise à jour quotidienne

Ce fichier est la consigne qu'exécute la tâche planifiée chaque matin (ou que tu peux donner à Claude à la main).

## Étapes

1. Détermine la date du jour au format `AAAA-MM-JJ` (fuseau Europe/Paris). Si `data/days/<date>.js` existe déjà, arrête-toi, **sauf** si sa première ligne contient `SCOOP:REGENERER`. Dans ce cas, régénère-le entièrement (le nouveau fichier ne doit plus contenir ce marqueur) et, dans `index.js`, **remplace** l'entrée de cette date au lieu d'en ajouter une seconde.
   La structure de référence est `data/days/_modele.js`. Ne modifie jamais ce fichier et ne l'ajoute pas à `index.js`.
2. Lance la récupération des titres :
   - sous Linux ou macOS (routine cloud) : `python3 scripts/fetch_news.py` (et plus loin `python3 scripts/fetch_shorts.py`)
   - sous Windows : `powershell -ExecutionPolicy Bypass -File scripts\fetch-news.ps1` (et `scripts\fetch-shorts.ps1`)
3. Lis `scripts/news-today.txt`. **N'utilise que les faits présents dans ce fichier**, sans rien inventer ni compléter de mémoire (ta connaissance de l'actualité récente n'est pas fiable). Si un fait n'y figure pas, ne l'écris pas.
4. Choisis 8 à 10 sujets en équilibrant les thèmes : politique française, international, Europe, économie, climat ou sciences, médias (il en faut toujours au moins un : c'est le cœur des concours), société et culture. Laisse de côté les faits divers sans portée générale.
5. Écris `data/days/<date>.js` en suivant **exactement** la structure de `data/days/_modele.js` :
   - `title` : un titre d'édition de 60 à 80 caractères qui résume les 2 ou 3 sujets majeurs.
   - `intro` : 2 phrases.
   - `word` : un « mot du jour » (notion d'institutions, d'économie, de droit ou de médias liée à l'actu), défini en 2 ou 3 phrases.
   - `stories[]` : `{tag, title, text, why?, source, link}`. Le champ `text` fait 3 à 5 phrases, factuelles et sourcées. Le champ `why` relie l'info à une notion de concours. `tag` prend l'une des valeurs Politique, Monde, Europe, Économie, Climat, Médias, Justice, Société ou Culture. `link` est l'URL de l'article tirée du fichier.
   - `memo[]` : 4 ou 5 choses à retenir (dates, chiffres, noms).
   - `lessons[]` : **exactement 3 leçons**.
     1. « Le quiz de la une » ☕ (France), 9 ou 10 exercices.
     2. « Le tour du monde » 🌍 (international et Europe), 8 ou 9 exercices.
     3. « Médias & atelier » 🎙️, 7 ou 8 exercices, dont **2 `write`** (titrer une dépêche, rédiger une attaque ou un chapô) construits sur une vraie info du jour.
   - Varie les types : surtout des `qcm` et des `vf`, au moins un `match` ou un `order` par leçon. Un `input` est possible si la réponse est courte et sans ambiguïté.
   - Les mauvaises réponses des QCM doivent être plausibles, et toujours dans le même domaine que la bonne.
   - Chaque exercice a une explication `x` courte, qui ajoute un élément de contexte utile pour un concours.
   - Échappe les apostrophes (`\'`) dans les chaînes entre apostrophes.
5 bis. **Vidéos du fil (format Shorts)**
   - Lance `powershell -ExecutionPolicy Bypass -File scripts\fetch-shorts.ps1`, puis lis `scripts/shorts-today.txt` (format : source | date | id | intégrable | titre).
   - Choisis **8 à 12 Shorts**, uniquement avec `intégrable = oui`. Ils doivent couvrir l'actualité : politique, international, société, climat, médias, sciences.
   - **Exclus** le divertissement, le lifestyle, le cinéma et les séries, les conseils santé ou cuisine, les bandes-annonces et l'autopromotion. Exclus aussi les extraits de débats d'opinion où un éditorialiste donne son avis (titres entre « … » attribués à un chroniqueur), et les faits divers sordides sans portée générale.
   - **Varie les sources** : au moins 5 rédactions différentes, et 3 vidéos au maximum par rédaction.
   - Quand une vidéo traite d'une info retenue dans `stories`, relie-la avec `story: <index dans stories>`. Vise au moins 4 vidéos reliées.
   - Ajoute le tableau `shorts` dans le fichier du jour, comme dans `_modele.js` : `{ id, source, title, tag, story? }`. Reprends le titre tel quel, en retirant seulement les suffixes du type « • FRANCE 24 ».
   - Ne pose **aucune question de quiz sur le contenu d'une vidéo** : tu n'en connais que le titre.
   - Si le script échoue, mets `shorts: []`. Le fil fonctionnera alors avec les cartes et les questions seulement.
6. Ajoute l'édition **en tête** de `data/days/index.js` : `{ date: '<date>', title: '<title>', lessons: 3 }`.
7. Vérifie que le fichier est du JavaScript valide (accolades, virgules, apostrophes échappées). Ouvre `index.html` si possible.

## Rappels sur les types d'exercices

```
qcm   {t:'qcm', q, c:[4 choix], a:index_bonne_réponse, x}
vf    {t:'vf', q:'affirmation', a:true|false, x}
input {t:'input', q, a:['réponse', 'variante'], hint?, x}
order {t:'order', q, items:[dans le BON ordre], x}
match {t:'match', q, pairs:[[gauche, droite], x4], x}
write {t:'write', q, src, model, crit:[4 critères]}
```

L'application mélange elle-même les choix et les éléments. Mets toujours la bonne réponse où tu veux, en indiquant son index dans `a`.

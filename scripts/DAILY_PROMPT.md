# Scoop : consigne de mise à jour quotidienne

Ce fichier est la consigne qu'exécute la tâche planifiée chaque matin (ou que tu peux donner à Claude à la main).

## Étapes

1. Détermine la date du jour au format `AAAA-MM-JJ` (fuseau Europe/Paris). Si `data/days/<date>.js` existe déjà, arrête-toi.
2. Lance la récupération des titres :
   `powershell -ExecutionPolicy Bypass -File scripts\fetch-news.ps1`
3. Lis `scripts/news-today.txt`. **N'utilise que les faits présents dans ce fichier**, sans rien inventer ni compléter de mémoire (ta connaissance de l'actualité récente n'est pas fiable). Si un fait n'y figure pas, ne l'écris pas.
4. Choisis 8 à 10 sujets en équilibrant les thèmes : politique française, international, Europe, économie, climat ou sciences, médias (il en faut toujours au moins un : c'est le cœur des concours), société et culture. Laisse de côté les faits divers sans portée générale.
5. Écris `data/days/<date>.js` en suivant **exactement** la structure de `data/days/2026-11-24.js` :
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

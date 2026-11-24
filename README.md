# Scoop 🗞️

**Chaque jour, l'actu en leçons. Et le concours en ligne de mire.**

C'est une application d'entraînement façon « appli de langues », pensée pour suivre l'actualité et préparer les concours des écoles de journalisme.

## Lancer

Double-clique sur `index.html`. Il n'y a ni serveur ni installation. La progression est enregistrée dans le navigateur.

## Ce qu'il y a dedans

- **L'édition du jour** (`#/day`) : 8 à 10 infos résumées, chacune avec son lien vers un concours (« 🎯 Pour le concours »), un mot du jour, un mémo et **3 leçons** (France, monde, médias et écriture). Faire l'édition le jour même rapporte un bonus d'XP.
- **Le parcours concours** : 7 unités et 20 leçons (institutions, Europe et monde, histoire des médias, déontologie et droit, écriture, langue française, économie et société). Chaque unité a sa **fiche de révision** 📖, et les leçons se débloquent dans l'ordre.
- **6 types d'exercices** : QCM, vrai/faux, réponse libre, remise en ordre, association de paires et **atelier d'écriture** (titre, attaque, chapô, avec une proposition de la rédaction et une auto-évaluation).
- **La gamification** : série de jours 🔥, XP ⚡, objectif quotidien 🎯, 9 niveaux (de Stagiaire à Prix Albert-Londres), étoiles par leçon, combos et compte à rebours avant le concours.
- **À revoir** 🔁 : chaque question ratée y est rangée et disparaît quand tu la réussis en révision.
- **Archives** de toutes les éditions, thème clair ou sombre, raccourcis clavier (1 à 4 pour choisir, Entrée pour valider, Échap pour quitter) et export ou import de la progression.

## Mise à jour quotidienne

```
scripts/fetch-news.ps1     → récupère les flux RSS (Le Monde, franceinfo, France 24) dans news-today.txt
scripts/DAILY_PROMPT.md    → consigne pour rédiger l'édition du jour à partir de ces titres
data/days/AAAA-MM-JJ.js    → l'édition générée
data/days/index.js         → la liste des éditions
```

Une tâche planifiée Claude peut exécuter `DAILY_PROMPT.md` chaque matin. Tu peux aussi demander à Claude, à la main : « Fais l'édition Scoop du jour en suivant scripts/DAILY_PROMPT.md ».

## Ajouter du contenu

Les unités du parcours se trouvent dans `data/units.js`. Le format de chaque type d'exercice est documenté en tête du fichier.

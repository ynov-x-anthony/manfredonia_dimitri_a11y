# AUDIT.md : audit d'accessibilité NewsHub

Les six problèmes repérés dans `src/App.tsx` :

| # | Problème trouvé (où, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui |
|---|------------------------------|-------------------------------|----------------------------------------|
| 1 | L'image `hero.jpg` n'a pas d'attribut `alt`. | Perceptible (P) | Une personne aveugle utilisant un lecteur d'écran ne reçoit aucune information sur l'image. |
| 2 | Le titre « Derniers articles » est un `<h3>` directement après le `<h1>`, sans titre de niveau 2. | Robuste (R) | La structure des titres est incohérente et rend la navigation par titres moins prévisible pour les personnes utilisant un lecteur d'écran. |
| 3 | « Voir plus » est un `<div onClick>` au lieu d'un bouton. | Opérable (O) | Le contrôle n'est pas naturellement accessible au clavier et n'est pas annoncé comme un bouton par les technologies d'assistance. |
| 4 | Le bloc `.carousel` ne propose aucun contrôle permettant de le masquer ou de le mettre en pause. | Opérable (O) | Si le bandeau défile ou se met à jour automatiquement, les personnes ayant besoin de plus de temps doivent pouvoir arrêter ou masquer ce contenu (WCAG 2.2.2). |
| 5 | Les trois liens ont le même texte « cliquez ici ». | Compréhensible (U) | Dans une liste de liens consultée hors contexte, une personne utilisant un lecteur d'écran ne peut pas distinguer leur destination. |
| 6 | L'état « annulé » ou « publié » est indiqué uniquement par la couleur du point. | Perceptible (P) | Une personne daltonienne ou consultant la page sans couleurs ne peut pas connaître le statut de l'article. |

> Rappel : P = Perceptible, O = Opérable, U = Utilisable (Compréhensible), R = Robuste.

> Note : le code fourni affiche `.carousel` comme un bloc statique. Le critère 2.2.2 ne s'applique que si le contenu défile, clignote ou se met à jour automatiquement ; dans ce cas, il faut ajouter un moyen de le mettre en pause, l'arrêter ou le masquer.

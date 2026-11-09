# AUDIT.md : à compléter

## 1. Audits outillés

Les extensions et interfaces Lighthouse, axe DevTools et WAVE ne sont pas
disponibles dans l'environnement de travail. Ces trois audits n'ont donc pas
été exécutés et aucun résultat ne leur est attribué. L'inspection du CSS et le
calcul WCAG des couleurs ci-dessous confirment les quatre contrastes insuffisants.

- **Lighthouse** : non exécuté (interface Lighthouse indisponible).
- **axe DevTools** : non exécuté (extension indisponible).
- **WAVE** : non exécuté (extension/service d'audit indisponible).

## 2. Les éléments à corriger

| Élément | Couleur texte | Couleur fond | Ratio mesuré | Ratio AA requis | Conforme ? |
|---------|---------------|--------------|--------------|------------------|------------|
| `.subtitle` | `#aaaaaa` | `#ffffff` | 2.32:1 | 4.5:1 | Non |
| `.label` | `#999999` | `#ffffff` | 2.85:1 | 4.5:1 | Non |
| `.hint` | `#bbbbbb` | `#ffffff` | 1.92:1 | 4.5:1 | Non |
| `.btn-primary` (avant correction) | `#ffffff` | `#6fa8dc` | 2.53:1 | 4.5:1 (texte) | Non |

Après correction, les ratios recalculés sont : `.subtitle` `#5c5c5c` sur blanc,
6.69:1 ; `.label` et `.hint` `#595959` sur blanc, 7.00:1 ; texte blanc du bouton
sur `#1a5fa8`, 6.47:1. Les quatre passent le seuil AA de 4.5:1.

> Utilise un vérificateur de contraste (ex. le picker de couleur de Chrome
> DevTools affiche déjà le ratio AA/AAA quand tu modifies une couleur).

## 3. Priorisation

1. **`.btn-primary`** : c'est l'action principale de gestion d'abonnement ; un
   contraste insuffisant peut empêcher de repérer ou lire la commande.
2. **`.hint`** : le texte long contient une information utile sur la facturation
   et son contraste initial est le plus faible (1.92:1).
3. **`.label`** : les libellés aident à comprendre la nature des informations
   présentées et étaient nettement sous le seuil AA.
4. **`.subtitle`** : le texte de contexte était lui aussi difficile à lire ;
   la correction le rend conforme et lisible.

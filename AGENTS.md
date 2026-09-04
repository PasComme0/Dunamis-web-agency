# Directives de Codage (Code Style Guidelines)

Ce document définit les règles de codage et les standards de développement à suivre pour le projet.

## 1. Principes Fondamentaux (SOLID & DRY)

### SOLID
Toutes les contributions au projet doivent respecter les principes **SOLID** adaptés à React et Next.js :
*   **S - Single Responsibility Principle (SRP) :** Une fonction, un composant ou un hook ne doit faire qu'une seule et unique chose (voir section dédiée ci-dessous).
*   **O - Open/Closed Principle (OCP) :** Les composants doivent être ouverts à l'extension mais fermés à la modification (ex: via la composition et l'usage de `children` ou de props de configuration).
*   **L - Liskov Substitution Principle (LSP) :** Tout sous-type de composant ou de fonction doit pouvoir remplacer son parent sans altérer le comportement attendu.
*   **I - Interface Segregation Principle (ISP) :** Ne pas forcer un composant ou une fonction à dépendre d'interfaces ou de props dont il n'a pas besoin. Préférer de petites props ciblées plutôt que de passer des objets volumineux.
*   **D - Dependency Inversion Principle (DIP) :** Découpler les modules. Utiliser l'injection de dépendances, le Context API de React ou des custom hooks pour masquer l'accès direct aux sources de données externes ou aux APIs de bas niveau.

### DRY (Don't Repeat Yourself)
*   Éviter la duplication de code logique et visuel.
*   Toute logique métier répétée plus de deux fois doit être extraite dans un helper, un utilitaire (`lib/`), ou un hook personnalisé (`hooks/`).
*   Créer des composants génériques et réutilisables dans `components/ui/`.

---

## 2. Responsabilité Unique des Fonctions (SRP)
*   Chaque fonction doit accomplir **une seule tâche** à la fois.
*   Si une fonction fait plusieurs choses (ex: formater des données, envoyer une requête API, et mettre à jour le state), elle doit être découpée en plusieurs fonctions spécialisées.
*   Les fonctions de rendu (composants React) doivent se concentrer sur l'UI. La logique complexe de gestion d'état ou de récupération de données doit être déportée dans des hooks ou des Server Actions.

---

## 3. Système de Logging et Débogage
*   Des logs clairs doivent être mis en place à chaque niveau de l'architecture pour faciliter le traçage et le débogage (Client, Server Actions, API Routes, Helpers).
*   Utiliser les niveaux de log appropriés :
    *   `console.debug` / `console.log` : Pour le flux normal de développement.
    *   `console.info` : Pour les étapes majeures de l'application (ex: "Panier initialisé", "Paiement réussi").
    *   `console.warn` : Pour les situations inattendues mais non bloquantes.
    *   `console.error` : Pour intercepter et tracer les exceptions (doit toujours inclure l'objet d'erreur d'origine).
*   Les logs doivent être descriptifs et structurés (ex: inclure des préfixes cohérents comme `[API:Panier]` ou `[HOOK:useAuth]`).

---

## 4. Normes de Commentaires
Chaque fonction doit être documentée de manière rigoureuse :
1.  **En-tête de la fonction :** Un commentaire global expliquant ce que la fonction est censée faire globalement, ses paramètres (`@param`) et sa valeur de retour (`@returns`).
2.  **Commentaires de blocs internes :** Au sein de la fonction, ajouter des commentaires courts et explicites pour chaque bloc logique ou étape critique de l'algorithme.

#### Exemple de structure de code recommandée :
```typescript
/**
 * Calcule le montant total du panier en appliquant les remises applicables.
 * 
 * @param items - Liste des articles présents dans le panier.
 * @param discountCode - Code promo optionnel à appliquer.
 * @returns Le montant total net après calculs.
 */
export function calculateCartTotal(items: CartItem[], discountCode?: string): number {
  console.info(`[CartTotal] Début du calcul du total pour ${items.length} articles.`);

  // Bloc 1 : Validation et gestion du cas panier vide
  if (!items || items.length === 0) {
    console.debug("[CartTotal] Le panier est vide. Retour direct de 0.");
    return 0;
  }

  // Bloc 2 : Somme des prix de chaque article (Prix unitaire * Quantité)
  console.debug("[CartTotal] Calcul de la somme brute des articles.");
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Bloc 3 : Application éventuelle des remises
  let total = subtotal;
  if (discountCode) {
    console.info(`[CartTotal] Application du code promo : ${discountCode}`);
    const discount = fetchDiscountValue(discountCode, subtotal);
    total = Math.max(0, subtotal - discount);
  }

  console.info(`[CartTotal] Calcul terminé. Total final : ${total}€.`);
  return total;
}
```

---

## 5. Gestion des Packages & Setup (Règles existantes)
*   Pour ajouter un package au workspace afin que Vite, ESLint et TypeScript puissent le voir, exécuter :
    ```bash
    pnpm install --filter <project_name>
    ```
*   Pour initialiser un nouveau package React + Vite avec la validation TypeScript, exécuter :
    ```bash
    pnpm create vite@latest <project_name> -- --template react-ts
    ```
*   Toujours vérifier le champ `name` à l'intérieur du `package.json` de chaque package pour confirmer le bon nom (ignorer le `package.json` racine).

## 6. Plan d'implementation
*   Toujours créer un plan d'implementation suivi d'une validation de l'utilisateur pour les demandes de modification et d'implémentation. Reformuler et clarifier la demande de l'utilisateur si nécessaire, toujours en posant des questions à l'utilisateur pour clarifier. Ne jamais implémenter la demande sans plan d'implementation. Toujours utiliser Markdown pour formater le plan d'implementation.

## 7. Sauvegarde & Synthèse de Séance (Fichier de Suivi)
*   À chaque implémentation ou modification réalisée dans le projet, créer ou mettre à jour un fichier de sauvegarde dans le dossier `artefacts_sessions/` nommé `sauvegarde_session_AAAA_MM_JJ.md` portant la date du jour (ex: `artefacts_sessions/sauvegarde_session_2026_08_26.md`).
*   Ce fichier doit consigner :
    1. Le contexte et les objectifs de la séance.
    2. La synthèse des réalisations et évolutions majeures.
    3. Le tableau d'impacts avec la liste complète des fichiers créés/modifiés/supprimés.
    4. Le bilan des tests et de la validation du build.
    5. Les recommandations de commandes Git pour le commit et le push.
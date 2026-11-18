# Renforcement: 

> Abstraire la logique des "products" dans un service "ProductAPI"

# Extension 1:

> Créer un principe de page "Maitre/Detail" sur l'entité "Recipes"

- ENDPOINT : https://dummyjson.com/recipes

## Appliquer une principe TOP/DOWN :

- Définition du type de données "Recipe"
    - Analyser la réponse serveur.
- Définition du type de réponse.
- Création de service.
- Création de pages.

# Extension 2:

> Créer un NotificationService (-- type service)

## Appliquer une principe TOP/DOWN :
- Définition du type de données "Notification"
    - "id"
    - "createdAt" (Timestamp :Date.now())
    - "level"
    - "title"
    - "message"
- Création de service.
    - méthode : "notify"
- Intégration : Sur chaque modification les services "api" doivent appeler la méthode "notify"
- Intégration : Créer un composant "NotificationUI" affichant la dernière notification.
- Intégration : Placer "NotificationUI" sous "app-root" sous "app-header".


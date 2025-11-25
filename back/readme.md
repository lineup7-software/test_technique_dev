# Backend - API de Gestion de Transactions

## Prérequis

- Django >= 5.0
- Django REST Framework >= 3.15

## Description

Ce projet implémente une API de gestion de transactions avec un système de points pour les contacts.

## Modèles de Données

### Contact

Gère les informations des contacts et leur solde de points.

- `id` : Identifiant unique
- `first_name` : Prénom
- `last_name` : Nom
- `email` : Adresse email
- `current_balance` : Solde de points actuel

### Product

Recense les produits disponibles.

- `id` : Identifiant unique
- `title` : Nom du produit
- `is_eligible` : Éligibilité aux points (boolean)
- `price` : Prix du produit

### Bill

Enregistre les transactions réalisées.

- Contient les informations de chaque transaction
- Lié aux contacts et aux produits via `BillProduct`

### BillProduct

Table de liaison entre les factures et les produits.

- Associe les produits utilisés à chaque transaction
- Stocke le montant de chaque produit dans la transaction

## API

### POST - Créer une transaction

**Entrées :**
- ID du contact
- Montant total de la transaction
- Nombre de points gagnés
- Numéro de transaction
- Informations des produits (ID produit, montant)

**Fonctionnement :**
1. Crée une nouvelle entrée dans la table `Bill`
2. Ajoute les produits associés dans `BillProduct`
3. Met à jour le `current_balance` du contact

**Calcul des points :**
Le nombre de points gagnés correspond au montant total des produits éligibles (`is_eligible = True`).

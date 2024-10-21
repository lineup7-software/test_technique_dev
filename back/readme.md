Model: Product, Contact, BillProduct, Bill
Le projet doit être réalisé avec Django >=  5.0 et django-rest-framework >= 3.15.
Le candidat devra mettre en place les 4 Models.
Le model Product servira à recenser les produits disponibles
Le model Contact servira à lister les contact disponible dans la Boxfid.

Le model Bill permettra de voir toutes les transactions réalisées 
Le model BillProduct permettra de connaitre les produits utilisés pour la transactions 

Contact:

id

first_name

last_name

email

current-balance

Product:

id

title

is_eligible

price

API POST:
L’api doit avoir avoir en entrée l’id du contact, le montant total de la transactions, le nombre de point gagné pour le contact,  le numéro de la transaction, ainsi que les informations nécessaires pour la création de la ligne de transactions.
Cette API doit pouvoir créer la transactions dans la table bill et ajouter dans la table bill_product l’id de la transaction ainsi que le produit utilisé et le montant du produit puis mettre a jour la current_balance du contact. 
Le nombre de point gagné pour une transaction est la valeur du montant de la totalité des produits si celui ci est eligible.   




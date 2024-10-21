from django.db import models


class Contact(models.Model):
    """
    Contact model
    """
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    current_balance = models.FloatField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.current_balance

    def update_current_balance(self, points):
        """
        Update current balance
        :param points:
        :return:
        """
        self.current_balance += sum(point for point in points)


class Product(models.Model):
    """
    Product model
    """
    title = models.CharField(max_length=50)
    is_loyalty = models.BooleanField(default=True)
    value = models.FloatField(default=0)

    def __str__(self):
        return self.title
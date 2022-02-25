import imp
import logging
from django.core.management.base import BaseCommand, CommandError
from cars.factories import CarFactory

class Command(BaseCommand):
    help = 'Populate the DB with dara'

    def handle(self, *args, **options):
        try:
            for i in range(10):
                CarFactory()
            logging.info('[POPULATE-DB] Done correctly ')
        except Exception as e:
            logging.warning(f'[POPULATE-DB] Error: {e} ')
            
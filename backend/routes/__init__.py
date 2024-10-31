from flask import Blueprint

contact_bp = Blueprint('contact', __name__)
histology_bp = Blueprint('histology', __name__)
mammography_bp = Blueprint('mammography', __name__)
sonography_bp = Blueprint('sonography', __name__)

from routes import contact
from routes import histology
from routes import mammography
from routes import sonography
from flask import Flask
from flask_cors import CORS
from models import db
from routes import contact_bp, histology_bp, mammography_bp, sonography_bp
from models.contact import Contact

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

app.register_blueprint(contact_bp)
app.register_blueprint(histology_bp)
app.register_blueprint(mammography_bp)
app.register_blueprint(sonography_bp)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
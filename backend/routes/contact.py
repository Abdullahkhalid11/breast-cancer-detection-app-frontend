from flask import request, jsonify
from routes import contact_bp
from models.contact import Contact
from models import db

@contact_bp.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Save the data to the database
    new_contact = Contact(name=name, email=email, message=message)
    db.session.add(new_contact)
    db.session.commit()

    return jsonify({'message': 'Thank you for contacting us, we will get back to you shortly.'})
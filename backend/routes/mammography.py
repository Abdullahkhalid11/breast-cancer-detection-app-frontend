from flask import request, jsonify, Blueprint
import os
from werkzeug.utils import secure_filename

mammography_bp = Blueprint('mammography', __name__)

# Dummy prediction function for mammography images
def predict_mammography_image(image_path):
    # Replace this with your actual prediction logic
    return "Malignant"

@mammography_bp.route('/predict_mammography', methods=['POST'])
def predict_mammography():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join('/tmp', filename)
        file.save(file_path)
        
        # Perform prediction
        prediction = predict_mammography_image(file_path)
        
        return jsonify({'prediction': prediction})

    return jsonify({'error': 'File not saved'}), 500
from flask import request, jsonify, Blueprint
import os
from werkzeug.utils import secure_filename

histology_bp = Blueprint('histology', __name__)

# Dummy prediction function for histopathological images
def predict_histology_image(image_path):
    # Replace this with your actual prediction logic
    return "Benign"

@histology_bp.route('/predict_histology', methods=['POST'])
def predict_histology():
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
        prediction = predict_histology_image(file_path)
        
        return jsonify({'prediction': prediction})

    return jsonify({'error': 'File not saved'}), 500
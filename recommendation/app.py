from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Initialize Flask app
app = Flask(__name__)

# Example alumni data
alumni_data = [
    {"alumni_id": "a1", "skills": ["python", "data analysis", "deep learning"]},
    {"alumni_id": "a2", "skills": ["java", "cloud computing", "microservices"]},
    {"alumni_id": "a3", "skills": ["python", "data science", "AI"]}
]

# Convert alumni data into DataFrame
alumni_df = pd.DataFrame(alumni_data)

# Convert skills lists into strings for TF-IDF processing
alumni_df['skills_str'] = alumni_df['skills'].apply(lambda x: ' '.join(x))

# Initialize TF-IDF Vectorizer
vectorizer = TfidfVectorizer()

# Fit TF-IDF Vectorizer on all skills data (alumni data)
vectorizer.fit(alumni_df['skills_str'].tolist())

# Transform alumni skills into TF-IDF vectors
alumni_vectors = vectorizer.transform(alumni_df['skills_str'])

# Recommendation function
def get_recommendations(new_student_skills):
    # Convert the new student's skills into string
    new_student_skills_str = ' '.join(new_student_skills)

    # Vectorize new student's skills
    new_student_vector = vectorizer.transform([new_student_skills_str])

    # Compute cosine similarity between new student and alumni
    similarities_to_new_student = cosine_similarity(new_student_vector, alumni_vectors)

    # Get top N alumni based on similarity score
    top_n = 5
    top_alumni_indices = similarities_to_new_student.argsort()[0][-top_n:]

    # Get recommended alumni IDs
    recommended_alumni_ids = alumni_df.iloc[top_alumni_indices]['alumni_id'].tolist()

    return recommended_alumni_ids

# Define a POST endpoint for the API
@app.route('/recommendations', methods=['POST'])
def recommend():
    try:
        print("Hello recommend")
        # Get the JSON data sent by the client
        data = request.get_json()

        # Extract new student's skills
        new_student_skills = data.get('skills')

        if not new_student_skills:
            return jsonify({"error": "Missing 'skills' in request data"}), 400

        # Get recommendations for the new student
        recommended_alumni_ids = get_recommendations(new_student_skills)

        # Return the recommendations as JSON
        return jsonify({
            "student_id": data.get("student_id"),
            "recommended_alumni_ids": recommended_alumni_ids
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True, host='0.0.0.0', port=5000)
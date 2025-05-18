from flask import Flask, jsonify, request
from flask_cors import CORS
from ai.assistant import AssistantLLM
import db


app = Flask(__name__)
PORT = 5000
CORS(app)

llm = AssistantLLM()

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json()
    user_message = data.get("message", "")

    return jsonify({"response": "Hello there!"})

if __name__ == "__main__":
    app.run(port=PORT, debug=True)

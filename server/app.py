from flask import Flask, jsonify
from flask_cors import CORS
from ai.assistant import AssistantLLM


app = Flask(__name__)
PORT = 5000
CORS(app)

llm = AssistantLLM()

@app.route("/api/chat", methods=["POST"])
def chat():

    return jsonify({"response": "Hello there!"})

if __name__ == "__main__":
    app.run(port=PORT, debug=True)

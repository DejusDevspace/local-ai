from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
from ai.prompts import base_template
from typing import Dict


model = "gemma3:1b"

class AssistantLLM:
    def __init__(self):
        self.llm = OllamaLLM(model=model)
        self.base_template = base_template
        self.default_prompt = ChatPromptTemplate.from_template(self.base_template)
        self.chain = self.default_prompt | self.llm

    def invoke(self, data: Dict) -> str:
        response = self.chain.invoke(data)
        return response

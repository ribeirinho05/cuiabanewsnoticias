import os, sys, time
os.environ['PYTHONUNBUFFERED'] = '1'
print("1. Importando biblioteca...", flush=True)
t = time.time()
import google.generativeai as genai
print(f"2. Import OK em {time.time()-t:.1f}s", flush=True)

from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))
key = os.getenv('GEMINI_API_KEY')
print(f"3. Chave: {key[:10]}...", flush=True)

genai.configure(api_key=key)
model = genai.GenerativeModel('gemini-2.5-flash')
print("4. Enviando teste ao Gemini...", flush=True)
resp = model.generate_content("Diga apenas: FUNCIONANDO")
print(f"5. RESPOSTA: {resp.text}", flush=True)
print("TESTE CONCLUIDO COM SUCESSO", flush=True)

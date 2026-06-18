"""
CUIABÁ NEWS — Agendador Automático
Executa a atualização somente Segunda e Quinta-feira, nos horários configurados
"""

import sys
import os
import time
import logging
from datetime import datetime

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from config import HORARIOS_ATUALIZACAO, DIAS_ATUALIZACAO

logger = logging.getLogger('cuiabanews.agendador')

DIAS_MAP = {
    'monday': 'every().monday',
    'tuesday': 'every().tuesday',
    'wednesday': 'every().wednesday',
    'thursday': 'every().thursday',
    'friday': 'every().friday',
    'saturday': 'every().saturday',
    'sunday': 'every().sunday',
}

DIAS_PT = {
    'monday': 'Segunda-feira',
    'tuesday': 'Terça-feira',
    'wednesday': 'Quarta-feira',
    'thursday': 'Quinta-feira',
    'friday': 'Sexta-feira',
    'saturday': 'Sábado',
    'sunday': 'Domingo',
}


def executar_agora():
    from main import configurar_logging, executar_atualizacao
    configurar_logging()
    logger.info("Execução manual iniciada")
    return executar_atualizacao()


def iniciar_agendador():
    import schedule
    from main import configurar_logging, executar_atualizacao

    configurar_logging()

    dias_str = ', '.join(DIAS_PT.get(d, d) for d in DIAS_ATUALIZACAO)

    logger.info("=" * 60)
    logger.info("CUIABÁ NEWS — Agendador Automático Iniciado")
    logger.info(f"Dias: {dias_str}")
    logger.info(f"Horários: {', '.join(HORARIOS_ATUALIZACAO)}")
    logger.info("=" * 60)

    for dia in DIAS_ATUALIZACAO:
        for horario in HORARIOS_ATUALIZACAO:
            dia_lower = dia.lower()
            if dia_lower == 'monday':
                schedule.every().monday.at(horario).do(_executar_com_logging)
            elif dia_lower == 'tuesday':
                schedule.every().tuesday.at(horario).do(_executar_com_logging)
            elif dia_lower == 'wednesday':
                schedule.every().wednesday.at(horario).do(_executar_com_logging)
            elif dia_lower == 'thursday':
                schedule.every().thursday.at(horario).do(_executar_com_logging)
            elif dia_lower == 'friday':
                schedule.every().friday.at(horario).do(_executar_com_logging)
            elif dia_lower == 'saturday':
                schedule.every().saturday.at(horario).do(_executar_com_logging)
            elif dia_lower == 'sunday':
                schedule.every().sunday.at(horario).do(_executar_com_logging)

            logger.info(f"  Agendado: {DIAS_PT.get(dia_lower, dia)} às {horario}")

    logger.info("\nExecutando atualização inicial...")
    _executar_com_logging()

    logger.info("\nAgendador rodando. Pressione Ctrl+C para parar.")
    while True:
        schedule.run_pending()
        time.sleep(30)


def _executar_com_logging():
    try:
        from main import executar_atualizacao
        logger.info(f"\n--- Atualização agendada: {datetime.now().strftime('%d/%m/%Y %H:%M')} ---")
        executar_atualizacao()
    except Exception as e:
        logger.error(f"Erro na execução agendada: {e}", exc_info=True)


def gerar_bat_windows():
    backend_dir = os.path.dirname(os.path.abspath(__file__))
    bat_content = f"""@echo off
cd /d "{backend_dir}"
python main.py
"""
    bat_path = os.path.join(backend_dir, 'atualizar.bat')
    with open(bat_path, 'w', encoding='utf-8') as f:
        f.write(bat_content)

    dias_str = ', '.join(DIAS_PT.get(d.lower(), d) for d in DIAS_ATUALIZACAO)

    logger.info(f"Arquivo .bat criado: {bat_path}")
    logger.info("Para agendar no Windows Task Scheduler:")
    logger.info(f"  1. Abra o Agendador de Tarefas do Windows")
    logger.info(f"  2. Criar Tarefa > Nome: 'CUIABÁ NEWS Atualizar'")
    logger.info(f"  3. Disparador: Semanal ({dias_str})")
    logger.info(f"  4. Horários: {', '.join(HORARIOS_ATUALIZACAO)}")
    logger.info(f"  5. Ação: Iniciar Programa > '{bat_path}'")
    return bat_path


if __name__ == '__main__':
    if len(sys.argv) > 1:
        comando = sys.argv[1]

        if comando == '--agora':
            sucesso = executar_agora()
            sys.exit(0 if sucesso else 1)

        elif comando == '--bat':
            logging.basicConfig(level=logging.INFO)
            gerar_bat_windows()

        elif comando == '--servico':
            iniciar_agendador()

        else:
            print("Uso:")
            print("  python agendador.py --agora     Executa uma atualização agora")
            print("  python agendador.py --servico   Roda como serviço contínuo")
            print("  python agendador.py --bat       Gera .bat para Task Scheduler")

    else:
        sucesso = executar_agora()
        sys.exit(0 if sucesso else 1)

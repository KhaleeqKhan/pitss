from flask import Flask, render_template, redirect
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
import os
import time
import logging

gecko_driver_path = '/usr/local/bin/geckodriver'
os.environ['PATH'] += os.pathsep + gecko_driver_path
options = Options()
app = Flask(__name__, template_folder='template')

# Konfiguration
try:
    driver = webdriver.Firefox(options=options)
except Exception as e:
    logging.error(f"An error occurred while initializing the driver: {str(e)}")
# Setze eine Wartezeit zwischen den Aktionen, um die Rate Limits einzuhalten
def perform_action(action):
    time.sleep(2)  # Warte 2 Sekunden zwischen den Aktionen
    action()

def open_website():
    driver.get('https://127.17.0.3:5000/shop')


def fill_form():
    input_element = driver.find_element_by_id('input-id')
    input_element.clear()  # Leere das Eingabefeld
    input_element.send_keys('Test')  # Setze den Wert

# Sende das Webformular ab
def submit_form():
    submit_button = driver.find_element_by_id('submit-button-id')
    submit_button.click()  # Klicke auf den Absende-Button

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/shop')
def shop():
    return render_template('shop.html')

@app.route('/survey')
def survey():
    return render_template('survey.html')

@app.route('/redirect')
def redirect_to_shop():
    try:
        open_website()
        perform_action(fill_form)
        perform_action(submit_form)
    except Exception as e:
        logging.error(f"An error occurred while redirecting to the shop: {str(e)}")
    return redirect('/shop')

if __name__ == '__main__':
    try:
        app.run(host='0.0.0.0', port=5000)
    except Exception as e:
        logging.error(f"An error occurred while running the app: {str(e)}")
    finally:
        driver.quit()
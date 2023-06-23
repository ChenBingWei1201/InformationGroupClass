now = 'https://www.accuweather.com/en/tw/taipei-city/315078/weather-forecast/315078'
daily = 'https://www.accuweather.com/en/tw/taipei-city/315078/daily-weather-forecast/315078'
import requests
from bs4 import BeautifulSoup as BS

def get_daily():
    sess = requests.Session()
    sess.headers.update({
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:80.0) Gecko/20100101 Firefox/80.0'})
    resp = sess.get(daily)
    soup = BS(resp.text, 'html.parser')
    daily_items = soup.find_all('div', class_='daily-wrapper')
    for i, item in enumerate(daily_items):
        daily_items[i] = {
            'date': item.find(class_='info').h2.find_all('span')[1].text,
            'high': int(item.find(class_='high').text[:-1]),
            'low': int(item.find(class_='low').text[1:-1]),
            'rain': int(item.find(class_='precip').text.strip().rstrip()[:-1]),
        }
    return daily_items

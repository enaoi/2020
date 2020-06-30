#!/usr/bin/env python

import requests
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

import os

DOWNLOAD_URL = 'https://unsplash.com/'
def driver_open(url):
  driver = webdriver.Chrome()
  driver.get(url)
  driver.maximize_window()
  WebDriverWait(driver,10)
  top = 700
  js="var q=document.documentElement.scrollTop="+top
  driver.execute_script(js)
  return driver


def parse_html(html):
  soup = BeautifulSoup(html)
  image_list_soup = soup.find(id='app')

  image_url_list = []

  for image_group in image_list_soup.find_all('div','nDTlD'):
    print(image_group)
    for image in image_group.find_all('img', '_2VWD4'):
      image_url_list.append(image["srcset"].split('?')[0])
  
  return image_url_list


def download_page(url):
  data = driver.get(url).content
  return data

def download_imgs(images):
  for url in images:
    root = "E:/pics/"
    path = root + url.split('/')[-1]+'.jpg'
    print(path)
    try:
      if not os.path.exists(root):
        os.mkdir(root)
      if not os.path.exists(path):
        read = requests.get(url)
        with open(path, 'wb') as f:
          f.write(read.content)
          f.close()
          print('文件保存成功')
      else:
        print('文件已存在')
    except:
      print('文件爬取失败')

def main():
  driver = driver_open(DOWNLOAD_URL)
  image_urls = parse_html(driver.page_source)
  download_imgs(image_urls)

if __name__ == '__main__':
  main()

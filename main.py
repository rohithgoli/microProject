from flask import Flask, render_template, request
import requests
import json

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("input.html")


@app.route('/user', methods=['POST', 'GET'])
def user_profile():
    username = request.args.get('name')

    url = f'https://api.github.com/users/{username}'

    result = requests.request('GET', url)
    result_dict = json.loads(result.content)
    return result_dict


if __name__ == '__main__':
    app.run(debug=True)
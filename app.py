from flask import Flask, flash, render_template, url_for, request, redirect, make_response, session, Markup


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)

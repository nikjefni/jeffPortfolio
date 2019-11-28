from flask import Flask, render_template, send_file, request, redirect
import PyPDF2
from flask_mail import Mail, Message
import os
app = Flask(__name__)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.environ["GMAIL_USERNAME"]
app.config['MAIL_PASSWORD'] = os.environ["GMAIL_PASSWORD"]
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/<string:page_name>')
def html_page(page_name):
    return render_template(page_name)


@app.route('/my-resume')
def resume():
    return send_file('./static/img/my-resume.pdf', attachment_filename='my-resume.pdf')

@app.route('/send-email')
def email():
    with app.app_context():
        msg = Message(subject= request.args.get("subject"),
                      sender=request.args.get("email"),
                      recipients=["nikjefni@gmail.com"], # replace with your email for testing
                      body=request.args.get("message"))
        mail.send(msg)
        return redirect("/contact.html")


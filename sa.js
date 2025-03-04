const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// parses request cookies, populating req.cookies and req.signedCookies
app.use(cookieParser());
// parse x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  if (req.cookies.remember) {
    res.send('Remembered :). Click to <a href=\'/forget\'>forget</a>');
  } else {
    res.send(`<form method="post">
        	      <label>
      		        <input type="checkbox" name="remember" />
			            Remember me
			          </label>
				        <input type="submit" />
			        </form>`);
  }
});
app.post('/', (req, res) => {
  if (req.body.remember) {
    res.cookie('remember', 1)
  }
  res.redirect('back');
});
app.get('/forget', (req, res) => {
  res.clearCookie('remember');
  res.redirect('back');
});
app.listen(3000);


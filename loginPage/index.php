<!DOCTYPE HTML>
<!--
	Eventually by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<?php
    
    if(!empty($_GET['username']){
            
        }

?>
<html>
	<head>
		<title>Simple Sycamore Login</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
	</head>
	<body>

		<!-- Header -->
			<header id="header">
				<h1>Log In</h1>
				<p>Using your <strong>Sycamore</strong> account</p>
			</header>

		<!-- Signup Form -->
			<form id="signup-form" method="post" action="#">
                <ul style="list-style-type:none;">
				<li><input type="text" name="schoolID" id="SchoolID" placeholder="School ID" /></li>
                <br />
				<li><input type="text" name="username" id="username" placeholder="Username" /></li>
                <br/>
				<li><input type="password" name="password" id="password" placeholder="Password" /></li>
                <br/>
				<li><input type="submit" value="Sign In"/></li>
                <br />
                <a href="../studentPage/index.html">
				<li><input type="button" value="Go to landing page"/></li>
				</a>
                </ul>
			</form>
                
		<!-- Scripts -->
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>
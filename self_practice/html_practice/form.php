<!DOCTYPE HTML>  
<html>
<head>
</head>
<body> 
<?php
// define variables and set to empty values
$name = $account = $password = $comments = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["account"]);
  $website = test_input($_POST["password"]);
  $comment = test_input($_POST["comments"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  <p><input type="text" name="name" id="name" placeholder="your name"></p>
  <p><input type="text" name="account" id="account" placeholder="account number"></p>
  <p><input type="password" name="password" placeholder="password"></p>
  <p><textarea name="commemts" id="commemts" cols="30" rows="10" placeholder="type your comments here"></textarea></p>
  <p>What below program have you learned before?</p>
  <p><input type="radio" name="learned" id="HTML">HTML</p>
  <p><input type="radio" name="learned" id="CSS">CSS</p>
  <p><input type="radio" name="learned" id="JavaScript">JavaScript</p>
  <p><input type="submit" value="submit!"></p>
</form>
<?php
echo "<h2>your input</h2>";
echo $name;
echo "<br>";
echo $account;
echo "<br>";
echo $password;
echo "<br>";
echo $comments
?>

</body>
</html>
